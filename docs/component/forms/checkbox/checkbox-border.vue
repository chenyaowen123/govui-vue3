<template>
	<demo-container>
		<gov-checkbox v-model="value1" border size="large"> 选项 </gov-checkbox>
		<gov-checkbox v-model="value2" border> 选项 </gov-checkbox>
		<gov-checkbox v-model="value3" border size="small"> 选项 </gov-checkbox>
		<br /><br />
		<gov-checkbox-group border size="large" v-model="group">
			<gov-checkbox label="选项1" :value="1" />
			<gov-checkbox label="选项2" :value="2" />
			<gov-checkbox label="选项3" :value="3" />
		</gov-checkbox-group>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value1 = ref(false);
const value2 = ref(false);
const value3 = ref(false);
const group = ref([1, 2]);
</script>
