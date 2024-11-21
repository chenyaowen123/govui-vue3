<template>
	<demo-container>
		<gov-table
			:columns="columns"
			:data="data"
			height="300px"
			indexed
			selection
			rowKey="id"
		/>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";

defineOptions({
	name: "tableFixed",
});

const length = 15;

const column = Array.from({ length }, (_, index) => ({
	title: `列${index + 1}`,
	width: 140,
	dataIndex: `field${index + 1}`,
}));

column[0].fixed = "left";
column[length - 1].fixed = "right";

const row = Array.from({ length }, (_, index) => {
	return {
		id: index + 1,
		...Array.from({ length }, (_, subIndex) => ({
			[`field${subIndex + 1}`]: `值${index + 1}-${subIndex + 1}`,
		})).reduce((acc, cur) => ({ ...acc, ...cur }), {}), // 将数组转换为对象
	};
});

const columns = ref(column);
const data = ref(row);
</script>
