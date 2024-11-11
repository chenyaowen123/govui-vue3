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
		<gov-progress v-model="value" />
		<hr />
		<gov-progress v-model="value" type="circle" />
		<template #console>value: {{ value }}%</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref(80);
</script>

<style lang="scss"></style>
