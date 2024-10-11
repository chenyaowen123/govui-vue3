<template>
	<footer class="gov-footer" :style="style">
		<slot />
	</footer>
</template>
<script setup>
import { computed } from "vue";

defineOptions({
	name: "GovFooter",
});

const props = defineProps({
	height: {
		type: String,
		default: null,
	},
});

const style = computed(() => {
	const val = props.height;
	return {
		height: typeof val === "number" ? `${val}px` : val || null,
	};
});
</script>

<style lang="scss" scoped>
.gov-footer {
	padding: 0 20px;
	box-sizing: border-box;
	flex-shrink: 0;
	height: 60px;
}
</style>
