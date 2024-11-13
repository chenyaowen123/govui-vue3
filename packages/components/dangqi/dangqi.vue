<template>
	<div class="gov-dangqi">
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
const imgStyle = computed(() => {
	return {
		width: Number(props.width) + "px",
		height: "auto",
	};
});
</script>

<style scoped lang="scss">
.gov-dangqi {
	display: inline-block;
	font-size: 0;
	img {
		width: 100%;
		height: auto;
		display: block;
	}
}
</style>
