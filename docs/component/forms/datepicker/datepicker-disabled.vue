<template>
	<demo-container class="gov-demo-datepicker">
		<gov-datepicker
			v-model="dateValue"
			placeholder="请选择日期"
			format="yyyy-MM-dd"
			:min-date="new Date('2024-10-10')"
			:max-date="new Date('2024-10-20')"
		/>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
	name: "datepickerDisabled",
});

const dateValue = ref("2024-10-10");
</script>
