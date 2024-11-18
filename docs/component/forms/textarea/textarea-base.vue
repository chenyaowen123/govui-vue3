<template>
	<demo-container class="gov-demo-textarea">
		<gov-textarea v-model="value" placeholder="请输入" />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
</script>

<style lang="scss">
.gov-demo-textarea .gov-textarea {
	min-width: 300px;
}
</style>
