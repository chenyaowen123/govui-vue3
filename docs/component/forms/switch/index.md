<script setup>
import switchBase from "./switch-base.vue"
import switchSize from "./switch-size.vue"
import switchDisabled from "./switch-disabled.vue"
import switchType from "./switch-type.vue"
import switchTrueValue from "./switch-true-value.vue"
</script>

# Switch 开关

常用true和false两种状态切换，例如开启或者关闭某个设置。

## 基础用法

<switchBase />

## 不同尺寸

<switchSize />

## 禁用状态

<switchDisabled />

## 不同类型

可以根据 ```type``` 设置不同类型的开关。

<switchType />

## 设置 TrueValue 和 FalseValue

设置checkbox原生组件的 ```trueValue/falseValue``` 属性。

<switchTrueValue />
