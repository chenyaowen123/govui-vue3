<template>
	<demo-container class="gov-demo-input">
		<gov-input v-model="value" size="large" />
		<br /><br />
		<gov-input v-model="value" />
		<br /><br />
		<gov-input v-model="value" size="small" />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
</script>

<style lang="scss"></style>
