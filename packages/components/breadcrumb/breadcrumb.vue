<template>
	<div class="gov-breadcrumb" :class="[`gov-breadcrumb--size-${size}`]">
		<slot />
	</div>
</template>

<script setup>
import { provide, reactive, toRefs } from "vue";

defineOptions({
	name: "GovBreadcrumb",
});

const props = defineProps({
	icon: String,
	size: String,
});

provide(
	"govBreadcrumb",
	reactive({
		...toRefs(props),
	}),
);
</script>

<style lang="scss">
@use "./breadcrumb.scss";
</style>
