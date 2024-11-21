<script setup>
import guoqiBase from "./guoqi-base.vue"
</script>

# Guoqi 国旗

快速引用一个符合标准的国旗图片，该组件有助于规范化、标准化。


## 国旗法规范

中华人民共和国国旗是中华人民共和国的象征和标志。每个公民和组织，都应当尊重和爱护国旗。

2020年10月17日，第十三届全国人民代表大会常务委员会第二十二次会议通过了关于修改《中华人民共和国国旗法》的决定，并于2021年1月1日起正式施行。

修改后的国旗法第九条规定，国家倡导公民和组织在适宜的场合使用国旗及其图案,表达爱国情感。公民和组织在网络中使用国旗图案,应当遵守相关网络管理规定,不得损害国旗尊严。网络使用的国旗图案标准版本在中国人大网和中国政府网上发布。


## 基础使用

<guoqiBase />

```vue
<template>
	<gov-guoqi :width="width" />
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
  </tbody>
</table>
