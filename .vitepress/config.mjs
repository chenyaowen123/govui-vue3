import { defineConfig } from "vitepress";
import sidebar from "./sidebar";
import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: "docs",
	appearance: false,
	title: "GovUI",
	description: "基于 Vite 和 Vue3 的政府系统专用UI组件库",
	rewrites: {
		"component/base/:page/(.*)": "component/:page/(.*)", // 基础
		"component/datas/:page/(.*)": "component/:page/(.*)", // 数据类
		"component/forms/:page/(.*)": "component/:page/(.*)", // 表单类
		"component/navigation/:page/(.*)": "component/:page/(.*)", // 数据类
		"component/other/:page/(.*)": "component/:page/(.*)", // 其它类
		"component/standard/:page/(.*)": "component/:page/(.*)", // 规范化
		"component/tanchu/:page/(.*)": "component/:page/(.*)", // 弹出类
	},
	themeConfig: {
		logo: "/logo.png",
		outline: {
			label: "页面导航",
		},
		docFooter: {
			prev: "上一篇",
			next: "下一篇",
		},
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "首页", link: "/" },
			{ text: "指南", link: "/guide/" },
			{ text: "🔥 组件", link: "/component/button/" },
		],
		sidebar,
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/chenyaowen123/govui-vue3",
			},
			{
				icon: {
					svg: '<svg t="1732784770568" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3242" width="200" height="200"><path d="M0 0v1024h1024V0H0z m832 832h-128V320H512v512H192V192h640v640z" p-id="3243"></path></svg>',
				},
				link: "https://www.npmjs.com/package/govui-vue3",
			},
		],
		footer: {
			message: "Released under the MIT License.",
			// copyright: 'Copyright © 2023-present The Muse Catcher'
		},
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
