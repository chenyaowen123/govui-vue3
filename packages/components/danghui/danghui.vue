<template>
	<div class="gov-danghui">
		<img src="./danghui-red.png" :style="imgStyle" v-if="type === 'red'" />
		<img src="./danghui-yellow.png" :style="imgStyle" v-else />
	</div>
</template>

<script setup>
import { computed } from "vue";

defineOptions({
	name: "GovDanghui",
});

const props = defineProps({
	width: {
		type: [String, Number],
		default: 1080,
	},
	type: {
		type: String,
		default: "red",
		validator: (value) => {
			return ["red", "yellow"].includes(value);
		},
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
.gov-danghui {
	display: inline-block;
	font-size: 0;
	img {
		width: 100%;
		height: auto;
		display: block;
	}
}
</style>
