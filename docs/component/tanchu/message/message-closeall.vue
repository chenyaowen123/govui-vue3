<template>
	<demo-container class="gov-demo-rate">
		<gov-button @click="handleClick">点击弹出Message</gov-button>
		<gov-button @click="hancleCloseAll">点击关闭所有</gov-button>
	</demo-container>
</template>

<script setup>
import { GovMessage } from "../../../../packages/index.js";

const handleClick = () => {
	GovMessage("Hello Word！");
};

const hancleCloseAll = () => {
	GovMessage.closeAll();
};
</script>
