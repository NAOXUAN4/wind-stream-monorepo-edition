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

```
.
├── package # 组件库主体
├── docs # 文档
└── play # 测试场地
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






