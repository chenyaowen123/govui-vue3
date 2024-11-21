<template>
	<demo-container class="gov-demo-switch">
		<gov-switch v-model="value" />
		<template #console>{{ value }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref(false);
</script>
