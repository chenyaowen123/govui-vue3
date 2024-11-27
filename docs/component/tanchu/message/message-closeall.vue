<template>
	<demo-container>
		<gov-button @click="handleClick">点击弹出Message</gov-button>
		<gov-button @click="hancleCloseAll">点击关闭所有</gov-button>
	</demo-container>
</template>

<script setup>
import { GovMessage } from "@/dist/index.js";

const handleClick = () => {
	GovMessage("Hello Word！");
};

const hancleCloseAll = () => {
	GovMessage.closeAll();
};
</script>
