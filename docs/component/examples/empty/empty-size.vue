<template>
	<demo-container>
		大小：<gov-input-number
			v-model="size"
			:step="10"
			:min="30"
			:max="200"
			suffix="px"
			controls
		/>
		<br />
		<br />
		描述：<gov-input v-model="description" />
		<hr />
		<gov-empty :size="size" :description="description" />
		<template #console> 大小:{{ size }}px </template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const size = ref(100);
const description = ref("暂无内容");
</script>

<style lang="scss"></style>
