import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	srcDir: "packages",
	title: "GovUI",
	description: "政府系统专用UI",
	themeConfig: {
		logo: "/logo.png",
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "首页", link: "/" },
			{ text: "指南", link: "/guide" },
			{ text: "组件", link: "/components" },
		],

		sidebar: {
			"/guide/": [
				{
					text: "指南",
					link: "/guide/",
					items: [
						{ text: "设计原则", link: "/guide/design" },
						{ text: "颜色 color", link: "/guide/color" },
					],
				},
			],
		},

		socialLinks: [
			{ icon: "github", link: "https://github.com/vuejs/vitepress" },
		],
	},
});
