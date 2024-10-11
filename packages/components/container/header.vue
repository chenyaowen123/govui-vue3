<template>
	<header class="gov-header" :style="style">
		<slot />
	</header>
</template>
<script setup>
import { computed } from "vue";
import { ensureCssUnit } from "../../utils/index";

defineOptions({
	name: "GovHeader",
});

const props = defineProps({
	height: {
		type: String,
		default: "60px",
	},
});

const style = computed(() => {
	return {
		height: ensureCssUnit(props.height),
	};
});
</script>
