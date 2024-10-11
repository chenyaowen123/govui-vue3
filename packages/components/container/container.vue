<template>
	<section class="gov-container" :class="classes">
		<slot />
	</section>
</template>

<script setup>
import { computed, useSlots } from "vue";

defineOptions({
	name: "GovContainer",
});

const slots = useSlots();

// 检查vNode是否为GovHeader或GovFooter
function isGovComponent(vNode) {
	return ["GovHeader", "GovFooter"].includes(vNode.type.name);
}

// 使用辅助函数检查是否存在GovHeader或GovFooter组件
const isVertical = computed(() => {
	const defaultSlotContent = slots.default?.() || [];
	return defaultSlotContent.some(isGovComponent);
});

const classes = computed(() => {
	return [`gov-container--${isVertical.value ? "vertical" : "horizontal"}`];
});
</script>

<style lang="scss" scoped>
@import "./container.scss";
</style>
