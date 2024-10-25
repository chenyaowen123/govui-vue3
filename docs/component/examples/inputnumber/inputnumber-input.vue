<template>
	<demo-container class="gov-demo-inputnumber">
		<gov-input-number v-model="value" clear format="$ 0,0.00" />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref(9999);
</script>

<style lang="scss"></style>
