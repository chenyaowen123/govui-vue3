<template>
	<demo-container class="gov-demo-inputnumber">
		<gov-input-number v-model="value" />
		<template #console> value:{{ value }} </template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref(9999);
</script>
