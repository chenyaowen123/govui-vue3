<template>
	<div class="gov-guoqi">
		<img src="./guoqi-2048.png" :style="imgStyle" />
	</div>
</template>

<script setup>
import { computed } from "vue";

defineOptions({
	name: "GovGuoqi",
});

const props = defineProps({
	width: {
		type: [String, Number],
		default: 2048,
	},
});

// 计算图片样式
const imgStyle = computed(() => {
	return {
		width: props.width + "px",
		height: "auto",
	};
});
</script>

<style scoped lang="scss">
.gov-guoqi {
	display: inline-block;
	font-size: 0;
	img {
		width: 100%;
		height: auto;
		display: block;
	}
}
</style>
