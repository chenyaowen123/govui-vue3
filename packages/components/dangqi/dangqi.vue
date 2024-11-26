<template>
	<div class="gov-dangqi" :style="boxStyle">
		<img src="./dangqi.png" :style="imgStyle" />
	</div>
</template>

<script setup>
import { computed } from "vue";

defineOptions({
	name: "GovDangqi",
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
