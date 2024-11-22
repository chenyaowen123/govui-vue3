<template>
	<demo-container>
		<gov-button @click="handleClick">点击弹出Notification</gov-button>
	</demo-container>
</template>

<script setup>
import { GovNotification } from "@/index.js";

const handleClick = () => {
	GovNotification({
		title: "系统提示！",
		content: `您正在访问<b style="color:red">GovUI</b>`,
	});
};
</script>
