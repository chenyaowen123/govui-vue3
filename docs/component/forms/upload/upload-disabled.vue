<template>
	<demo-container>
		<gov-upload v-model="value" disabled tip="上传文件最大 500KB" />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";

const value = ref([
	{
		name: "GovUi",
		url: "/logo.png",
	},
]);
</script>
