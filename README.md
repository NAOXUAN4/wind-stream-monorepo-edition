<p align="center">
  <img alt="Wind Stream UI Logo" src="./assets/windstreamlogo.png" width="200" style="margin-bottom: 20px;">
</p>

<h1 align="center">Wind Stream UI</h1>

<p align="center">
    一款基于 <strong>Vue 3</strong> + <strong>TypeScript</strong> + <strong>Vite</strong> 的现代化 Monorepo 组件库。
</p>

<p align="center">
  <img src="https://img.shields.io/badge/language-TypeScript-blue.svg" alt="TypeScript">
  <img src="https://img.shields.io/npm/v/wind-stream-ui" alt="NPM Version">
  <img src="https://img.shields.io/badge/license-MIT-green" alt="License">
  <img src="https://img.shields.io/badge/build-passing-brightgreen" alt="Build Status">
  <img src="https://img.shields.io/badge/coverage-90%25-green" alt="Coverage">
</p>

## ✨ 特性 (Features)

- 🏗 **Monorepo 架构**：采用 `pnpm` workspace 管理代码，模块解耦，工程化标准对标企业级项目。
- ⚡ **极致性能**：基于 `Vite` 构建，支持 **ESM/CJS** 双产物，配合 `sideEffects` 实现精准的 **Tree Shaking**。
- 🍸 **类型安全**：全量 **TypeScript** 编写，提供完整的 `.d.ts` 类型定义，杜绝 `any` 类型。
- 💡 **DX 友好**：支持 **Volar** 全局组件类型提示（Global Component Typing），编码体验丝滑。
- 🎨 **主题定制**：基于 **CSS Variables** 的样式系统，支持动态切换主题与暗黑模式。
- 🔧 **自动化流程**：集成 **Changesets** 与 **GitHub Actions**，实现全自动化的构建、测试与发版流。

## 📦 安装 (Installation)

```bash
# pnpm
pnpm add wind-stream-ui

# npm
npm install wind-stream-ui