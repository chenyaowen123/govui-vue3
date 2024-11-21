<template>
	<demo-container class="gov-demo-switch">
		<gov-switch v-model="value" size="large" />
		<gov-switch v-model="value" />
		<gov-switch v-model="value" size="small" />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref(false);
</script>
