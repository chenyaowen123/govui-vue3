---
outline: deep
aside: false
---

# Checkbox 多选框

一组备选项中进行多选

<script setup>
import { ref } from 'vue';
const checkboxGroup1 = ref([1, 2]);
const checkboxGroup2 = ref([1, 2]);
const checkboxGroup3 = ref([1, 2]);
const checkboxGroup4 = ref([1, 2]);

const checked1 = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
const checked5 = ref(true);
const checked6 = ref(false);
const checked7 = ref('选中啦');
</script>


## 基础用法

你可以使用 ```label``` 或者 ```<slot/>``` 两种方式定义其中内容。

<demo-container class="demo-gov-form">
	<gov-checkbox v-model="checkboxGroup1" :value="1" label="选项1"/>
	<gov-checkbox v-model="checkboxGroup1" :value="2">选项2</gov-checkbox>
	<gov-checkbox v-model="checked1" label="选项3"/>
</demo-container>

```md
<template>
	<!-- 多个绑定 -->
	<gov-checkbox v-model="checkboxGroup1" :value="1" label="选项1"/>
	<gov-checkbox v-model="checkboxGroup1" :value="2">选项2</gov-checkbox>
	<!-- 单个绑定 -->
	<gov-checkbox v-model="checked1" label="选项3"/>
</template>

<script setup>
import { ref } from 'vue';
const checkboxGroup1 = ref([1, 2]);
const checked1 = ref(true);
</script>
```


## 边框模式

设置 ```border``` 后可设置 ```size``` 显示不同尺寸。

<demo-container class="demo-gov-form">
	<gov-checkbox v-model="checked2" border size="large">选项4</gov-checkbox>
	<gov-checkbox v-model="checked3" border>选项5</gov-checkbox>
	<gov-checkbox v-model="checked4" border size="small">选项6</gov-checkbox>
	<br/>
	<br/>
	<gov-checkbox-group border size="large" v-model="checkboxGroup2">
		<gov-checkbox label="选项1" :value="1"/>
		<gov-checkbox label="选项2" :value="2"/>
		<gov-checkbox label="选项3" :value="3"/>
	</gov-checkbox-group>
</demo-container>

```md
<template>
	<gov-checkbox v-model="checked2" border size="large">选项4</gov-checkbox>
	<gov-checkbox v-model="checked3" border>选项5</gov-checkbox>
	<gov-checkbox v-model="checked4" border size="small">选项6</gov-checkbox>
	<br/>
	<gov-checkbox-group border size="large" v-model="checkboxGroup2">
		<gov-checkbox label="选项1" :value="1"/>
		<gov-checkbox label="选项2" :value="2"/>
		<gov-checkbox label="选项3" :value="3"/>
	</gov-checkbox-group>
</template>

<script setup>
import { ref } from 'vue';
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
const checkboxGroup2 = ref([1, 2]);
</script>
```


## 禁用状态
<demo-container class="demo-gov-form">
	<gov-checkbox v-model="checked5" disabled>选项2</gov-checkbox>
	<gov-checkbox v-model="checked6" disabled>选项3</gov-checkbox>
	<br/>
	<br/>
	<gov-checkbox v-model="checked5" disabled border>选项2</gov-checkbox>
	<gov-checkbox v-model="checked6" disabled border>选项3</gov-checkbox>
</demo-container>

```md
<template>
	<gov-checkbox v-model="checked5" disabled>选项2</gov-checkbox>
	<gov-checkbox v-model="checked6" disabled>选项3</gov-checkbox>
	<br/>
	<gov-checkbox v-model="checked5" disabled border>选项2</gov-checkbox>
	<gov-checkbox v-model="checked6" disabled border>选项3</gov-checkbox>
</template>

<script setup>
import { ref } from 'vue';
const checked5 = ref(true);
const checked6 = ref(false);
</script>
```



## 设置 TrueValue 和 FalseValue

<demo-container class="demo-gov-form">
	<gov-checkbox v-model="checked7" true-value="选中啦" false-value="没选中">点我切换：{{ checked7 }}</gov-checkbox>
</demo-container>

```md
<template>
	<gov-checkbox v-model="checked7" true-value="选中啦" false-value="没选中">
		点我切换：{{ checked7 }}
	</gov-checkbox>
</template>

<script setup>
import { ref } from 'vue';
const checked7 = ref('选中啦');
</script>
```


## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

<demo-container class="demo-gov-form">
	<gov-checkbox-group v-model="checkboxGroup3">
		<gov-checkbox :value="1" label="选项1"/>
		<gov-checkbox :value="2" label="选项2"/>
		<gov-checkbox :value="3" label="选项3"/>
	</gov-checkbox-group>
</demo-container>

```md
<template>
	<gov-checkbox-group v-model="checkboxGroup3">
		<gov-checkbox :value="1" label="选项1"/>
		<gov-checkbox :value="2" label="选项2"/>
		<gov-checkbox :value="3" label="选项3"/>
	</gov-checkbox-group>
</template>

<script setup>
import { ref } from 'vue';
const checkboxGroup3 = ref([1, 2]);
</script>
```

## 多选框组 Button

使用按钮样式。

<demo-container class="demo-gov-form">
	<gov-checkbox-group v-model="checkboxGroup4" button size="large">
		<gov-checkbox :value="1" label="选项1"/>
		<gov-checkbox :value="2" label="选项2"/>
		<gov-checkbox :value="3" label="选项3"/>
		<gov-checkbox :value="4" label="选项4"/>
	</gov-checkbox-group>
	<br/>
	<gov-checkbox-group v-model="checkboxGroup4" button>
		<gov-checkbox :value="1" label="选项1"/>
		<gov-checkbox :value="2" label="选项2"/>
		<gov-checkbox :value="3" label="选项3"/>
		<gov-checkbox :value="4" label="选项4"/>
	</gov-checkbox-group>
	<br/>
	<gov-checkbox-group v-model="checkboxGroup4" button size="small" disabled>
		<gov-checkbox :value="1" label="选项1"/>
		<gov-checkbox :value="2" label="选项2"/>
		<gov-checkbox :value="3" label="选项3"/>
		<gov-checkbox :value="4" label="选项4"/>
	</gov-checkbox-group>
</demo-container>

```md
<template>
	<gov-checkbox-group v-model="checkboxGroup4" button size="large">
		<gov-checkbox :value="1" label="选项1"/>
		<gov-checkbox :value="2" label="选项2"/>
		<gov-checkbox :value="3" label="选项3"/>
		<gov-checkbox :value="4" label="选项4"/>
	</gov-checkbox-group>
	<br/>
	<gov-checkbox-group v-model="checkboxGroup4" button>
		<gov-checkbox :value="1" label="选项1"/>
		<gov-checkbox :value="2" label="选项2"/>
		<gov-checkbox :value="3" label="选项3"/>
		<gov-checkbox :value="4" label="选项4"/>
	</gov-checkbox-group>
	<br/>
	<gov-checkbox-group v-model="checkboxGroup4" button size="small" disabled>
		<gov-checkbox :value="1" label="选项1"/>
		<gov-checkbox :value="2" label="选项2"/>
		<gov-checkbox :value="3" label="选项3"/>
		<gov-checkbox :value="4" label="选项4"/>
	</gov-checkbox-group>
</template>

<script setup>
import { ref } from 'vue';
const checkboxGroup4 = ref([1, 2]);
</script>
```
