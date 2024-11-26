<template>
	<div class="gov-grid-row" :class="{ 'gutter-row': gutter }" :style="style">
		<slot />
	</div>
</template>

<script setup>
import { useStyle } from "./useStyle.js";

defineOptions({
	name: "GovRow",
});

const props = defineProps({
	width: {
		type: [String, Number],
		default: "auto",
	},
	// 间隔，实例：
	// <gov-row :gutter="16">
	// <gov-row :gutter="{ xs: 8, sm: 16, md: 24 }">
	// <gov-row :gutter="[16, 24]">
	// <gov-row :gutter="[16, { xs: 8, sm: 16, md: 24 }]">
	// <gov-row :gutter="[{ xs: 8, sm: 16 }, 24]">
	gutter: {
		type: [Number, Object, Array],
		default: 0,
	},
	// 垂直对齐方式
	align: {
		type: String,
		default: "flex-start",
		validator: (value) =>
			["flex-start", "center", "flex-end", "stretch"].includes(value),
	},
	// 水平对齐方式
	justify: {
		type: String,
		default: "start",
		validator: (value) =>
			[
				"start",
				"end",
				"center",
				"space-around",
				"space-between",
				"space-evenly",
			].includes(value),
	},
});

// 计算Gap
const style = useStyle(props);
</script>
