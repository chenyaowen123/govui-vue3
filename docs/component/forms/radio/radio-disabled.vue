<template>
	<demo-container>
		<gov-radio disabled v-model="value" value="1">禁用状态</gov-radio>
		<gov-radio disabled v-model="value" value="2">禁用状态</gov-radio>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("1");
</script>
