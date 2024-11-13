const componentSidebar = [
	{
		text: "开发指南",
		items: [
			{ text: "设计原则", link: "/guide/design" },
			{ text: "安装", link: "/guide/installation" },
			{ text: "快速上手", link: "/guide/quickstart" },
			{ text: "自定义主题", link: "/guide/color" },
			{ text: "Typography 字体", link: "/guide/typography" },
		],
	},
	{
		text: "组件",
		items: [
			{
				text: "规范化",
				items: [
					{
						text: "Guoqi 国旗",
						link: "/component/guoqi", // https://www.gov.cn/guoqing/guoqi/
					},
					{
						text: "Guohui 国徽",
						link: "/component/guohui", // https://www.gov.cn/guoqing/guohui/
					},
					{
						text: "Dangqi 党旗",
						link: "/component/dangqi", // https://mp.weixin.qq.com/s?__biz=MzIwMTY1Mjc0NQ==&mid=2651449627&idx=3&sn=3cf62a89191e1b7b976dd010f3409ad3&chksm=8cc1a39c3412675408560549aaa59fab8e73b892bc9dd22981bd379b50ecb08ef9665a9077ce&scene=27
					},
					{
						text: "Danghui 党徽",
						link: "/component/danghui", // https://mp.weixin.qq.com/s?__biz=MzIwMTY1Mjc0NQ==&mid=2651449627&idx=3&sn=3cf62a89191e1b7b976dd010f3409ad3&chksm=8cc1a39c3412675408560549aaa59fab8e73b892bc9dd22981bd379b50ecb08ef9665a9077ce&scene=27
					},
				],
			},
			{
				text: "基础组件",
				items: [
					{
						text: "Grid 栅格化",
						link: "/component/grid",
					},
					{
						text: "Container 布局容器",
						link: "/component/container",
					},
					{
						text: "Icon 图标",
						link: "/component/icon",
					},
					{
						text: "Button 按钮",
						link: "/component/button",
					},
					{
						text: "Link 文本链接",
						link: "/component/link",
					},
					{
						text: "Alert 警告",
						link: "/component/alert",
					},
					{
						text: "Blockquote 引用",
						link: "/component/blockquote",
					},
					{
						text: "Tag 标签",
						link: "/component/tag",
					},
					{
						text: "Ellipsis 文本折叠",
						link: "/component/ellipsis",
					},
					{
						text: "Loading 加载",
						link: "/component/loading",
					},
				],
			},
			{
				text: "表单",
				items: [
					{
						text: "Radio 单选框",
						link: "/component/radio",
					},
					{
						text: "Checkbox 多选框",
						link: "/component/checkbox",
					},
					{
						text: "Input 输入框",
						link: "/component/input",
					},
					{
						text: "InputAuto 自动补全",
						link: "/component/inputauto",
					},
					{
						text: "InputNumber 计数器",
						link: "/component/inputnumber",
					},
					{
						text: "Textarea 文本域",
						link: "/component/textarea",
					},
					{
						text: "Select 选择器",
						link: "/component/select",
					},
					{
						text: "Cascader 级联选择器",
						link: "/component/cascader",
					},
					{
						text: "CascaderPanel 级联面板",
						link: "/component/cascaderpanel",
					},
					{
						text: "Switch 开关",
						link: "/component/switch",
					},
					{
						text: "Datepicker 日期选择器",
						link: "/component/datepicker",
					},
					{
						text: "Upload 上传",
						link: "/component/upload",
					},
					{
						text: "Rate 评分",
						link: "/component/rate",
					},
					{
						text: "Editor 富文本",
						link: "/component/link", // 自定义表单控件和表单组件配合
					},
					{
						text: "Form 表单",
						link: "/component/form",
					},
				],
			},
			{
				text: "弹出",
				items: [
					{
						text: "Drawer 抽屉",
						link: "/component/link",
					},
					{
						text: "Dialog 对话框",
						link: "/component/dialog",
					},
					{
						text: "Message 消息提示",
						link: "/component/message",
					},
					{
						text: "MessageBox 消息弹框",
						link: "/component/messagebox",
					},
					{
						text: "Popper 弹窗",
						link: "/component/popper",
					},
					{
						text: "Popconfirm 气泡确认框",
						link: "/component/popconfirm",
					},
					{
						text: "Tooltip 文字提示",
						link: "/component/tooltip",
					},
					{
						text: "Notification 通知",
						link: "/component/notification",
					},
					// 引导
				],
			},
			{
				text: "数据",
				items: [
					{
						text: "Avatar 头像",
						link: "/component/avatar",
					},
					{
						text: "Usercard 人员信息卡",
						link: "/component/usercard",
					},
					{
						text: "Badge 标记",
						link: "/component/badge",
					},
					{
						text: "Card 卡片",
						link: "/component/Card",
					},
					{
						text: "Collapse 折叠面板",
						link: "/component/collapse",
					},
					// Descriptions 描述列表
					{
						text: "Empty 空状态",
						link: "/component/empty",
					},
					{
						text: "Pagination 分页",
						link: "/component/pagination",
					},
					{
						text: "Progress 进度条",
						link: "/component/progress",
					},
					{
						text: "Result 结果",
						link: "/component/result",
					},

					{
						text: "Table 表格",
						link: "/component/table",
					},
					{
						text: "Swiper 轮播",
						link: "/component/swiper",
					},
					{
						text: "Timeline 时间线",
						link: "/component/timeline",
					},
					{
						text: "Tree 树形控件",
						link: "/component/tree",
					},
				],
			},
			{
				text: "导航",
				items: [
					{
						text: "Backtop 回到顶部",
						link: "/component/backtop",
					},
					{
						text: "Breadcrumb 面包屑",
						link: "/component/breadcrumb",
					},
					{
						text: "Dropdown 下拉菜单",
						link: "/component/dropdown",
					},
					{
						text: "Menu 菜单",
						link: "/component/link",
					},
					{
						text: "PageContainer 页面容器",
						link: "/component/pagecontainer",
					},
					// 页面模块标题。
					{
						text: "Steps 步骤条",
						link: "/component/steps",
					},
					{
						text: "Tabs 标签页",
						link: "/component/tabs",
					},
				],
			},

			{
				text: "其它",
				items: [
					{
						text: "Qrcode 二维码",
						link: "/component/qrcode",
					},
				],
			},
		],
	},
];

const sidebar = {
	"/component/": componentSidebar,
	"/guide/": componentSidebar,
};

export default sidebar;
