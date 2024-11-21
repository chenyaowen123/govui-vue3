<template>
	<demo-container>
		<gov-button @click="handleClick">修改为双箭头</gov-button>
		<hr />
		<gov-breadcrumb :icon="icon">
			<gov-breadcrumb-item><a href="/">首页</a></gov-breadcrumb-item>
			<gov-breadcrumb-item>企业列表</gov-breadcrumb-item>
			<gov-breadcrumb-item>企业详情</gov-breadcrumb-item>
		</gov-breadcrumb>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const icon = ref();
const handleClick = () => {
	icon.value = "d-arrow-right";
};
</script>
