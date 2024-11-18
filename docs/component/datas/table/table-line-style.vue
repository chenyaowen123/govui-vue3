<template>
	<demo-container>
		<gov-table :columns="columns" :data="data" stripe :rowClassName="fun" />
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

const fun = (row, index) => {
	return `examples-table-row__${index}`;
};
</script>

<style lang="scss">
// 设置第三行加粗
.examples-table-row__2 {
	font-weight: bold;
	color: red;
}
</style>
