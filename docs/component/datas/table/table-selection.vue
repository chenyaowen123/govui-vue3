<template>
	<demo-container>
		<gov-table
			:columns="columns"
			:data="data"
			selection
			rowKey="id"
			@selectionChange="handleSelection"
		/>
		<p style="padding-left: 10px">选中id: {{ slecteIds }}</p>
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

const slecteIds = ref([]);
const handleSelection = (slected) => {
	slecteIds.value = slected;
};
</script>
