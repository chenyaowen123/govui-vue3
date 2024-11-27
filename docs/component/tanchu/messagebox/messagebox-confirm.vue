<template>
	<demo-container>
		<gov-button @click="handleConfirm">点击弹出Confirm</gov-button>
	</demo-container>
</template>

<script setup>
import { GovMessageBox, GovMessage } from "@/dist/index.js";

const handleConfirm = () => {
	GovMessageBox.confirm({
		title: "请您确认",
		content: "你当前正在访问GovUI吗？",
	})
		.then(() => {
			GovMessage("点击了确定！");
		})
		.catch(() => {
			GovMessage("点击了关闭！");
		});
};
</script>
