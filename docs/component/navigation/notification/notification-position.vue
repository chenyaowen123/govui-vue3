<template>
	<demo-container>
		<gov-button @click="handleClick('top-right')">Top Right</gov-button>
		<gov-button @click="handleClick('bottom-right')">
			Bottom Right
		</gov-button>
		<gov-button @click="handleClick('bottom-left')">Bottom Left</gov-button>
		<gov-button @click="handleClick('top-left')">Top Left</gov-button>
	</demo-container>
</template>

<script setup>
import { GovNotification } from "../../../../packages/index.js";

const handleClick = (position) => {
	GovNotification({
		title: "系统提示",
		content: `打开 ${position} 类型的消息`,
		position,
	});
};
</script>
