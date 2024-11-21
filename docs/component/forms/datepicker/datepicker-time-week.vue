<template>
	<demo-container class="gov-demo-datepicker">
		<gov-datepicker
			v-model="weekValue"
			mode="week"
			format="yyyy年 第ww周"
			placeholder="请选择"
		/>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";

const weekValue = ref([]);
</script>
