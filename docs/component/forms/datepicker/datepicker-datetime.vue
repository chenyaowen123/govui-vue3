<template>
	<demo-container class="gov-demo-datepicker">
		<gov-datepicker
			v-model="dateValue"
			placeholder="请选择日期"
			format="yyyy-MM-dd HH:mm:ss"
			showTime
			enableSeconds
		/>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
	name: "datepickerDatetime",
});

const dateValue = ref("2024-10-10 12:00:35");
</script>
