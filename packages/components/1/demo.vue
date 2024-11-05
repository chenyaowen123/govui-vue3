<template>
	<div></div>
</template>

<script setup>
defineOptions({
	name: "Gov",
});

const props = defineProps({
	type: {
		type: String,
		default: "default",
	},
	underline: {
		type: Boolean,
		default: true,
	},
	disabled: Boolean,
	href: String,
	icon: String,
});
</script>

<style lang="scss">
@import "./demo.scss";
</style>
