<template>
	<demo-container class="gov-demo-input">
		<gov-input v-model="value" prefix="￥" suffix="RMB" />
		<br /><br />
		<gov-input v-model="value">
			<template #prefix> $ </template>
			<template #suffix> USD </template>
		</gov-input>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
</script>
