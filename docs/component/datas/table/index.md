<script setup>
import tableBase from "./table-base.vue"
import tableLineStyle from "./table-line-style.vue"
import tableIndexed from "./table-indexed.vue"
import tableSelection from "./table-selection.vue"
import tableFixed from "./table-fixed.vue"
</script>

# Table 表格

用于展示数据列表。

## 基础用法

你可以在 ```columns``` 里快速设置每一个列的配置。

+ 排序：设置 ```sort``` 时标题会显示排序按钮，有 ```none/desc/asc``` 三种不同预设状态。利用 ```@sortChange``` 事件响应排序操作。
+ 格式化：利用 ```format``` 处理每列数据的展示时格式，它不会影响原有数据，本质和 ```<slot/>``` 是一致的，但  ```<slot/>```  优先级更高。
+ 对齐：数据默认居左，可设置 ```align``` 控制每列数据对齐方式。

<tableBase />

::: code-group
```md [index.vue]
<gov-table :columns="tableColumns" :data="tableData" @sortChange="handleSort"/>

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
		id: 1,
		name: "张三",
		age: 30,
		job: "UP主",
		sex: 1,
		address: "河北省、石家庄市",
	},
	{
		id: 2,
		name: "李四",
		age: 36,
		job: "海外贸易",
		sex: 2,
		address: "广东省、珠海市",
	},
	{
		id: 3,
		name: "王二",
		age: 29,
		job: "设计师",
		sex: 2,
		address: "北京市海淀区、石景山",
	},
	{
		id: 4,
		name: "麻子",
		age: 32,
		job: "放牧",
		sex: 1,
		address: "内蒙古、锡林格勒",
	},
];
```
:::










## 复选框

注意：设置 ```selection``` 前提必须指定  ```rowKey``` 来指定唯一标识。```rowKey``` 接收一个 ```String``` 或者一个 ```Function```。

选中行的 ```rowKey``` 会在 ```@selectionChange``` 事件里以数组的形式返回。

<tableSelection />



```md
<gov-table
	:columns="columns"
	:data="data"
	selection
	rowKey="id"
	@selectionChange="handleSelection"
/>
<p>选中id: {{ slecteIds }}</p>

<script setup>
import { ref } from 'vue'
import columns from "./columns.js"
import data from "./data.js"

const tableColumns = ref(columns);
const tableData = ref(data);

const slecteIds = ref([]);
const handleSelection = (slected) => {
	slecteIds.value = slected;
};
</script>
```








## 设置索引

+ 默认：当设置 ```indexed``` 为 ```true``` 时，显示数据在数组中的顺序。
+ 自定义：当设置 ```indexed``` 为 ```Function``` 时，提供```（row, index）``` 两个参数用于自定义索引。

<tableIndexed />

```md
<gov-table :columns="columns" :data="data" indexed />

<script setup>
import { ref } from 'vue'
import columns from "./columns.js"
import data from "./data.js"

const tableColumns = ref(columns);
const tableData = ref(data);

// 自定义索引为数据的 id
// const customIndex = (row, index) => row.id;
</script>
```


## 设置行样式

当你想改变行样式，你也可以这么做：

+ 设置条纹：对 ```<gov-table />``` 设置 ```stripe```。
+ 自定义className：对 ```<gov-table />``` 设置 ```rowClassName```。

<tableLineStyle />


```md
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

## 固定表头和列

该功能根据css的 ```position: sticky;``` 实现，所以在 ***ie11*** 浏览器下降级处理。

+ 设置 ```height``` 时，会自动固定表头。
+ 设置 ```column.fixed``` 为 ```left/right```时，会对该列固定在左侧或者右侧。

<tableFixed />



::: code-group
```md [index.vue]
<gov-table
	:columns="tableColumns"
	:data="tableData"
	height="300px"
	indexed
	selection
	rowKey="id"
/>

<script setup>
import { ref } from 'vue'
import columns from "./columns.js"
import data from "./data.js"

const tableColumns = ref(columns);
const tableData = ref(data);
</script>
```

```js [columns.js]
const length = 15;

let column = Array.from({ length }, (_, index) => ({
	title: `列${index + 1}`,
	width: 140,
	dataIndex: `field${index + 1}`,
}));

column[0].fixed = "left"; // 设置第一列 fixed:right
column[length - 1].fixed = "right"; // 设置最后一列 fixed:right

export default column;
```

```js [data.js]
const length = 15;

const data = Array.from({ length }, (_, index) => {
	return {
		id: index + 1,
		...Array.from({ length }, (_, subIndex) => ({
			[`field${subIndex + 1}`]: `值${index + 1}-${subIndex + 1}`,
		})).reduce((acc, cur) => ({ ...acc, ...cur }), {}), // 将数组转换为对象
	};
});

export default data;
```
:::
