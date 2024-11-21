<script setup>
import loadingBase from "./loading-base.vue"
import loadingStyle from "./loading-style.vue"
import loadingSlot from "./loading-slot.vue"
</script>


# Loading 标签

区域加载状态。

## 基础用法

你可以包裹任何区域，使用 ```v-model``` 控制 loading 效果的隐藏。

<loadingBase />

::: details 查看代码
<<< ./loading-base.vue#snippet{vue:line-numbers}
:::


## 加载样式

通常可以使用 ```loadingText``` 和 ```loadingBackground``` 来定义不同的背景色和文字。

<loadingStyle />

::: details 查看代码
<<< ./loading-style.vue#snippet{vue:line-numbers}
:::



## 自定义

<loadingSlot />

::: details 查看代码
<<< ./loading-slot.vue#snippet{vue:line-numbers}
:::

