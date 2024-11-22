<template>
	<demo-container>
		<gov-button @click="handleAlert">点击弹出Alert</gov-button>
	</demo-container>
</template>

<script setup>
import { GovMessageBox, GovMessage } from "@/index.js";
const handleAlert = () => {
	GovMessageBox.alert({
		title: "友情提醒",
		content: "您正在访问GovUI，祝您心情愉快！",
	})
		.then(() => {
			GovMessage("点击了确定！");
		})
		.catch(() => {
			GovMessage("点击了关闭！");
		});
};
</script>
