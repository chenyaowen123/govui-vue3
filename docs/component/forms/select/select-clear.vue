<template>
	<demo-container class="gov-demo-select">
		<gov-select v-model="value" :clear="false">
			<gov-select-option
				v-for="option in options"
				:key="option.value"
				:label="option.label"
				:value="option.value"
				:disabled="option.disabled"
			/>
		</gov-select>
		<template #console>{{ value }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";

const options = ref([
	{ label: "西瓜", value: "西瓜" },
	{ label: "桃子", value: "桃子" },
	{ label: "火龙果", value: "火龙果", disabled: true },
	{ label: "葡萄", value: "葡萄" },
	{ label: "橘子", value: "橘子" },
	{ label: "荔枝", value: "荔枝" },
]);

const value = ref(options.value[1].value); // 默认选中桃子
</script>
