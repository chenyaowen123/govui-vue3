---
outline: deep
---

# Form 表单

在一组备选项中进行备选项

<script setup>
import { ref } from 'vue'
const radio = ref('1');
</script>


## 基础用法

你可以使用 ```label``` 或者 ```<slot/>``` 两种方式定义其中内容。

<demo-container class="demo-gov-form">
	<gov-radio v-model="radio" value="1" label="选项1"/>
	<gov-radio v-model="radio" value="2" label="选项2"/>
	<gov-radio v-model="radio" value="3">选项3</gov-radio>
</demo-container>

```md
<template>
	<gov-radio v-model="radio" value="1" label="选项1"/>
	<gov-radio v-model="radio" value="2" label="选项2"/>
	<gov-radio v-model="radio" value="3">选项3</gov-radio>
</template>

<script setup>
import { ref } from 'vue'
const radio = ref('1');
</script>
```

## 禁用状态

备选项框不可用的状态。

<demo-container class="demo-gov-form">
	<gov-radio disabled v-model="radio" value="1">备选项</gov-radio>
	<gov-radio disabled v-model="radio" value="2">备选项</gov-radio>
	<gov-radio disabled v-model="radio" value="3">备选项</gov-radio>
</demo-container>

```md
<template>
	<gov-radio disabled v-model="radio" value="1">禁用状态</gov-radio>
	<gov-radio disabled v-model="radio" value="2">禁用状态</gov-radio>
	<gov-radio disabled v-model="radio" value="3">禁用状态</gov-radio>
</template>

<script setup>
import { ref } from 'vue'
const radio = ref('1');
</script>
```

## 边框与大小

默认没有尺寸设计，只有设置边框后才能看到设置不同尺寸。

<demo-container class="demo-gov-form">
	<gov-radio-group border v-model="radio" size="large">
		<gov-radio value="1">备选项</gov-radio>
		<gov-radio value="2">备选项</gov-radio>
		<gov-radio value="3">备选项</gov-radio>
	</gov-radio-group>
	<br/>
	<br/>
	<gov-radio-group border v-model="radio">
		<gov-radio value="1">备选项</gov-radio>
		<gov-radio value="2">备选项</gov-radio>
		<gov-radio value="3">备选项</gov-radio>
	</gov-radio-group>
	<br/>
	<br/>
	<gov-radio-group border v-model="radio" size="small">
		<gov-radio value="1">备选项</gov-radio>
		<gov-radio value="2">备选项</gov-radio>
		<gov-radio value="3">备选项</gov-radio>
	</gov-radio-group>
</demo-container>

```md
<template>
	<gov-radio-group border v-model="radio" size="large">
		<gov-radio value="1">备选项</gov-radio>
		<gov-radio value="2">备选项</gov-radio>
		<gov-radio value="3">备选项</gov-radio>
	</gov-radio-group>
	<gov-radio-group border v-model="radio">
		<gov-radio value="1">备选项</gov-radio>
		<gov-radio value="2">备选项</gov-radio>
		<gov-radio value="3">备选项</gov-radio>
	</gov-radio-group>
	<gov-radio-group border v-model="radio" size="small">
		<gov-radio value="1">备选项</gov-radio>
		<gov-radio value="2">备选项</gov-radio>
		<gov-radio value="3">备选项</gov-radio>
	</gov-radio-group>
</template>

<script setup>
import { ref } from 'vue'
const radio = ref('1');
</script>
```


