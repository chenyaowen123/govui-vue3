import { defineConfig } from "vitepress";
import sidebar from "./sidebar";
import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: "docs",
	title: "GovUI",
	description: "政府系统专用UI",
	themeConfig: {
		logo: "/logo.png",
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "首页", link: "/" },
			{ text: "指南", link: "/guide/" },
			{ text: "组件", link: "/component/button/" },
		],
		sidebar,
		socialLinks: [
			{ icon: "github", link: "https://github.com/vuejs/vitepress" },
		],
	},
	// vitepress默认有配置，所以这里的别名应该和主项目的 vite.config.mjs 保持一直
	vite: {
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "../packages"),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					api: "modern-compiler", // or 'modern'
				},
			},
		},
	},
});
