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
			"/components/": [
				{
					text: "开发指南",
					items: [
						{ text: "安装", link: "/guide/design" },
						{ text: "快速上手", link: "/guide/color" },
						{ text: "自定义主题", link: "/guide/color" },
					],
				},
				{
					text: "组件",
					items: [
						{
							text: "基础组件",
							items: [
								{ text: "安装", link: "/guide/design" },
								{ text: "快速上手", link: "/guide/color" },
								{ text: "自定义主题", link: "/guide/color" },
							],
						},
						{
							text: "Form",
							items: [
								{ text: "安装", link: "/guide/design" },
								{ text: "快速上手", link: "/guide/color" },
								{ text: "自定义主题", link: "/guide/color" },
							],
						},
						{ text: "自定义主题", link: "/guide/color" },
					],
				},
			],
		},

		socialLinks: [
			{ icon: "github", link: "https://github.com/vuejs/vitepress" },
		],
	},
});
