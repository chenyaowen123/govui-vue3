<template>
	<div :class="`gov-progress gov-progress-${type}`">
		<template v-if="type === 'circle'">
			<svg viewBox="0 0 120 120">
				<circle
					cx="60"
					cy="60"
					:r="innerRadius"
					:stroke-width="strokeWidth"
					:stroke="backgroundColor"
					fill="none"
				/>
				<circle
					cx="60"
					cy="60"
					:r="innerRadius"
					:stroke-width="strokeWidth"
					:style="circleStyle"
					stroke-linecap="round"
					fill="none"
				/>
			</svg>
			<div class="gov-progress-circle__content">
				<transition name="gov-progress-fade">
					<span v-if="modelValue < 100">
						<slot :value="modelValue">{{ modelValue }}%</slot>
					</span>
					<span v-else>
						<slot :value="modelValue">完成</slot>
					</span>
				</transition>
			</div>
		</template>
		<template v-else>
			<div class="gov-progress-line__bar" :style="barStyle">
				<div
					class="gov-progress-line__bar-inner"
					:style="lineStyle"
				></div>
			</div>
			<div class="gov-progress-line__content">
				<transition name="gov-progress-fade">
					<span v-if="modelValue < 100">
						<slot :value="modelValue">{{ modelValue }}%</slot>
					</span>
					<span v-else>
						<slot :value="modelValue">完成</slot>
					</span>
				</transition>
			</div>
		</template>
	</div>
</template>

<script setup>
import { computed } from "vue";

defineOptions({
	name: "GovProgress",
});

const props = defineProps({
	modelValue: {
		type: Number,
		default: 0,
		validator: (value) => value >= 0 && value <= 100, // 绑定值0-100
	},
	strokeWidth: {
		type: Number,
		default: 6, // 环形或者线形的宽度
		validator: (value) => value >= 2 && value <= 50, // 绑定值2-50
	},
	type: {
		type: String,
		default: "line",
		validator: (value) => ["line", "circle"].includes(value), // 线或者圆形
	},
	backgroundColor: {
		type: String,
		default: "#e6e8eb", // progress 背景色
	},
	color: {
		type: String,
		default: "#e74c3c", // progress主色
	},
	completeColor: {
		type: String,
		default: "#27ae60", // 100%（完成后）的色彩
	},
});

// 计算内圆半径
const innerRadius = computed(() => {
	return 60 - props.strokeWidth / 2;
});

// 进度颜色
const lineColor = computed(() => {
	return props.modelValue === 100 ? props.completeColor : props.color;
});

// 圆形的样式
const circleStyle = computed(() => {
	const circumference = 2 * Math.PI * innerRadius.value;
	const offset = ((100 - props.modelValue) / 100) * circumference;
	return {
		stroke: lineColor.value,
		strokeDasharray: `${circumference}px`,
		strokeDashoffset: `${offset}px`,
		transition: "stroke-dashoffset 0.5s ease-out, stroke 0.5s ease-out",
	};
});

// 单行进度条的外层样式
const barStyle = computed(() => {
	return {
		borderRadius: `${props.strokeWidth}px`,
		backgroundColor: props.backgroundColor,
	};
});

// 单行进度条的内层样式
const lineStyle = computed(() => {
	return {
		width: `${props.modelValue}%`,
		height: `${props.strokeWidth}px`,
		borderRadius: `${props.strokeWidth}px`,
		backgroundColor: lineColor.value,
	};
});
</script>
