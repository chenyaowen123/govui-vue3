<template>
	<demo-container>
		<gov-radio-group v-model="value">
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
