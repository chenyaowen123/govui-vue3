<template>
	<demo-container class="gov-demo-datepicker">
		<gov-datepicker
			v-model="timeValue"
			mode="time"
			format="HH:mm:ss"
			showTime
			enable-seconds
			placeholder="请选择"
		/>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";



const timeValue = ref("23:45:20");
</script>
