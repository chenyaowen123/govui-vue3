<template>
	<demo-container class="gov-demo-input">
		<gov-input v-model="value" />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
</script>

<style lang="scss"></style>
