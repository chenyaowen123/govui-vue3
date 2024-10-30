<template>
	<demo-container class="gov-demo-rate">
		<gov-rate v-model="value">
			<template #icon="{ isActive }">
				<span v-if="isActive">♥</span>
				<span v-else>♡</span>
			</template>
		</gov-rate>
		<template #console>{{ value }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref(4);
</script>

<style lang="scss"></style>
