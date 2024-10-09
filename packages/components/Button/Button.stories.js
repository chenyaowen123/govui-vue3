import { fn } from "@storybook/test";

import MyButton from "./Button.vue";

// 更多stories配置: https://storybook.js.org/docs/writing-stories
export default {
	title: "Example/Button", // 目录和名称
	component: MyButton, // 组件
	tags: ["autodocs"], // 自动文档
	// 带配置项的参数
	argTypes: {
		size: {
			control: { type: "select" },
			options: ["small", "medium", "large"],
		},
		backgroundColor: { control: "color" },
	},
	// 不带配置项的参数
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
};

// 同级别更多的展示，: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
	args: {
		primary: true,
		label: "Button",
	},
};

export const Secondary = {
	args: {
		label: "Button",
	},
};

export const Large = {
	args: {
		size: "large",
		label: "Button",
	},
};

export const Small = {
	args: {
		size: "small",
		label: "Button",
	},
};
