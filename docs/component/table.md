---
outline: deep
aside: false
---

<script setup>
import tableBase from "./examples/table/table-base.vue"
</script>

# Table 表格

用于展示数据列表。

## 基础用法

<tableBase />


::: code-group
```md [template]
<gov-table :columns="tableColumns" :data="tableData" />

<script setup>
import { ref } from 'vue'
import columns from "./columns.js"
import data from "./data.js"

const tableColumns = ref(columns);
const tableData = ref(data);
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
		sort: "none", // 排序状态
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
		align: "center",
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



斑马线

行Class计算方式

表头

固定表头position: sticky;   只需要设置了 height  自动固定表头。

固定列position: sticky;，在每个列中，

多选框列。

显示索引列。


::: code-group
```md [table.vue]
fdas
```

```js [columns.js]
//fas
```
:::
