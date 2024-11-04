<template>
	<demo-container class="gov-demo-tooltip">
		<gov-tooltip content="点击关闭 Tooltip 提示" :disabled="disabled">
			<gov-button @click="handleToggle">
				点击{{ disabled ? "开启" : "关闭" }} Tooltip 提示
			</gov-button>
		</gov-tooltip>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const disabled = ref(false);
function handleToggle() {
	disabled.value = !disabled.value;
}
</script>

<style lang="scss"></style>
