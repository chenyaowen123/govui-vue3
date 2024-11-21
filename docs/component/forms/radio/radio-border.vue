<template>
	<demo-container>
		<gov-radio v-model="value" value="1" border size="large">
			备选项
		</gov-radio>
		<gov-radio v-model="value" value="2" border> 备选项 </gov-radio>
		<gov-radio v-model="value" value="3" border size="small">
			备选项
		</gov-radio>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("1");
</script>
