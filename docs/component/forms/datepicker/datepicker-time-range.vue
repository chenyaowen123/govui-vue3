<template>
	<demo-container class="gov-demo-datepicker">
		<gov-datepicker
			v-model="timeValue"
			format="HH:mm:ss"
			mode="time"
			show-time
			range
			enable-seconds
			placeholder="请选择"
		/>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";



const timeValue = ref(["16:45:12", "23:45:20"]);
</script>
