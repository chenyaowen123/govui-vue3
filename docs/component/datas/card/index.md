<script setup>
import cardBase from "./card-base.vue"
import cardNoHeader from "./card-no-header.vue"
import cardBoxShadow from "./card-box-shadow.vue"
</script>
# Card 卡片

常用于某个内容模块。

## 基础使用

+ 如果标题简单可以直接设置 ```title``` 属性，也可以使用 ```<template #title>``` 插槽。
+ 使用 ```<template #actions>``` 插槽定义右上角的按钮操作区。

<cardBase />

::: details 查看代码
<<< ./card-base.vue{vue:line-numbers}
:::


## 无顶部

只有内容区域的卡片。可以设置 ```contentStyle``` 修改容器样式。

<cardNoHeader />

::: details 查看代码
<<< ./card-no-header.vue{vue:line-numbers}
:::


## 控制阴影

可以设置阴影的交互场景。

<cardBoxShadow />

::: details 查看代码
<<< ./card-box-shadow.vue{vue:line-numbers}
:::


## Attributes

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
      <td>title</td>
      <td>卡片标题</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>contentStyle</td>
      <td>内容区域的样式</td>
      <td>Object</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>shadow</td>
      <td>阴影显示策略</td>
      <td>String</td>
      <td>always, hover, never</td>
      <td>always</td>
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
      <td>title</td>
      <td>卡片标题内容</td>
      <td>否</td>
      <td>可以放置自定义的标题内容</td>
    </tr>
    <tr>
      <td>actions</td>
      <td>卡片头部操作区域</td>
      <td>否</td>
      <td>可以放置操作按钮或其他操作元素</td>
    </tr>
    <tr>
      <td>default</td>
      <td>卡片主要内容区域</td>
      <td>否</td>
      <td>放置卡片的主要内容</td>
    </tr>
  </tbody>
</table>
