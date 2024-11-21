<template>
	<demo-container class="gov-demo-rate">
		<gov-rate v-model="value" :max="10" />
		<template #console>value:{{ value }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref(4);
</script>
