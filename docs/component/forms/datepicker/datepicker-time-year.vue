<template>
	<demo-container class="gov-demo-datepicker">
		<gov-datepicker
			v-model="yearValue"
			mode="year"
			format="yyyy"
			placeholder="请选择"
		/>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const yearValue = ref("2024");
</script>
