<template>
	<demo-container>
		<gov-button @click="handleClick">点击查看</gov-button>
	</demo-container>
</template>

<script setup>
import { GovMessage } from "@/dist/index.js";

const handleClick = () => {
	GovMessage({
		type: "primary",
		duration: 4000,
		closable: true,
		message:
			"您正在访问<b style='color:red'>GovUI</b>，<i>祝您心情愉快！</i>",
	})
		.then(() => {
			console.log("已经打开！");
		})
		.catch(() => {
			console.log("已经关闭！");
		});
};
</script>
