<template>
	<demo-container>
		<gov-table :columns="columns" :data="data" @sort="handleSort" />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
import row from "./row";

defineOptions({
	name: "tableBase",
});

const columns = ref([
	{
		title: "名字",
		width: 100,
		dataIndex: "name",
	},
	{
		title: "年龄",
		width: 80,
		dataIndex: "age",
		sort: "none",
		format: (age) => age + "岁",
	},
	{
		title: "职业",
		width: 150,
		dataIndex: "job",
	},
	{
		title: "性别",
		width: 80,
		dataIndex: "sex",
		align: "center",
		format: (sex) => (sex === 1 ? "男" : "女"),
	},
	{
		title: "地址",
		dataIndex: "address",
	},
]);
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

<style lang="scss"></style>
