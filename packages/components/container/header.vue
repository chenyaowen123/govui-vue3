<template>
	<header class="gov-header" :style="style">
		<slot />
	</header>
</template>
<script setup>
import { computed } from "vue";

defineOptions({
	name: "GovHeader",
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

<style lang="scss">

.gov-header {
	padding: 0 20px;
	box-sizing: border-box;
	flex-shrink: 0;
	height: 60px;
}
</style>
