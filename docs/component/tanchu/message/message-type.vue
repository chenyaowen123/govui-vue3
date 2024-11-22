<template>
	<demo-container>
		<gov-button @click="handleClick('default')">默认</gov-button>
		<gov-button @click="handleClick('primary')" type="primary">
			主要
		</gov-button>
		<gov-button @click="handleClick('success')" type="success">
			成功
		</gov-button>
		<gov-button @click="handleClick('info')" type="info">信息</gov-button>
		<gov-button @click="handleClick('warning')" type="warning">
			警告
		</gov-button>
		<gov-button @click="handleClick('danger')" type="danger">
			危险
		</gov-button>
	</demo-container>
</template>

<script setup>
import { GovMessage } from "@/index.js";

const handleClick = (type) => {
	GovMessage({
		type,
		message: `打开 ${type} 类型的消息`,
	});
};
</script>
