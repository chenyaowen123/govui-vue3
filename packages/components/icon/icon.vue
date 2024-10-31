<template>
	<i
		class="gov-icon"
		:class="`gov-icon-${name}`"
		:style="size ? { fontSize: `${parseFloat(size)}px` } : {}"
	></i>
</template>

<script setup>
defineOptions({
	name: "GovIcon",
});

defineProps({
	name: String,
	size: String,
});
</script>

<style lang="scss">
@import "./icon";
</style>
