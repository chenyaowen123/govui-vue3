<script setup>
import inputNumberBase from "./examples/inputnumber/inputnumber-base.vue"
import inputNumberButton from "./examples/inputnumber/inputnumber-button.vue"
import inputNumberDisabled from "./examples/inputnumber/inputnumber-disabled.vue"
import inputNumberMax from "./examples/inputnumber/inputnumber-max.vue"
import inputNumberValueFormat from "./examples/inputnumber/inputnumber-value-format.vue"
import inputNumberInput from "./examples/inputnumber/inputnumber-input.vue"
</script>

# InputNumber 数字输入框

数字类型的输入和格式化。


## 相关文档

数字格式化基于 ```numeral.js```。 更多模板请参考：

- [numeral.js](http://numeraljs.com/)

## 基本用法

显示一个美元格式的数字。

<inputNumberBase />

```vue
<template>
	<gov-input-number v-model="value" />
</template>

<script setup>
import { ref } from "vue";
const value = ref(9999);
</script>
```






## 控制按钮

+ 用 ```controls``` 设置是否显示控制按钮。
+ 用 ```step``` 设置步进。

<inputNumberButton />

```vue
<template>
	<gov-input-number v-model="value" controls :step="100" />
</template>

<script setup>
import { ref } from "vue";
const value = ref();
</script>
```

## 禁用状态


+ ```disabled``` 禁用。

<inputNumberDisabled />

```vue
<template>
	<gov-input-number v-model="value" controls :step="100" disabled/>
</template>

<script setup>
import { ref } from "vue";
const value = ref();
</script>
```




## 最大/最小值

+ 用 ```min/max``` 设置最大最小值。

<inputNumberMax />

```vue
<template>
	<gov-input-number
		v-model="value"
		controls
		format="$ 0,0.00"
		:step="100"
		:min="500"
		:max="1000"
	/>
</template>

<script setup>
import { ref } from "vue";
const value = ref();
</script>
```



## 返回格式

+ 用 ```format``` 控制显示格式。
+ 用 ```valueFormat``` 控制返回值格式。

<inputNumberValueFormat />

```vue
<template>
	<demo-container class="gov-demo-inputnumber">
		<gov-input-number v-model="value"  format="$ 0,0" valueFormat />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("$ 314,159"); // 双向绑定都是格式化后的值
</script>
```



## 控制 Input

该组件基于Input 组件，可以和 Input 控件一样设置前缀、后缀、前置内容、后置内容，具体可参考 Input 组件。

<inputNumberInput />

```vue
<template>
	<gov-input-number
		v-model="value"
		format="0,0.00"
		prefix="￥"
		suffix="RMB"
	>
		<template #addonBefore>💰</template>
		<template #addonAfter>🔥</template>
	</gov-input-number>
</template>

<script setup>
import { ref } from "vue";
const value = ref(9999);
</script>
```
