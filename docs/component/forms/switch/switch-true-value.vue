<template>
	<demo-container class="gov-demo-switch">
		<div class="box">
			<gov-switch v-model="value" trueValue="打开" falseValue="关闭" />
			{{ value }}
		</div>
		<template #console>{{ value }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("打开");
</script>

<style lang="scss">
.gov-demo-switch .box {
	line-height: 30px;
	font-size: 16px;
}
</style>
