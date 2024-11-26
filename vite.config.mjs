import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
	plugins: [
		vue(), // 使用 Vite 的 Vue 插件
		// 分析打包
		visualizer({
			open: true,
		}),
	],
	resolve: {
		alias: {
			"@": resolve(__dirname, "packages"),
		},
	},
	build: {
		// 构建配置
		lib: {
			// 设置为构建库模式
			entry: "packages/index.js", // 入口文件，即你的组件库将从这里开始打包
			name: "GovUI", // 构建后的库的全局变量名（UMD模块名）
			fileName: (format) => `gov-ui.${format}.js`, // 输出文件的命名格式，根据构建格式（如 esm, cjs, iife 等）来命名
		},
		rollupOptions: {
			// Rollup 构建选项，Vite 基于 Rollup 构建
			external: ["vue"], // 排除 Vue，因为 Vue 是一个 peerDependency，不应该被打包进你的库中
			output: {
				globals: {
					vue: "Vue", // 在 UMD 构建中，为 Vue 提供一个全局变量名（通常是 'Vue'）
				},
				exports: "named",
			},
		},
		cssCodeSplit: true,
	},
});
