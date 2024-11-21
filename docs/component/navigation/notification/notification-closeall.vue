<template>
	<demo-container>
		<gov-button @click="handleClick">多点两次</gov-button>
		<gov-button @click="hancleCloseAll">点击关闭所有</gov-button>
	</demo-container>
</template>

<script setup>
import { GovNotification } from "../../../../packages/index.js";

const handleClick = () => {
	GovNotification("Hello Word！");
};

const hancleCloseAll = () => {
	GovNotification.closeAll();
};
</script>
