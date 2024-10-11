<template>
	<i class="gov-icon" :class="`gov-icon-${name}`"></i>
</template>

<script setup>
defineOptions({
	name: "GovIcon",
});

defineProps({
	name: String,
});
</script>

<style lang="scss">
@import "./icon";
</style>
