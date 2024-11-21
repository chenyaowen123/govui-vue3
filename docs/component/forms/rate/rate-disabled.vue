<template>
	<demo-container class="gov-demo-rate">
		<gov-rate v-model="value" disabled />
		<template #console>value:{{ value }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref(3);
</script>
