<template>
	<div class="gov-breadcrumb-item">
		<slot />&nbsp; <GovIcon :name="iconName" />&nbsp;
	</div>
</template>

<script setup>
import { inject, computed } from "vue";
import GovIcon from "../icon/icon.vue";

defineOptions({
	name: "GovBreadcrumbItem",
});

const govBreadcrumb = inject("govBreadcrumb", null);
const iconName = computed(() => {
	return govBreadcrumb?.icon || "arrow-right";
});
</script>

<style lang="scss">
@import "./breadcrumb.scss";
</style>
