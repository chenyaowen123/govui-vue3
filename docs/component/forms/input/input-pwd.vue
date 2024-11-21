<template>
	<demo-container class="gov-demo-input">
		<gov-input v-model="value" password />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("123456");
</script>
