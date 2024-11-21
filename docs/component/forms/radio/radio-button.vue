<template>
	<demo-container>
		<gov-radio-group button v-model="value" size="large">
			<gov-radio value="1">备选项</gov-radio>
			<gov-radio value="2">备选项</gov-radio>
			<gov-radio value="3">备选项</gov-radio>
		</gov-radio-group>
		<br />
		<br />
		<gov-radio-group button v-model="value">
			<gov-radio value="1">备选项</gov-radio>
			<gov-radio value="2" disabled>备选项</gov-radio>
			<gov-radio value="3">备选项</gov-radio>
		</gov-radio-group>
		<br />
		<br />
		<gov-radio-group button v-model="value" size="small" disabled>
			<gov-radio value="1">备选项</gov-radio>
			<gov-radio value="2">备选项</gov-radio>
			<gov-radio value="3">备选项</gov-radio>
		</gov-radio-group>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("1");
</script>
