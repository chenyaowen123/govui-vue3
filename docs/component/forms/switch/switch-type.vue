<template>
	<demo-container class="gov-demo-switch">
		<gov-switch v-model="value" type="primary" />
		<gov-switch v-model="value" type="success" />
		<gov-switch v-model="value" type="info" />
		<gov-switch v-model="value" type="warning" />
		<gov-switch v-model="value" type="danger" />
		<template #console>{{ value }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref(true);
</script>

<style lang="scss"></style>
