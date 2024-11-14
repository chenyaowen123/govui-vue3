<template>
	<div class="gov-button-group">
		<slot />
	</div>
</template>
<script setup>
defineOptions({
	name: "GovButtonGroup",
});
</script>

<style lang="scss">
@use "./scss/button-group.scss";
</style>
