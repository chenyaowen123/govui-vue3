<script setup>
import cascaderBase from "./examples/cascader/cascader-base.vue"
</script>

# Cascader 级联选择器

## 基本用法

级联选择器。

<cascaderBase />

```vue
<template>
	<gov-cascader v-model="values" :options="options"  />
</template>

<script setup>
import { ref } from "vue";
import options from "./data.js";
const values = ref(["zujian", "form", "input-number"]);
</script>
```
