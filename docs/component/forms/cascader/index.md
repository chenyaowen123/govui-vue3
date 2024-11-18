<script setup>
import cascaderBase from "./cascader-base.vue"
import cascaderShowAllLevels from "./cascader-show-all-levels.vue"
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


## 仅显示最后一级

属性 ```show-all-levels``` 定义了是否显示完整的路径，将其赋值为false则仅显示最后一级。

<cascaderShowAllLevels />
