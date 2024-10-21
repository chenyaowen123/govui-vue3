<template>
	<div
		class="gov-table-wrap"
		:class="[
			{
				'is-striped': stripe,
				'is-fixed': !!height,
			},
		]"
	>
		<table :style="tableStyle" class="gov-table">
			<thead>
				<tr class="gov-table-tr">
					<th v-if="selection" class="gov-table-th">
						<GovCheckbox
							:indeterminate="indeterminate"
							v-model="checkedAll"
						/>
					</th>
					<th v-if="indexed" class="gov-table-th"></th>
					<th
						class="gov-table-th"
						v-for="column in columns"
						:key="column.dataIndex"
						:width="column.width"
						:class="[column.align ? `align-${column.align}` : '']"
					>
						{{ column.title }}
						<span v-if="column.sort" class="gov-table-arrow">
							<span
								class="gov-table-arrow-up"
								:class="{
									active:
										sortState &&
										sortState.sort === 'asc' &&
										sortState.column === column.dataIndex,
								}"
								@click="handleSort(column.dataIndex, 'asc')"
							/>
							<span
								class="gov-table-arrow-down"
								:class="{
									active:
										sortState &&
										sortState.sort === 'desc' &&
										sortState.column === column.dataIndex,
								}"
								@click="handleSort(column.dataIndex, 'desc')"
							/>
						</span>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr
					class="gov-table-tr"
					v-for="(row, index) in newData"
					:key="row._rowkey"
					:class="rowClassName ? rowClassName(row, index) : ''"
				>
					<td v-if="selection" class="gov-table-td">
						<GovCheckbox
							v-model="selectedItems"
							:value="row[row._rowkey]"
						/>
					</td>
					<td v-if="indexed" class="gov-table-td">
						{{ indexStr(row, index) }}
					</td>
					<td
						v-for="column in columns"
						:key="column.dataIndex"
						class="gov-table-td"
						:class="[column.align ? `align-${column.align}` : '']"
					>
						<slot :name="column.dataIndex" :row="row">
							{{
								column.format
									? column.format(
											row[column.dataIndex],
											index,
										)
									: row[column.dataIndex]
							}}
						</slot>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
import GovCheckbox from "../checkbox/checkbox.vue";

defineOptions({
	name: "GovTable",
});

const props = defineProps({
	height: String, // 当设置了表格高度，表头自动固定顶部，position: sticky;
	rowClassName: Function, // 列的class计算，通常用于高亮某个列
	loading: Boolean, // 表格是否处于加载状态
	stripe: Boolean, // 是否应用斑马线风格的条纹。
	selection: Boolean, // 是否显示多选列。多选列是深度联动的，不受分页影响，通常必须设置rowKey，否则计算不准确。
	rowKey: [Function, String], // 自定义rowKey用于selection用于选中计算，通常为数据的 id，可设置为一种函数计算，也可以设置为string
	indexed: [Function, Boolean], // 自定义索引或者使用默认索引。可以是一个函数，返回值将作为索引，或者是一个布尔值。如果为false，则不展示索引。
	data: {
		type: Array,
		default: () => [],
	},
	/**
	 * columns配置数组，每个元素包含以下属性：
	 * - width: 列的宽度
	 * - title: 表头标题
	 * - dataIndex: 对应数据数组中数据的key值，用于获取并展示value值
	 * - format: 数据格式化函数，默认是原数据格式返回，优先级次于slot
	 * - sort: 排序状态，可以是'none'（不排序）、'desc'（降序）或'asc'（升序）
	 * - fixed: 固定列的状态，可以是'none'（不固定）、'left'（固定在左侧）或'right'（固定在右侧），采用position: sticky;
	 * - align: 对齐方式
	 */
	columns: {
		type: Array,
		required: true,
	},
});

// 被选中的
const selectedItems = ref([]);

// 表格样式
const tableStyle = computed(() => {
	return props.height ? { height: props.height } : {};
});

// 统一加入key后的数据
const newData = computed(() => {
	return props.data.map((row, index) => {
		if (typeof props.indexed === "function") {
			row._rowkey = props.rowKey(row, index);
		} else if (typeof props.indexed === "string") {
			row._rowkey = row[props.rowKey];
		} else {
			row._rowkey = index;
		}
		return row;
	});
});

// 当前所有rowKes
const currentRowKes = computed(() => {
	return newData.value.map((row) => {
		return row._rowkey;
	});
});

// 是否选中当前至少一个
const selectSome = computed(() => {
	return currentRowKes.value.some((element) =>
		selectedItems.value.includes(element),
	);
});

// 是否选中了当前所有
const selectAll = computed(() => {
	return currentRowKes.value.every((element) =>
		selectedItems.value.includes(element),
	);
});

// 计算indeterminate，至少一个，但是不是所有时为true
const indeterminate = computed(() => {
	return selectSome.value && !selectAll.value;
});

// 全选按钮状态
// 当点击全选，把当前所有的key加入到 selectedItems，然后去重
// 取消全选，把当前所有的key从 selectedItems 里剔除
const checkedAll = computed({
	get() {
		return selectAll.value;
	},
	set(check) {
		if (check) {
			const newSelection = new Set([
				...selectedItems.value,
				...currentRowKes.value,
			]);
			selectedItems.value = [...newSelection];
		} else {
			selectedItems.value = selectedItems.value.filter(
				(item) => !currentRowKes.value.includes(item),
			);
		}
	},
});

// 计算索引列的值，如果是函数，返回函数，否则认为是根据数组索引+1
const indexStr = (row, index) => {
	if (typeof props.indexed === "function") {
		return props.indexed(row, index);
	} else {
		return index + 1;
	}
};

// 事件
const emit = defineEmits(["sort"]);

// 排序状态：初始化后获取最后一个配置了 sort 排序的 column。
const sortState = ref(null);
watchEffect(() => {
	const last = props.columns.reduceRight((last, column) => {
		return ["none", "asc", "desc"].includes(column.sort) ? column : last;
	}, null);
	if (last) {
		sortState.value = { column: last.dataIndex, sort: last.sort };
	}
});

// 点击排序，执行切换或者替换。
const handleSort = (column, sort) => {
	if (column === sortState.value?.column && sort === sortState.value?.sort) {
		sortState.value = null;
		emit("sort", null);
	} else {
		sortState.value = { column, sort };
		emit("sort", { column, sort });
	}
};

//
</script>

<style lang="scss" scoped>
@import "./table.scss";
</style>
