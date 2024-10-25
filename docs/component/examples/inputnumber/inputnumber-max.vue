<template>
	<demo-container class="gov-demo-inputnumber">
		<gov-input-number
			v-model="value"
			controls
			:step="100"
			format="$ 0,0.00"
			:min="500"
			:max="1000"
		/>
		<template #console>
			{{ value }}
		</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref(600);
</script>

<style lang="scss"></style>
