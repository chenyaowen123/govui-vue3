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

## 无顶部

只有内容区域的卡片。可以设置 ```contentStyle``` 修改容器样式。

<cardNoHeader />


## 控制阴影

可以设置阴影的交互场景。

<cardBoxShadow />
