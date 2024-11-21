<script setup>
import radioBase from "./radio-base.vue"
import radioGroup from "./radio-group.vue"
import radioDisabled from "./radio-disabled.vue"
import radioBorder from "./radio-border.vue"
import radioButton from "./radio-button.vue"
</script>


# Radio 单选

在一组备选项中进行备选项

## 基础用法

可以使用 ```label``` 或者 ```<slot/>``` 两种方式定义其中内容。

<radioBase/>

::: details 查看代码
<<< ./radio-base.vue#snippet{vue:line-numbers}
:::

## 单选按钮组

使用 ```RadioGroup``` 可以统一设置 ```disabled``` 、```size```、```v-model``` 等。

<radioGroup/>

::: details 查看代码
<<< ./radio-group.vue#snippet{vue:line-numbers}
:::


## 禁用状态

备选项框不可用的状态。

<radioDisabled/>

::: details 查看代码
<<< ./radio-disabled.vue#snippet{vue:line-numbers}
:::


## 边框模式

设置 ```border``` 后可设置 ```size``` 显示不同尺寸。

<radioBorder/>

::: details 查看代码
<<< ./radio-border.vue#snippet{vue:line-numbers}
:::


## 按钮样式

按钮样式的单选组合。

<radioButton />

::: details 查看代码
<<< ./radio-button.vue#snippet{vue:line-numbers}
:::


## Radio Attributes

<table>
  <thead>
    <tr>
      <th>属性</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>model-value / v-model</td>
      <td>绑定值</td>
      <td>string / number / boolean</td>
      <td>—</td>
      <td>—</td>
    </tr>
	<tr>
      <td>value</td>
      <td>单选框的值</td>
      <td>string / number / boolean</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>label</td>
      <td>内容文本</td>
      <td>string / number</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>border</td>
      <td>是否显示边框</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size</td>
      <td>Radio 的尺寸，仅在 border 为真时有效</td>
      <td>string</td>
      <td>large / default / small</td>
      <td>—</td>
    </tr>
    <tr>
      <td>name</td>
      <td>原生 name 属性</td>
      <td>string</td>
      <td>—</td>
      <td>—</td>
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

## Radio Events

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
      <td>change</td>
      <td>绑定值变化时触发的事件</td>
      <td>value</td>
    </tr>
	<tr>
      <td>blur</td>
      <td>失去焦点时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>focus</td>
      <td>获得焦点时触发</td>
      <td>—</td>
    </tr>
  </tbody>
</table>

## Radio Slots

<table>
  <thead>
    <tr>
      <th>插槽名</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>自定义标签内容，可以放置任何自定义的内容，例如文本或 HTML 结构。</td>
    </tr>
  </tbody>
</table>


## Radio-group Attributes


<table>
  <thead>
    <tr>
      <th>属性</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>model-value / v-model</td>
      <td>绑定值</td>
      <td>string / number / boolean</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>border</td>
      <td>是否显示边框</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size</td>
      <td>Radio 的尺寸，仅在 border 为真时有效</td>
      <td>string</td>
      <td>large / default / small</td>
      <td>—</td>
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

## Radio-group Events

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
      <td>change</td>
      <td>绑定值变化时触发的事件</td>
      <td>value</td>
    </tr>
	<tr>
      <td>blur</td>
      <td>失去焦点时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>focus</td>
      <td>获得焦点时触发</td>
      <td>—</td>
    </tr>
  </tbody>
</table>


## Radio-group Slots

<table>
  <thead>
    <tr>
      <th>插槽名</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>用于放置复选框 GovRadio 组件实例。</td>
    </tr>
  </tbody>
</table>
