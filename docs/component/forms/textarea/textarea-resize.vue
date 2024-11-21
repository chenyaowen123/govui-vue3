<template>
	<demo-container>
		<gov-textarea
			v-model="value"
			:resize="false"
			maxlength="100"
			placeholder="请输入"
			clearable
		/>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
</script>
