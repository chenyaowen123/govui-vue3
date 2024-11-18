<template>
	<demo-container class="gov-demo-datepicker">
		<gov-datepicker
			v-model="monthValue"
			mode="month"
			format="yyyy-MM"
			placeholder="请选择"
		/>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const monthValue = ref("2024-10");
</script>

<style lang="scss"></style>
