<template>
	<demo-container>
		<!-- 多个绑定 -->
		<gov-checkbox v-model="group" :value="1" label="选项1" />
		<gov-checkbox v-model="group" :value="2">选项2</gov-checkbox>
		<!-- 单个绑定 -->
		<gov-checkbox v-model="value" label="选项3" />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const group = ref([1, 2]);
const value = ref(true);
</script>
