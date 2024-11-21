<template>
	<demo-container class="gov-demo-datepicker">
		<gov-datepicker
			v-model="dateValue"
			placeholder="请选择日期"
			format="yyyy-MM-dd"
			size="large"
		/>
		<br />
		<br />
		<gov-datepicker
			v-model="dateValue"
			placeholder="请选择日期"
			format="yyyy-MM-dd"
		/>
		<br />
		<br />
		<gov-datepicker
			v-model="dateValue"
			placeholder="请选择日期"
			format="yyyy-MM-dd"
			size="small"
		/>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";

const dateValue = ref("2024-10-01");
</script>
