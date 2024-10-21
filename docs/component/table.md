---
outline: deep
aside: false
---

<script setup>
import tableBase from "./examples/table/table-base.vue"
import tableLineStyle from "./examples/table/table-line-style.vue"
</script>

# Table 表格

用于展示数据列表。

## 基础用法

你可以在 ```columns``` 里快速设置每一个列的配置。

+ 排序：设置 ```sort``` 时标题会显示排序按钮，有 ```none/desc/asc``` 三种不同预设状态。利用 ```@sort``` 事件响应排序操作。
+ 格式化：利用 ```format``` 处理每列数据的展示时格式，它不会影响原有数据，本质和 ```<slot/>``` 是一致的，但  ```<slot/>```  优先级更高。
+ 对齐：数据默认居左，可设置 ```align``` 控制每列数据对齐方式。

<tableBase />

::: code-group
```md [index.vue]
<gov-table :columns="tableColumns" :data="tableData" @sort="handleSort"/>

<script setup>
import { ref } from 'vue'
import columns from "./columns.js"
import data from "./data.js"

const tableColumns = ref(columns);
const tableData = ref(data);

// 排序
const handleSort = (state) => {
	if (state) {
		let { column, sort } = state; // { column:'age', sort:'desc/asc' }
		data.value = data.value.slice().sort((a, b) => {
			if (sort === "desc") {
				return b[column] - a[column]; // 降序排序
			} else {
				return a[column] - b[column]; // 升序排序
			}
		});
	} else {
		data.value = JSON.parse(JSON.stringify(row)); // 无排序时，应该恢复原有数据顺序
	}
};
</script>
```

```js [columns.js]
export default [
	{
		title: "名字",
		width: 100,
		dataIndex: "name",
	},
	{
		title: "年龄",
		width: 80,
		dataIndex: "age",
		sort: "none", // 排序状态，none/asc/desc
		format: (age) => age + "岁", // 利用format增加单位
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
		align: "center", // 对齐方式
		format: (sex) => (sex === 1 ? "男" : "女"), // 利用format修改展示数据
	},
	{
		title: "地址",
		dataIndex: "address",
	},
];
```

```js [data.js]
export default [
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
];
```
:::






## 行样式

当你想改变行样式，你也可以这么做：

+ 设置条纹：对 ```<gov-table />``` 设置 ```stripe```。
+ 自定义className：对 ```<gov-table />``` 设置 ```rowClassName```。

<tableLineStyle />


```md [index.vue]
<gov-table stripe :columns="tableColumns" :data="tableData" :rowClassName="fun"/>

<script setup>
import { ref } from 'vue'
import columns from "./columns.js"
import data from "./data.js"

const tableColumns = ref(columns);
const tableData = ref(data);

// 计算每行的className
const fun = (row, index) => {
	return `examples-table-row__${index}`;
};
</script>

<style lang="scss">
/* 设置第三行样式 */
.examples-table-row__2 {
	font-weight: bold;
	color:red;
}
</style>

```




## 多选

## 索引

## 固定表头和列

当你设置了 ```height``` 时，会固定表头。
