<template>
	<demo-container>
		<gov-button @click="visible = true">点击打开 Dialog</gov-button>
		<gov-dialog v-model="visible" title="全屏弹窗" fullscreen>
			<div>这是全屏的弹窗，别忘了关闭在右侧。</div>
		</gov-dialog>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const visible = ref(false);
</script>
