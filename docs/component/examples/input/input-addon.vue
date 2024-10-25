<template>
	<demo-container class="gov-demo-input">
		<gov-input v-model="value">
			<template #addonBefore>💰</template>
			<template #addonAfter>🔥</template>
		</gov-input>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
</script>

<style lang="scss"></style>
