<template>
	<demo-container class="gov-demo-inputauto">
		<gov-input-auto v-model="value" :fetch="querySearch" />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
import { fruits } from "./data.js";

const value = ref("");
const querySearch = (str) => {
	return fruits.filter((el) => el.toLowerCase().includes(str.toLowerCase()));
};
</script>
