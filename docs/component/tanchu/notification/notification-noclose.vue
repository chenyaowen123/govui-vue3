<template>
	<demo-container>
		<gov-button @click="handleClick">点击弹出Notification</gov-button>
	</demo-container>
</template>

<script setup>
import { GovNotification } from "@/dist/index.js";

const handleClick = () => {
	GovNotification({
		tite: "系统提示！",
		content: "您正在访问GovUI",
		duration: false, // 不关闭
	});
};
</script>
