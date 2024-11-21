<script setup>
import dangqiBase from "./dangqi-base.vue"
</script>

# Dangqi 党旗

快速引用一个符合标准的党旗图片，该组件有助于规范化、标准化。


## 图案颜色

党徽图案一般使用金黄色或者红色。

黄色 R=255  G=255  B=0

红色 R=238  G=28  B=37

在特定场合需要使用非通用尺度党旗的，应当按照通用尺度成比例适当放大或者缩小。

## 基础使用

<dangqiBase />

```vue
<template>
	<gov-dangqi :width="width" />
</template>

<script setup>
import { ref } from "vue";
const width = ref(200);
</script>
```

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
  </tbody>
</table>
