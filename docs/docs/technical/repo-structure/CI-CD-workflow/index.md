# CI / CD WorkFlow 

> 使用Github Actions 进行自动化Lint\发包

## 1. CI
配置**lint, build**, *test*

```yaml
name: CI

# 触发时机：推送到 master 分支，或者任何 PR 提交时
on:
  push:
    branches:
      - master
    paths-ignore:  # 这些路径的变化会自动跳过
      - 'docs/**'
      - '**.md'
      - 'CHANGELOG.md'
      - 'README.md'
      - '.gitignore'
      - 'package-lock.json'
      - 'package.json'
  pull_request:
    branches:
      - master
    paths-ignore:  # 这些路径的变化会自动跳过
      - 'docs/**'
      - '**.md'
      - 'CHANGELOG.md'
      - 'README.md'
      - '.gitignore'
      - 'package-lock.json'
      - 'package.json'

jobs:
  # 任务 ID
  lint-and-test:
    runs-on: ubuntu-latest

    steps:
      # 1. 拉取代码
      - name: Checkout code
        uses: actions/checkout@v3

      # 2. 安装 pnpm
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      # 3. 设置 Node.js 环境
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 22.18.0
          cache: 'pnpm'

      # 4. 安装依赖
      - name: Install dependencies
        run: pnpm install

      # 5. 代码风格检查 (Eslint)
      - name: Lint
        run: pnpm run lint

      # 6. 构建检查 (确保能打包成功)
      - name: Build
        run: pnpm run build:packages

      # # 7. 运行单元测试
      # - name: Run Tests
      #   run: pnpm run test
```

配置命令(root 仓库`package.json`)
- `pnpm` 递归 `build`, 设置过滤器指定目录
- 指定 lint 
```json
"scripts": {
    "release": "changeset publish",
    "lint": "eslint packages/components --config packages/components/eslint.config.mjs",
    "test": "vitest run packages/components",
    "build:packages": "pnpm -r --filter=./packages/* build"
  }
```

细节： `Lint`对dist的忽略

```typescript
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "**/dist/**",           // 忽略所有 dist 目录
      "**/node_modules/**",   // 忽略 node_modules
      "**/docs/.vitepress/**",// 忽略 VitePress 缓存
      "**/*.d.ts",            // 忽略类型声明文件
      "**/package-lock.json", // 忽略包锁定文件
    ]
  },

  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginVue.configs["flat/essential"],
  { files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } } },
]);

```
![alt text](/public/technical/repo-design/cicd/image.png)

## 2. Release
> 使用Github Action自动处理发包，bot提pull request
```yaml
# .github/workflows/release.yml
name: Release

on:
  push:
    branches:
      - release

concurrency: ${{ github.workflow }}-${{ github.ref }}
jobs:
  release:
    name: Release
    runs-on: ubuntu-latest
    permissions:
      contents: write # 允许 Action 提交代码（回写版本号）
      pull-requests: write # 允许 Action 创建 PR
      id-token: write

    steps:
      - name: Checkout Repo
        uses: actions/checkout@v3

      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 22.18.0
          cache: 'pnpm'

      - name: Install Dependencies
        run: pnpm install

      # ⚠️ 关键：发布前必须先构建！
      - name: Build Packages
        run: pnpm run build:packages

      # 使用 Changesets Action 自动发版
      - name: Create Release Pull Request or Publish
        id: changesets
        uses: changesets/action@v1
        with:
          # 执行我们在 package.json 里定义的发布命令
          publish: pnpm run release
          # 提交信息
          commit: "chore: update versions"
          title: "chore: update versions"
        env:
          # GitHub Token (自动生成)
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          # NPM Token (我们在 Secrets 里配置的)
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

![alt text](/public/technical/repo-design/cicd/image-1.png)
