<template>
	<section :class="[ns.b(), ns.is('vertical', isVertical)]">
		<slot />
	</section>
</template>
<script setup>
import { computed, useSlots } from "vue";
import { useNamespace } from "@element-plus/hooks";

defineOptions({
	name: "GovContainer",
});
const props = defineProps({
	/**
	 * @description layout direction for child elements
	 */
	direction: {
		type: String,
	},
});
const slots = useSlots();

const ns = useNamespace("container");

const isVertical = computed(() => {
	if (props.direction === "vertical") {
		return true;
	} else if (props.direction === "horizontal") {
		return false;
	}
	if (slots && slots.default) {
		const vNodes = slots.default();
		return vNodes.some((vNode) => {
			const tag = vNode.type.name;
			return tag === "ElHeader" || tag === "ElFooter";
		});
	} else {
		return false;
	}
});
</script>
