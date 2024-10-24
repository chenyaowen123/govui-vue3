<template>
	<demo-container class="gov-demo-input">
		<gov-input v-model="value" size="large" />
		&nbsp;&nbsp;
		<gov-input v-model="value" />
		&nbsp;&nbsp;
		<gov-input v-model="value" size="small" />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
</script>

<style lang="scss"></style>
