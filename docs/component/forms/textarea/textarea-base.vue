<template>
	<demo-container>
		<gov-textarea v-model="value" placeholder="请输入" />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
</script>
