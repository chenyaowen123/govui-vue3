<template>
	<demo-container>
		<gov-button @click="visible = true">点击打开 Dialog</gov-button>
		<gov-dialog
			v-model="visible"
			title="标题"
			width="30%"
			:closeOnClickModal="false"
		>
			<div>这是一个 Dialog！点击遮罩层无法关闭哦！</div>
			<template #footer>
				<gov-button @click="visible = false">关闭</gov-button>
			</template>
		</gov-dialog>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const visible = ref(false);
</script>
