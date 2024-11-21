<template>
	<demo-container>
		<gov-checkbox-group v-model="group" button size="large">
			<gov-checkbox :value="1" label="选项1" />
			<gov-checkbox :value="2" label="选项2" />
			<gov-checkbox :value="3" label="选项3" />
			<gov-checkbox :value="4" label="选项4" />
		</gov-checkbox-group>
		<br />
		<gov-checkbox-group v-model="group" button>
			<gov-checkbox :value="1" label="选项1" />
			<gov-checkbox :value="2" label="选项2" />
			<gov-checkbox :value="3" label="选项3" />
			<gov-checkbox :value="4" label="选项4" />
		</gov-checkbox-group>
		<br />
		<gov-checkbox-group v-model="group" button size="small" disabled>
			<gov-checkbox :value="1" label="选项1" />
			<gov-checkbox :value="2" label="选项2" />
			<gov-checkbox :value="3" label="选项3" />
			<gov-checkbox :value="4" label="选项4" />
		</gov-checkbox-group>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const group = ref([1, 2]);
</script>
