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
