<template>
	<demo-container>
		<gov-radio v-model="value" value="1" label="备选项" />
		<gov-radio v-model="value" value="2" label="备选项" />
		<gov-radio v-model="value" value="3">备选项</gov-radio>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("1");
</script>
