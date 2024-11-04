<template>
	<div class="gov-timeline-item">
		<!-- 线 -->
		<div class="gov-timeline-item__tail" />
		<!-- 图标 -->
		<div
			v-if="!$slots.dot"
			:class="[
				'gov-timeline-item__node',
				`gov-timeline-item__node-size--${size}`,
				`gov-timeline-item__node--${type}`,
				{ 'gov-timeline-item__node--hollow': hollow },
			]"
			:style="{ backgroundColor: color }"
		>
			<GovIcon v-if="icon" :name="icon" class="gov-timeline-item__icon" />
		</div>
		<div v-if="$slots.dot" class="gov-timeline-item__dot">
			<slot name="dot" />
		</div>
		<!-- 内容 -->
		<div class="gov-timeline-item__wrapper">
			<div
				v-if="!hideTimestamp && placement === 'top'"
				class="gov-timeline-item__timestamp gov-timeline-item__timestamp--top"
			>
				{{ timestamp }}
			</div>
			<div class="gov-timeline-item__content">
				<slot />
			</div>
			<div
				v-if="!hideTimestamp && placement === 'bottom'"
				class="gov-timeline-item__timestamp gov-timeline-item__timestamp--bottom"
			>
				{{ timestamp }}
			</div>
		</div>
	</div>
</template>

<script setup>
import GovIcon from "../icon/icon.vue";
defineOptions({
	name: "GovTimelineItem",
});

defineProps({
	timestamp: {
		type: String,
		default: "",
	}, // 时间戳
	hideTimestamp: Boolean, // 隐藏时间戳
	placement: {
		type: String,
		values: ["top", "bottom"],
		default: "bottom", // 内容和时间戳的位置
	},
	type: {
		type: String,
		values: ["primary", "success", "warning", "danger", "info"],
		default: "default", // 圆点颜色类型
	},
	color: {
		type: String,
		default: "", // 圆点颜色（背景色）
	},
	size: {
		type: String,
		values: ["large", "default", "small"],
		default: "default", // 大小
	},
	icon: String, // 图标名称
	hollow: Boolean, // 是否空心
});
</script>

<style lang="scss">
@import "./timeline-item.scss";
</style>
