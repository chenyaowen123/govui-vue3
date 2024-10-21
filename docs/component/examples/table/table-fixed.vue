<template>
	<demo-container>
		<gov-table :columns="columns" :data="data" height="300px" />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";

const column = Array.from({ length: 30 }, (_, index) => ({
	title: `列${index + 1}`,
	width: 200,
	dataIndex: `field${index + 1}`,
}));

const row = Array.from({ length: 30 }, (_, index) => {
	return {
		id: index + 1, // 唯一
		...Array.from({ length: 30 }, (_, subIndex) => ({
			[`field${subIndex + 1}`]: `值${index + 1}-${subIndex + 1}`,
		})).reduce((acc, cur) => ({ ...acc, ...cur }), {}), // 将数组转换为对象
	};
});

defineOptions({
	name: "tableBase",
});

const columns = ref(column);
const data = ref(row);
</script>

<style lang="scss"></style>
