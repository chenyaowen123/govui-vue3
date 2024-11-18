<script setup>
import inputAutoBase from "./inputauto-base.vue"
import inputAutoSlot from "./inputauto-slot.vue"
</script>

# InputAuto 自动补全输入框

根据输入内容提供对应的输入建议。

## 基本用法

<inputAutoBase />


::: code-group
```vue [index.vue]
<template>
	<gov-input-auto v-model="value" :fetch="querySearch" />
</template>

<script setup>
import { ref } from "vue";
import { fruits } from "./data.js";

const value = ref("");
const querySearch = (str) => {
	return fruits.filter((el) => el.toLowerCase().includes(str.toLowerCase()));
};
</script>
```


```js [data.js]
export const fruits=["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape","Honeydew","Kiwi","Lemon","Mango","Nectarine","Orange","Papaya","Quince","Raspberry","Strawberry","Tomato","Ugli fruit","Vanilla","Watermelon","Xigua","Yumberry","Zucchini",];
export const fruitInfos = fruits.map((item) => ({
	value: item,
	label: item.toUpperCase(),
}));
```
:::



## 自定义模板

可以在默认插槽内书写渲染模板。

+ ```fetch```  可以返回字符串集合或数据对象集合。
+ 当返回对象集合时，```valueKey``` 可指定用于 Input 的字段，默认为字符串 ```value```。

<inputAutoSlot />

::: code-group
```vue [index.vue]
<template>
	<gov-input-auto v-model="value" :fetch="querySearch" >
		<template #default="{ item }">
			<div>大写：{{ item.value.toUpperCase() }}</div>
			<div style="font-size: 12px; color: #666">
				正常：<i>{{ item.value }}</i>
			</div>
		</template>
	</gov-input-auto>
</template>

<script setup>
import { ref } from "vue";
import { fruitInfos } from "./data.js";

const value = ref("");
const querySearch = (str) => {
	return fruitInfos.filter((el) =>
		el.value.toLowerCase().includes(str.toLowerCase()),
	);
};
</script>
```


```js [data.js]
export const fruits=["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape","Honeydew","Kiwi","Lemon","Mango","Nectarine","Orange","Papaya","Quince","Raspberry","Strawberry","Tomato","Ugli fruit","Vanilla","Watermelon","Xigua","Yumberry","Zucchini",];
export const fruitInfos = fruits.map((item) => ({
	value: item,
	label: item.toUpperCase(),
}));
```
:::


## Attributes

参考 Input 和 Popper。
