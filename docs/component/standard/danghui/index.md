<script setup>
import danghuiBase from "./danghui-base.vue"
</script>

# Danghui 党徽

快速引用一个符合标准的党徽图片，该组件有助于规范化、标准化。


## 图案颜色

党徽图案一般使用金黄色或者红色。

黄色：R=253  G=207  B=48

红色：R=237  G=44   B=37

需要悬挂非通用尺度党徽的，应当按照通用尺度成比例适当放大或者缩小，与悬挂背景、场合相适应。

## 基础使用

<danghuiBase />


```vue
<template>
	<gov-danghui :width="width" type="red" />
	<gov-danghui :width="width" type="yellow" />
</template>

<script setup>
import { ref } from "vue";
const width = ref(200);
</script>```


## Attributes

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th width="150">类型</th>
      <th width="100">默认值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>width</td>
      <td>Number / String</td>
      <td>1080</td>
      <td>团宽度，单位 px。</td>
    </tr>
	 <tr>
      <td>type</td>
      <td>String</td>
      <td>red</td>
      <td>图案颜色，可设置为 'red'、'yellow'。</td>
    </tr>
  </tbody>
</table>
