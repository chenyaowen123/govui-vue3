<template>
	<div
		:class="`gov-grid-col gov-grid-col-${responsive.span} gov-grid-offset-${responsive.offset}`"
		style="padding-left: var(--xGap); padding-right: var(--xGap)"
		:style="`flex: ${flexValue}; order: ${props.order};`"
	>
		<slot></slot>
	</div>
</template>

<script setup>
import { computed } from "vue";
import { useResponsive } from "./useResponsive.js";

defineOptions({
	name: "GovCol",
});

const props = defineProps({
	// 栅格占据的列数 0 - 24，优先级低于响应式，0 表示不显示，undefined 不设置
	span: {
		type: Number,
		default: undefined,
		validator: (value) => {
			return value === undefined || (value >= 0 && value <= 24);
		},
	},
	// 栅格左侧的间隔格数，0 - 24
	offset: {
		type: Number,
		default: 0,
		validator: (value) => {
			return value >= 0 && value <= 24;
		},
	},
	// flex 布局填充
	flex: {
		type: [String, Number],
		default: undefined,
	},
	// flex 布局下，栅格顺序，取 0,1,2...
	order: {
		type: Number,
		default: 0,
	},
	xs: {
		type: [Number, Object],
		default: undefined,
	},
	sm: {
		type: [Number, Object],
		default: undefined,
	},
	md: {
		type: [Number, Object],
		default: undefined,
	},
	lg: {
		type: [Number, Object],
		default: undefined,
	},
	xl: {
		type: [Number, Object],
		default: undefined,
	},
	xxl: {
		type: [Number, Object],
		default: undefined,
	},
});

const flexValue = computed(() => {
	if (typeof props.flex === "number") {
		return `${props.flex} ${props.flex} auto`;
	}
	return props.flex;
});

// 计算span 和 offset
const responsive = useResponsive(props);
</script>
