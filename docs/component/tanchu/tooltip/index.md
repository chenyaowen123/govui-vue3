<script setup>
import GovTooltipBase from "./tooltip-base.vue"
import GovTooltipDisabled from "./tooltip-disabled.vue"
import GovTooltipCustom from "./tooltip-custom.vue"
</script>


# tooltip 文字提示

鼠标 hover 时的提示信息。

## 基础用法

文字有9种不同位置，默认为 ```top```。

<GovTooltipBase />

## 关闭提示

设置 ```disabled``` 为 ```true``` 即可关闭提示。

<GovTooltipDisabled />

## 自定义内容

<GovTooltipCustom />
