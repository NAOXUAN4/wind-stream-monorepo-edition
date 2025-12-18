# 从本地项目移植到包发布
## 1. 仓库重构 
重建了monorepo-edition的仓库, 在 `root` 上 `init` 了`package.json`, 并设置 `private` 防止错误的发布 `root` 仓库

```json
{
  "name": "@wind-stream-ui/root",
  "private": true,
  "author": "Iyananna",
}
```
 
建立基础的`monorepo`结构:

```json
.
├── package // 组件库主体
├── docs // 文档
└── play // 测试场地
```

pnpm工作区配置文件 (`pnpm-workspace.yaml`)
```yaml
packages:
  - 'packages/*'  
  - 'play'       
  - 'docs'        
```

## 2. 组件库主体迁移

### 1. 配置 `package.json`, 迁移依赖
对于一个发布的仓库，需要在 `package.json` 中配置发布的地址等信息,以及版本号(发布时, 插件会读取`package.json`的版本号)

```json
{
  "name": "wind-stream-ui",
  "version": "1.x.x",
  "license": "MIT",
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  },
  ...
}
```

对于一个组件库, 清楚的声明组件库的依赖 (`devDependencies, peerDependencies, dependencies`) 非常重要,通常把开发工具归为`dev`, 可以蹭用户项目的`vue` 归为 `peer`, 代码内部引用的且无法'蹭'的归位常规依赖(`loadash...`).


### 2. 组件库入口文件 `index.json` (支持按需导入(`import from`)和全量引入(`app.use()`))

组件库的入口是中枢,是一个包的关键. 这里需要导出所有**需要被暴露的内容**. 包括 所有的**组件**, 和组件库的**Css**.

考虑到对于用户 **按需导入** 和 **全量导入** 的灵活性, `app.use` 式的插件导入需要先把组件类型转化为 `vue` 的 `Plugin`, 再逐个在使用时 `app.use()`
```typescript
// 导出安装器 (Vue 插件模式)
export default makeInstaller(components);

// 按需导入时使用
export {
    WsButton,
    WsIcon,
    WsCollapse,
    WsCollapseItem,
    WsToast,
    WsToolTip,
    WsDropDown,
    WsMessage,
    createMessage
};
```
**细节:** `app.use()` 方法要求一个 `type Plugin`, 要求包含 `install` 属性 (鸭子🦆类型). 因此先为我们的组件添加这个属性,后就可以 `app.use()` 了
```typescript
export function withInstall<T>(component: T) {
  (component as T & Plugin).install = (app: App) => {
    const name = (component as any).name;
    if (name) {
      app.component(name, component as any);
    }
  };
  return component as T & Plugin;
}

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    components.forEach((c) => app.use(c));
  };

  return {
    install,
    version: '0.0.1' 
  };
};
```

### 3. 机械搬运组件 + style sheet 入口
- 机械搬运组件不多赘述，原本组件库设计结构耦合性就不高 

`style sheet` 的文件格式:
```json
.
├── style
│   ├── index.scss // css入口文件
│   ├── var.scss // scss变量定义,配色系统计算(mix)
│   └── reset.scss // 格式化样式
├── button
│   ├── index.vue // 组件入口
│   └── style.scss
└── icon
    ├── index.vue
    └── style.scss
```

 - var.scss 部分:
 ```scss
    // primary
    --ws-primary-500: #47867b;
    --ws-primary-50: color-mix(in srgb, var(--ws-primary-500), white 90%);
    --ws-primary-100: color-mix(in srgb, var(--ws-primary-500), white 75%);
    --ws-primary-200: color-mix(in srgb, var(--ws-primary-500), white 60%);
    --ws-primary-300: color-mix(in srgb, var(--ws-primary-500), white 45%);
    --ws-primary-400: color-mix(in srgb, var(--ws-primary-500), white 25%);
    --ws-primary-600: color-mix(in srgb, var(--ws-primary-500), black 15%);
    --ws-primary-700: color-mix(in srgb, var(--ws-primary-500), black 30%);
    --ws-primary-800: color-mix(in srgb, var(--ws-primary-500), black 45%);
    --ws-primary-900: color-mix(in srgb, var(--ws-primary-500), black 60%);
 ```

## 2.1. git 仓库结构
```
.
├── master
├── dev
└── release
```

## 3. 版本发布
> 本仓库使用 pnpm workspace play中的 `wind-stream-ui` 包使用**软连接**
> ```json
>   "dependencies": {
>     "vue": "^3.5.24",
>     "wind-stream-ui": "workspace:*"
>   }
> ```

### 1. 组件库打包 (vite.config.ts 配置)
打包配置：
- `entry`: 设置包入口
- `minfy`： 不压缩，保持代码可读性
- 导出三种格式打包结果
- 配置 `rollup`, 声明外部依赖，排除 `vue`
```typescript
build: {
      lib: {
        entry: resolve(__dirname, './src/index.ts'),
        name: 'WindStreamUI',
        minify: false,
        fileName: (format: string) => {
          if (format === 'es') return 'es/index.mjs'; // ESM 产物
          if (format === 'umd') return 'index.umd.js'; // UMD 产物
          return 'lib/index.js'; // CommonJS 产物
        },
        formats: ['es', 'umd', 'cjs']
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    }
```

### 2. 使用 `changeset发布`
`changeset` 配置(`config.json`):
```json
{
  "$schema": "https://unpkg.com/@changesets/config@3.1.2/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "fixed": [],
  "linked": [],
  "access": "restricted",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": []
}
```

- 变更版本 (可指定只发布子仓库)
```bash
pnpm changeset
```

- 发布
```bash
pnpm changeset publish
```







