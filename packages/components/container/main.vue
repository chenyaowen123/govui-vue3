<template>
	<main class="gov-main">
		<slot />
	</main>
</template>

<script setup>
defineOptions({
	name: "GovMain",
});
</script>

<style lang="scss" scoped>
.gov-main {
	flex: 1;
	flex-basis: auto;
	overflow: auto;
	box-sizing: border-box;
	padding: 20px;
}
</style>
