<template>
	<div class="gov-guohui" :style="boxStyle">
		<img src="./guohui.png" :style="imgStyle" />
	</div>
</template>

<script setup>
import { computed } from "vue";

defineOptions({
	name: "GovGuohui",
});

const props = defineProps({
	width: {
		type: [String, Number],
		default: 1080,
	},
});

// 计算图片样式
const boxStyle = computed(() => {
	return {
		display: " inline-block",
		fontSize: 0,
	};
});

const imgStyle = computed(() => {
	return {
		width: Number(props.width) + "px",
		height: "auto",
		display: "block",
	};
});
</script>
