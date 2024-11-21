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
		<gov-progress v-model="value" :strokeWidth="15" />
		<hr />
		<gov-progress v-model="value" type="circle" :strokeWidth="15" />
		<template #console>
			value: {{ value }}%<br />
			strokeWidth: 15px
		</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref(80);
</script>
