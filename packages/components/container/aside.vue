<template>
	<aside class="gov-aside" :style="style">
		<slot />
	</aside>
</template>

<script setup>
import { computed } from "vue";
import { ensureCssUnit } from "../../utils/index";

defineOptions({
	name: "GovAside",
});

const props = defineProps({
	width: {
		type: [String, Number],
		default: "250px",
	},
});

const style = computed(() => {
	return {
		width: ensureCssUnit(props.width),
	};
});
</script>
