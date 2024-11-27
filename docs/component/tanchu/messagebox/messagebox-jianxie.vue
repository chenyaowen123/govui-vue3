<template>
	<demo-container>
		<gov-button @click="handleQuickAlert">点击弹出Alert</gov-button>
		<gov-button @click="handleQuickConfirm">点击弹出Confirm</gov-button>
	</demo-container>
</template>

<script setup>
import { GovMessageBox } from "@/dist/index.js";
const handleQuickAlert = () => {
	GovMessageBox.alert("更加简洁的Alert！");
};
const handleQuickConfirm = () => {
	GovMessageBox.confirm("更加简洁的Confirm！");
};
</script>
