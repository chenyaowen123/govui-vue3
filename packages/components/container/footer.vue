<template>
	<footer class="gov-footer" :style="style">
		<slot />
	</footer>
</template>
<script setup>
import { computed } from "vue";
import { ensureCssUnit } from "../../utils/index";

defineOptions({
	name: "GovFooter",
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
