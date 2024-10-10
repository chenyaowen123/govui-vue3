const componentSidebar = [
	{
		text: "开发指南",
		items: [
			{ text: "设计原则", link: "/guide/design" },
			{ text: "安装", link: "/guide/installation" },
			{ text: "快速上手", link: "/guide/quickstart" },
			{ text: "自定义主题", link: "/guide/color" },
			{ text: "Typography 字体", link: "/guide/typography" },
			{ text: "颜色 color", link: "/guide/color" },
		],
	},
	{
		text: "组件",
		items: [
			{
				text: "基础组件",
				items: [
					{
						text: "Grid 栅格化",
						link: "/components/Grid/",
					},
					{
						text: "Container 布局容器",
						link: "/components/Container/",
					},
					{
						text: "Button 按钮",
						link: "/components/Button/",
					},
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
];

const sidebar = {
	"/": componentSidebar,
	"/guide/": componentSidebar,
};

export default sidebar;
