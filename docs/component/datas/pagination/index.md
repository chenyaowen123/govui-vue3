<script setup>
import paginationBase from "./pagination-base.vue"
import paginationPagesizes from "./pagination-pagesizes.vue"
import paginationPlain from "./pagination-plain.vue"
import paginationDisabled from "./pagination-disabled.vue"
import paginationBackground from "./pagination-background.vue"
import paginationCustom from "./pagination-custom.vue"
</script>
# Pagination 分页


## 基础用法

使用 ```v-model / modelValue``` 快速绑定当前页码。

<paginationBase />

## 设置分页

可以通过 ```v-model:page-size``` 设置当前分页大小（对应下拉框值）；通过设置 ```page-sizes``` 可设置分页大小选择器内的 ```options```。

<paginationPagesizes />

## 朴素模式

朴素模式只有简单的分页分页列表、前一页、后一页；

<paginationPlain />

## 禁用模式

禁用时分页不可选择。

<paginationDisabled />

## 背景色

设置背景色风格。

<paginationBackground />


## 自定义

自定义上下页。

<paginationCustom />
