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
