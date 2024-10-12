<template>
	<aside class="gov-aside" :style="style">
		<slot />
	</aside>
</template>

<script setup>
import { computed } from "vue";

defineOptions({
	name: "GovAside",
});

const props = defineProps({
	width: {
		type: [String, Number],
		default: null,
	},
});

const style = computed(() => {
	const val = props.width;
	return {
		width: typeof val === "number" ? `${val}px` : val || null,
	};
});
</script>

<style lang="scss" scoped>
@use "../../styles/theme" as *;
.gov-aside {
	overflow: auto;
	box-sizing: border-box;
	flex-shrink: 0;
	width: var(--gov-aside-width);
}
</style>
