---
outline: deep
aside: false
---

# Dialog 对话框

弹出一个对话框

<script setup>
import { ref } from 'vue'
const dialogVisible1 = ref(false);
const dialogVisible2 = ref(false);
const dialogVisible3 = ref(false);
const dialogVisible4 = ref(false);
</script>

## 基本用法

你可以在任意位置弹出一个 Dialog对话框。

<demo-container class="demo-gov-form">
<gov-button @click="dialogVisible1 = true">点击打开 Dialog</gov-button>
<gov-dialog v-model="dialogVisible1" title="标题" width="30%">
	<div>这是一个 Dialog！</div>
	<template #footer>
		<gov-button @click="dialogVisible1 = false">关闭</gov-button>
	</template>
</gov-dialog>
</demo-container>
