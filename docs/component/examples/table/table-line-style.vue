<template>
	<demo-container>
		<gov-table
			:columns="columns"
			:data="data"
			stripe
			:rowClassName="rowClassNameFun"
		/>
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
const rowClassNameFun = (row, index) => {
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
