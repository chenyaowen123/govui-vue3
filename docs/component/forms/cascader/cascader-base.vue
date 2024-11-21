<template>
	<demo-container class="gov-demo-cascader">
		<gov-cascader v-model="values" :options="options" />
		<template #console>
			{{ values }}
		</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
import options from "./data.js";

const values = ref(["zujian", "form", "input-number"]);
</script>
