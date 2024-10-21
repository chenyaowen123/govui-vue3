<template>
	<demo-container>
		<gov-table :columns="columns" :data="data" />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
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
const data = ref([
	{
		name: "张三",
		age: 30,
		job: "UP主",
		sex: 1,
		address: "河北省、石家庄市",
	},
	{
		name: "李四",
		age: 36,
		job: "海外贸易",
		sex: 2,
		address: "广东省、珠海市",
	},
	{
		name: "王二",
		age: 29,
		job: "设计师",
		sex: 2,
		address: "北京市海淀区、石景山",
	},
	{
		name: "麻子",
		age: 32,
		job: "放牧",
		sex: 1,
		address: "内蒙古、锡林格勒",
	},
]);
</script>

<style lang="scss"></style>
