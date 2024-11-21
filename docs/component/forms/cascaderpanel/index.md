<script setup>
import cascaderPanel from "./cascader-panel.vue"
</script>

# CascaderPanel 级联面板

用于多层级选择。

## 基本用法

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


## Attributes

<table>
  <thead>
    <tr>
      <th width="90">属性名</th>
      <th width="80">类型</th>
      <th width="80">默认值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>options</td>
      <td>Array</td>
      <td>[]</td>
      <td>级联面板的选项数组，每个选项可以包含 value, label, children, disabled 等属性。需注意 value 唯一。</td>
    </tr>
    <tr>
      <td>modelValue</td>
      <td>Array</td>
      <td>[]</td>
      <td>绑定的值，选中节点 value 的集合，用于控制级联面板选中的项，需注意顺序对弈数据层级。</td>
    </tr>
  </tbody>
</table>


## Events

<table>
  <thead>
    <tr>
      <th width="80">事件名</th>
      <th width="150">参数</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>change</td>
      <td>(Values, Objects)</td>
      <td>当级联面板的选中项发生变化时触发，Values 参数返回选中的 value 列表， Objects 返回选中节点的数据。</td>
    </tr>
  </tbody>
</table>
