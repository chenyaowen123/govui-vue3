<template>
	<demo-container>
		<gov-button @click="handleClick">点击弹出Message</gov-button>
	</demo-container>
</template>

<script setup>
import { GovMessage } from "@/index.js";

const handleClick = () => {
	GovMessage("Hello Word！");
};
</script>
