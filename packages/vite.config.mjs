/* eslint-disable no-undef */
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer"; // 预览打包后的报告
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
		// 参考：https://cn.vitejs.dev/guide/build#library-mode
		cssCodeSplit: true,
		assetsInlineLimit: 0,
		// 参考：https://cn.rollupjs.org/configuration-options/#output-dir
		rollupOptions: {
			// 确保外部化处理那些
			// 你不想打包进库的依赖
			external: ["vue"],
			output: [
				// ES 模块格式（无模块保留）用于组件库全局引入
				{
					format: "es",
					entryFileNames: "[name].js",
					exports: "named",
					name: "BqDesign",
					dir: "./build/dist",
				},
				// ES 模块格式（保留模块结构）用于组件库主动引入
				// preserveModules: true：保留模块的目录结构，输出的文件会保持与源代码相同的目录结构。
				// preserveModulesRoot: "packages"：指定源代码的根目录，这里设置为 packages，意味着输出的文件会从 packages 目录开始保持原有的目录结构。
				{
					format: "es",
					entryFileNames: "[name].js",
					exports: "named",
					preserveModules: true,
					preserveModulesRoot: "packages",
					dir: "./build/es",
				},
				// CommonJS 格式（保留模块结构）
				{
					format: "cjs",
					entryFileNames: "[name].js",
					exports: "named",
					preserveModules: true,
					preserveModulesRoot: "packages",
					dir: "./build/lib",
				},
			],
		},
		lib: {
			// 设置为构建库模式
			entry: resolve(__dirname, "index.js"),
			name: "GovUI", // 构建后的库的全局变量名（UMD模块名）
			fileName: (format) => `GovUI.${format}.js`,
		},
	},
});
