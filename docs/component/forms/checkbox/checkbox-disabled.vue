<template>
	<demo-container>
		<gov-checkbox v-model="value1" disabled>选项1</gov-checkbox>
		<gov-checkbox v-model="value2" disabled>选项2</gov-checkbox>
		<gov-checkbox indeterminate disabled>选项3</gov-checkbox>
		<br /><br />
		<gov-checkbox v-model="value1" disabled border>选项1</gov-checkbox>
		<gov-checkbox v-model="value2" disabled border>选项2</gov-checkbox>
		<gov-checkbox indeterminate disabled border>选项3</gov-checkbox>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value1 = ref(true);
const value2 = ref(false);
</script>
