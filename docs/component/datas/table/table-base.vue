<template>
	<demo-container>
		<gov-table :columns="columns" :data="data" @sortChange="handleSort" />
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

const handleSort = (state) => {
	if (state) {
		let { column, sort } = state;
		data.value = data.value.slice().sort((a, b) => {
			if (sort === "desc") {
				return b[column] - a[column]; // 降序排序
			} else {
				return a[column] - b[column]; // 升序排序
			}
		});
	} else {
		// 无排序时恢复原有数据顺序
		data.value = JSON.parse(JSON.stringify(row));
	}
};
</script>
