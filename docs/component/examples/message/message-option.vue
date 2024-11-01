<template>
	<demo-container class="gov-demo-rate">
		<gov-button @click="handleClick">点击查看</gov-button>
	</demo-container>
</template>

<script setup>
import { GovMessage } from "../../../../packages/index.js";

const handleClick = () => {
	GovMessage({
		type: "primary",
		duration: 6000,
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

<style lang="scss"></style>
