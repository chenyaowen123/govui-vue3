<script setup>
import guohuiBase from "./guohui-base.vue"
</script>

# Guohui 国徽

快速引用一个符合标准的国徽图片，该组件有助于规范化、标准化。


## 国徽法规范

《中华人民共和国国徽法》是为了维护国徽的尊严，正确使用国徽，增强公民的国家观念，弘扬爱国主义精神，培育和践行社会主义核心价值观，根据宪法，制定的法律。

2020年10月17日，十三届全国人大常委会第二十二次会议表决通过关于修改国旗法、国徽法的决定，决定于2021年1月1日起施行。


## 基础使用

<guohuiBase />


```vue
<template>
	<gov-guohui :width="width" />
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
