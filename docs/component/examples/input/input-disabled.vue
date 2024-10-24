<template>
	<demo-container class="gov-demo-input">
		<gov-input v-model="value" disabled />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("填充内容");
</script>

<style lang="scss"></style>
