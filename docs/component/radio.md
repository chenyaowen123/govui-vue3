---
outline: deep
---

# Form 表单

在一组备选项中进行单选

<script setup>
import { ref } from 'vue'
const radio = ref('1');
</script>


## 基础用法

若选项过多，建议使用 Select 选择器。

<demo-container class="demo-gov-form">
	<gov-radio v-model="radio" label="1">单选</gov-radio>
	<gov-radio v-model="radio" label="2">单选</gov-radio>
</demo-container>

```md
<template>
	<gov-radio v-model="radio" label="1">单选</gov-radio>
	<gov-radio v-model="radio" label="2">单选</gov-radio>
</template>

<script setup>
import { ref } from 'vue'
const radio = ref('1');
</script>
```

## 禁用状态

单选框不可用的状态。

<demo-container class="demo-gov-form">
	<gov-radio disabled v-model="radio" label="1">单选</gov-radio>
	<gov-radio disabled v-model="radio" label="2">单选</gov-radio>
</demo-container>

```md
<template>
	<gov-radio v-model="radio" label="1">禁用状态</gov-radio>
	<gov-radio v-model="radio" label="2">禁用状态</gov-radio>
</template>

<script setup>
import { ref } from 'vue'
const radio = ref('1');
</script>
```
