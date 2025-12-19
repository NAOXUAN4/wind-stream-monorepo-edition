# 组件库类型声明与全局组件注册
> typescript在编译后\运行时 不再具备能力,因此需要将其导出以支持组件库在为用户**提供类型和智能提示支持**
>

## 1. 类型导出 

在打包时借助 `vite-plugin-dts` 工具,导出类型文件为 `.d.ts`
```typescript
plugins: [
      vue(),
      dts({ 
        entryRoot: './src', // 指定源码根目录，防止类型文件目录结构乱掉
        outDir: ['dist/es', 'dist/lib'], // 输出到两个目录，分别给 ESM 和 CJS 用
        include: ['src/**/*.ts', 'src/**/*.vue', 'src/**/*.d.ts'],
        tsconfigPath: '../../tsconfig.json' // 指定 tsconfig
      })
    ],
```
需要注意类型推导链的**所有文件**都被导出,链条被破坏会让类型无法传递

## 2. `vue`全局组件注册, 支持 `Volar` 识别模板内内容

导出为全局组件，使 `Volar` 提供补全帮助和类型提示 
```typescript
export {} 

declare module 'vue' {
    export interface GlobalComponents {
        //  key : template 里写的标签名
        // value : type类型
        WsButton: typeof import('../index')['WsButton']
        WsIcon: typeof import('../index')['WsIcon']
        WsCollapse: typeof import('../index')['WsCollapse']
        WsCollapseItem: typeof import('../index')['WsCollapseItem']
        WsToast: typeof import('../index')['WsToast']
        WsMessage: typeof import('../index')['WsMessage']
        WsToolTip: typeof import('../index')['WsToolTip']
        WsDropDown: typeof import('../index')['WsDropDown']
    }
}
```

