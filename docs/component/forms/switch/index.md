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

::: details 查看代码
<<< ./switch-base.vue#snippet{vue:line-numbers}
:::



## 不同尺寸

<switchSize />

::: details 查看代码
<<< ./switch-size.vue#snippet{vue:line-numbers}
:::



## 禁用状态

<switchDisabled />

::: details 查看代码
<<< ./switch-disabled.vue#snippet{vue:line-numbers}
:::



## 不同类型

可以根据 ```type``` 设置不同类型的开关。

<switchType />

::: details 查看代码
<<< ./switch-type.vue#snippet{vue:line-numbers}
:::



## 设置 TrueValue 和 FalseValue

设置checkbox原生组件的 ```trueValue/falseValue``` 属性。

<switchTrueValue />

::: details 查看代码
<<< ./switch-true-value.vue#snippet{vue:line-numbers}
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
      <td>modelValue</td>
      <td>绑定的值，表示开关的状态</td>
      <td>Boolean</td>
      <td>true/false</td>
      <td>—</td>
    </tr>
    <tr>
      <td>type</td>
      <td>开关的类型</td>
      <td>String</td>
      <td>default, primary, success, info, warning, danger</td>
      <td>default</td>
    </tr>
    <tr>
      <td>size</td>
      <td>开关的尺寸</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用开关</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>trueValue</td>
      <td>开关打开时的值</td>
      <td>Boolean/Any</td>
      <td>—</td>
      <td>true</td>
    </tr>
    <tr>
      <td>falseValue</td>
      <td>开关关闭时的值</td>
      <td>Boolean/Any</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>triggerForm</td>
      <td>是否触发表单验证</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
  </tbody>
</table>


## Events

<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th>说明</th>
      <th>回调参数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>update:modelValue</td>
      <td>绑定值更新时触发</td>
      <td>新的值</td>
    </tr>
    <tr>
      <td>change</td>
      <td>开关状态改变时触发</td>
      <td>新的值</td>
    </tr>
    <tr>
      <td>focus</td>
      <td>开关获得焦点时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>blur</td>
      <td>开关失去焦点时触发</td>
      <td>—</td>
    </tr>
  </tbody>
</table>
