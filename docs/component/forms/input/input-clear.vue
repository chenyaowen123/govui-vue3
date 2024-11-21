<template>
	<demo-container class="gov-demo-input">
		<gov-input v-model="value" clear />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("填充内容");
</script>
