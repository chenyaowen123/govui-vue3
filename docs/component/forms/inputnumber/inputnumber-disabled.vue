<template>
	<demo-container class="gov-demo-inputnumber">
		<gov-input-number v-model="value" controls :step="100" disabled />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref();
</script>

<style lang="scss"></style>
