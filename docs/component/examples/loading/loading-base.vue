<template>
	<demo-container>
		<div style="padding: 15px 0">
			Control：<gov-switch v-model="loading" />
		</div>
		<gov-loading v-model="loading">
			<gov-blockquote>
				示例文字：局部的loading加载效果有助于缓解用户的焦虑，一个好的交互网页通常都具备良好的用户体验。modelValue绑定一个布尔值，能够控制加载状态的显示隐藏。也可以根据
				loading
				插槽来自定义加载状态。局部的loading加载效果有助于缓解用户的焦虑，一个好的交互网页通常都具备良好的用户体验。modelValue绑定一个布尔值，能够控制加载状态的显示隐藏。也可以根据
				loading 插槽来自定义加载状态。
			</gov-blockquote>
		</gov-loading>
		<template #console>加载状态：{{ loading }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const loading = ref(true);
</script>

<style lang="scss"></style>
