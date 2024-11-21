<script setup>
import checkboxBase from "./checkbox-base.vue"
import checkboxBorder from "./checkbox-border.vue"
import checkboxDisabled from "./checkbox-disabled.vue"
import checkboxValue from "./checkbox-value.vue"
import checkboxGroup from "./checkbox-group.vue"
import checkboxButton from "./checkbox-button.vue"
</script>

# Checkbox 多选框

一组备选项中进行多选。

## 基础用法

可以使用 ```label``` 或者 ```<slot/>``` 两种方式定义其中内容。

<checkboxBase/>

::: details 查看代码

可以多个单选框绑定一个值，或者单个绑定。

<<< ./checkbox-base.vue#snippet{vue:line-numbers}
:::


## 边框模式

设置 ```border``` 后可设置 ```size``` 显示不同尺寸。

<checkboxBorder/>

::: details 查看代码
<<< ./checkbox-border.vue#snippet{vue:line-numbers}
:::


## 禁用状态

设置禁用状态。

<checkboxDisabled />

::: details 查看代码
<<< ./checkbox-disabled.vue#snippet{vue:line-numbers}
:::


## 设置 TrueValue 和 FalseValue

自定义选中后的值和取消勾选的值。

<checkboxValue/>

::: details 查看代码
<<< ./checkbox-value.vue#snippet{vue:line-numbers}
:::


## 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

你可以设置 ```indeterminate``` 半选中状态，这通常使用在全选场景，当设置 ```indeterminate``` 时，它仅仅是一个展示。

<checkboxGroup/>

::: details 查看代码
<<< ./checkbox-group.vue#snippet{vue:line-numbers}
:::



## 多选框组 Button

当多选组设置按钮样式时。

<checkboxButton />

::: details 查看代码
<<< ./checkbox-button.vue#snippet{vue:line-numbers}
:::


## Checkbox Attributes

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
      <td>绑定的值</td>
      <td>Boolean / Array</td>
      <td>—</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>size</td>
      <td>尺寸</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>label</td>
      <td>标签文本</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>border</td>
      <td>是否有边框</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>indeterminate</td>
      <td>是否为不确定状态</td>
      <td>Boolean</td>
      <td>true, false</td>
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


## Checkbox Events

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
      <td>值改变时触发</td>
      <td>新的值</td>
    </tr>
    <tr>
      <td>blur</td>
      <td>失去焦点时触发</td>
      <td>事件对象</td>
    </tr>
    <tr>
      <td>focus</td>
      <td>获得焦点时触发</td>
      <td>事件对象</td>
    </tr>
  </tbody>
</table>


## Checkbox Slots

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


## Checkbox-group Attributes

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
      <td>绑定的值，用于控制选中的复选框</td>
      <td>Array</td>
      <td>—</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>border</td>
      <td>是否显示复选框的边框</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size</td>
      <td>复选框组的尺寸</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>button</td>
      <td>是否将复选框渲染为按钮样式</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用复选框组</td>
      <td>Boolean</td>
      <td>true, false</td>
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


## Checkbox-group Events

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
      <td>值改变时触发</td>
      <td>新的值数组</td>
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


## Checkbox-group Slots

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
      <td>用于放置复选框 GovCheckbox 组件实例。</td>
    </tr>
  </tbody>
</table>
