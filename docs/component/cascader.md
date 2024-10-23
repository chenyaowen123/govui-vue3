<script setup>
import cascaderPanel from "./examples/cascader/cascader-panel.vue"
</script>

# Cascader 级联选择器

## 基本用法

级联选择器。


## 级联面板

级联面板，比较级联选择器更加直观。

<cascaderPanel />

```vue
<template>
	<gov-cascader-panel v-model="values" :options="options" style="height: 240px" />
	<div> {{ values }}</div>
</template>

<script setup>
import { ref } from "vue";
import options from "./data.js";
const values = ref(["zujian", "form", "input-number"]);
</script>
```
