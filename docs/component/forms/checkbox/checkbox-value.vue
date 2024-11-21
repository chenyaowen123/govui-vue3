<template>
	<demo-container>
		<gov-checkbox v-model="value" true-value="选中啦" false-value="没选中">
			点我切换：{{ value }}
		</gov-checkbox>
		<template #console> value:{{ value }} </template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("选中啦");
</script>
