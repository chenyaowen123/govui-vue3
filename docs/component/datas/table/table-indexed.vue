<template>
	<demo-container>
		<gov-table :columns="columns" :data="data" indexed />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
import column from "./column";
import row from "./row";

defineOptions({
	name: "tableBase",
});

const columns = ref(column);
const data = ref(row);
</script>
