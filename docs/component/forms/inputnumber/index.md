<script setup>
import inputNumberBase from "./inputnumber-base.vue"
import inputNumberButton from "./inputnumber-button.vue"
import inputNumberDisabled from "./inputnumber-disabled.vue"
import inputNumberMax from "./inputnumber-max.vue"
import inputNumberValueFormat from "./inputnumber-value-format.vue"
import inputNumberInput from "./inputnumber-input.vue"
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
</script>```


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
</script>```

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
</script>```




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
</script>```



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
</script>```



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
</script>```



## Attributes

基于 ```Input``` 组件，更多内容不再赘述。

<table>
  <thead>
    <tr>
      <th>属性名</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>modelValue</td>
      <td>绑定的值</td>
      <td>Number</td>
      <td>—</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>min</td>
      <td>最小值</td>
      <td>Number</td>
      <td>—</td>
      <td>Number.MIN_SAFE_INTEGER</td>
    </tr>
    <tr>
      <td>max</td>
      <td>最大值</td>
      <td>Number</td>
      <td>—</td>
      <td>Number.MAX_SAFE_INTEGER</td>
    </tr>
    <tr>
      <td>step</td>
      <td>步长</td>
      <td>Number</td>
      <td>—</td>
      <td>1</td>
    </tr>
    <tr>
      <td>format</td>
      <td>数值格式化字符串</td>
      <td>String</td>
      <td>—</td>
      <td>"0,0"</td>
    </tr>
    <tr>
      <td>valueFormat</td>
      <td>双向绑定值是否为格式化后的</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>controls</td>
      <td>是否显示加减按钮</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>prefix</td>
      <td>前缀内容</td>
      <td>String/Number</td>
      <td>—</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>size</td>
      <td>输入框尺寸</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>triggerForm</td>
      <td>是否触发表单验证</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
  </tbody>
</table>


## Events

<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th>说明</th>
      <th>回调参数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>update:modelValue</td>
      <td>绑定值更新时触发</td>
      <td>新的值</td>
    </tr>
    <tr>
      <td>focus</td>
      <td>输入框获得焦点时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>blur</td>
      <td>输入框失去焦点时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>change</td>
      <td>值改变时触发</td>
      <td>新的值</td>
    </tr>
    <tr>
      <td>input</td>
      <td>输入时触发</td>
      <td>输入的值</td>
    </tr>
    <tr>
      <td>clear</td>
      <td>清空按钮点击时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>add</td>
      <td>点击增加按钮时触发</td>
      <td>新的值</td>
    </tr>
    <tr>
      <td>subtract</td>
      <td>点击减少按钮时触发</td>
      <td>新的值</td>
    </tr>
  </tbody>
</table>


## Slots

<table>
  <thead>
    <tr>
      <th>插槽名</th>
      <th>说明</th>
      <th>作用域插槽</th>
      <th>内容</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>addonBefore</td>
      <td>前置标签内容</td>
      <td>否</td>
      <td>可以放置自定义的内容，如文本或图标。</td>
    </tr>
    <tr>
      <td>addonAfter</td>
      <td>后置标签内容</td>
      <td>否</td>
      <td>可以放置自定义的内容，如文本或图标。</td>
    </tr>
    <tr>
      <td>prefix</td>
      <td>输入框前缀内容</td>
      <td>否</td>
      <td>可以放置自定义的内容，如文本或图标。</td>
    </tr>
    <tr>
      <td>suffix</td>
      <td>输入框后缀内容</td>
      <td>否</td>
      <td>可以放置自定义的内容，如文本或图标。</td>
    </tr>
  </tbody>
</table>
