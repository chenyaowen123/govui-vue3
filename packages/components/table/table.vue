<template>
	<div></div>
</template>

<script setup>
defineOptions({
	name: "GovTable",
});

const props = defineProps({
	height: String,
	// 每一行数据的Class类名计算，例如  (row, index)=>row.id+index
	rowClassName: {
		type: Function,
		default: () => null,
	},
	loading: Boolean, // 表格是否处于加载状态
	stripe: Boolean, // 是否应用斑马线风格的条纹。
	selection: Boolean, // 是否显示多选列。默认情况下，多选列是深度联动的。
	indexed: [Function, Boolean], // 自定义索引或者使用默认索引。可以是一个函数，返回值将作为索引，或者是一个布尔值。如果为false，则不展示索引。
	/**
	 * columns配置数组，每个元素包含以下属性：
	 * - width: 列的宽度
	 * - title: 表头标题
	 * - dataIndex: 对应数据数组中数据的key值，用于获取并展示value值
	 * - format: 数据格式化函数，默认是原数据格式返回，优先级次于slot
	 * - sort: 排序状态，可以是'none'（不排序）、'desc'（降序）或'asc'（升序）
	 * - fixed: 固定列的状态，可以是'none'（不固定）、'left'（固定在左侧）或'right'（固定在右侧）
	 */
	columns: Array,
});
</script>

<style lang="scss">
// @import "./demo.scss";
</style>
