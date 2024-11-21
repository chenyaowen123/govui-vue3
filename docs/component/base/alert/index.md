<script setup>
import alertBase from "./alert-base.vue"
import alertPlain from "./alert-plain.vue"
import alertDescription from "./alert-description.vue"
import alertIcon from "./alert-icon.vue"
import alertSlot from "./alert-slot.vue"
</script>

# Alert 警告

用于页面中展示重要的提示信息。


## 基本用法

默认为朴素风格。

<alertBase />

::: details 查看代码
<<< ./alert-base.vue{vue:line-numbers}
:::


## 朴素风格

<alertPlain />

::: details 查看代码
<<< ./alert-plain.vue{vue:line-numbers}
:::


## 辅助性文字介绍

<alertDescription />

::: details 查看代码
<<< ./alert-description.vue{vue:line-numbers}
:::


## 带有Icon

<alertIcon />

::: details 查看代码
<<< ./alert-icon.vue{vue:line-numbers}
:::


## 自定义内容

你可以在默认插槽内自定义html。

<alertSlot />

::: details 查看代码
<<< ./alert-slot.vue{vue:line-numbers}
:::

