<template>
	<demo-container class="gov-demo-datepicker">
		<gov-datepicker
			range
			v-model="rangeValue"
			placeholder="请选择日期"
			format="yyyy-MM-dd"
		/>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";



const rangeValue = ref(["2024-10-01", "2024-10-05"]);
</script>
