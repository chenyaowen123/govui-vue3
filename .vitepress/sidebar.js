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
					// blockquote
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
						text: "InputNumber 计数器",
						link: "/component/button",
					},
					{
						text: "Select 选择器",
						link: "/component/link",
					},
					{
						text: "Cascader 级联选择器",
						link: "/component/link",
					},
					{
						text: "Switch 开关",
						link: "/component/link",
					},
					{
						text: "Slider 滑块",
						link: "/component/link",
					},
					{
						text: "TimePicker 时间选择器",
						link: "/component/link",
					},
					{
						text: "DatePicker 日期选择器",
						link: "/component/link",
					},
					{
						text: "DateTimePicker 时间选择器",
						link: "/component/link",
					},
					{
						text: "Upload 上传",
						link: "/component/link",
					},
					{
						text: "Rate 评分",
						link: "/component/link",
					},
					{
						text: "Editor 富文本",
						link: "/component/link",
					},
					{
						text: "Markdown Editor 富文本",
						link: "/component/link",
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
						text: "Popper 弹窗",
						link: "/component/popper",
					},
					{
						text: "Popconfirm 气泡确认框",
						link: "/component/popconfirm",
					},
					// 基于 vue-popper 写一个 Tooltip 文字提示
					{
						text: "Dialog 对话框",
						link: "/component/dialog",
					},
					{
						text: "MessageBox 消息弹框",
						link: "/component/messagebox",
					},
					// Message 消息提示，基于（Alert 警告）组件的
					// Notification 通知
					// 抽屉
					// 引导
				],
			},
			{
				text: "数据",
				items: [
					{
						text: "Table 表格",
						link: "/component/table",
					},
					{
						text: "Swiper 轮播",
						link: "/component/swiper",
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
