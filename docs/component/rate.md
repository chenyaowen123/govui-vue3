<script setup>
import rateBase from "./examples/rate/rate-base.vue"
import rateMax from "./examples/rate/rate-max.vue"
import rateDisabled from "./examples/rate/rate-disabled.vue"
import rateCustom from "./examples/rate/rate-custom.vue"
</script>


# Rate 评分

设置评价

## 基础用法

<rateBase />

## 设置长度

默认显示 5 个图标，可以设置 ```max``` 来指定长度。

<rateMax />

## 禁用状态

设置 ```disabled``` 禁用时其实是“只读模式”。

<rateDisabled />

## 自定义图标

根据插槽自定义图标。

<rateCustom />
