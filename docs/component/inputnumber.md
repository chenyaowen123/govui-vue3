<script setup>
import inputNumberBase from "./examples/inputnumber/inputnumber-base.vue"
import inputNumberMax from "./examples/inputnumber/inputnumber-max.vue"
import inputNumberValueFormat from "./examples/inputnumber/inputnumber-value-format.vue"
import inputNumberInput from "./examples/inputnumber/inputnumber-input.vue"
</script>

# InputNumber 数字输入框

数字类型的输入和格式化。

## 基本用法

显示一个美元格式的数字。

<inputNumberBase />



## 最大/最小值

<inputNumberMax />



## 返回格式

+ 用 ```format``` 控制显示格式。
+ 用 ```valueFormat``` 控制返回值格式。

<inputNumberValueFormat />

## 控制 Input

该组件基于Input 组件，可以和 Input 控件一样设置前缀、后缀、前置内容、后置内容，具体可参考 Input 组件。

<inputNumberInput />
