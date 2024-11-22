<template>
	<demo-container>
		<gov-button @click="visible = true">点击打开 Dialog</gov-button>
		<gov-dialog v-model="visible" width="30%">
			<template #title>
				<div class="gradient-text">这是一个好看的标题</div>
			</template>
			<div>这是一个 Dialog！有自定义标题！</div>
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

<style lang="scss" scoped>
/* 从紫色到蓝色的渐变 */
.gradient-text {
	background-image: linear-gradient(to right, purple, blue);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
	display: inline-block;
}
</style>
