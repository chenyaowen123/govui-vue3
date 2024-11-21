<template>
	<demo-container>
		<gov-input-number
			v-model="value"
			:step="10"
			:min="0"
			:max="100"
			suffix="%"
			controls
		/>
		<hr />
		<gov-progress v-model="value" color="#999" completeColor="#666" />
		<hr />
		<gov-progress
			v-model="value"
			type="circle"
			color="#999"
			completeColor="#666"
		/>
		<template #console>value: {{ value }}%</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref(80);
</script>
