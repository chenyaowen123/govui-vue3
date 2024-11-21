<template>
	<demo-container >
		<gov-tag type="primary" closable @close="value += 1"> 主要 </gov-tag>
		<template #console>关闭按钮触发：{{ value }}次</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref(0);
</script>
