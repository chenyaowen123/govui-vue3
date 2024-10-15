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

若选项过多，建议使用 Select 选择器。

<demo-container class="demo-gov-form">
	<gov-radio v-model="radio" value="1">备选项</gov-radio>
	<gov-radio v-model="radio" value="2">备选项</gov-radio>
	<gov-radio v-model="radio" value="3">备选项</gov-radio>
</demo-container>

```md
<template>
	<gov-radio v-model="radio" value="1">备选项</gov-radio>
	<gov-radio v-model="radio" value="2">备选项</gov-radio>
	<gov-radio v-model="radio" value="3">备选项</gov-radio>
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

## 带边框

备选项框不可用的状态。

<demo-container class="demo-gov-form">
	<gov-radio-group border v-model="radio" size="large">
		<gov-radio value="1">备选项</gov-radio>
		<gov-radio value="2">备选项</gov-radio>
		<gov-radio value="3">备选项</gov-radio>
	</gov-radio-group>
	<br/>
	<gov-radio-group border v-model="radio">
		<gov-radio value="1">备选项</gov-radio>
		<gov-radio value="2">备选项</gov-radio>
		<gov-radio value="3">备选项</gov-radio>
	</gov-radio-group>
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
