<template>
	<demo-container class="gov-demo-select">
		<gov-select v-model="value">
			<gov-select-option label="西瓜" value="西瓜" />
			<gov-select-option label="桃子" value="桃子" />
			<gov-select-option label="火龙果" value="火龙果" disabled />
			<gov-select-option label="葡萄" value="葡萄" />
			<gov-select-option label="橘子" value="橘子" />
			<gov-select-option label="荔枝" value="荔枝" />
		</gov-select>
		<template #console>{{ value }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("桃子");
</script>

<style lang="scss"></style>
