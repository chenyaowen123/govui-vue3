<script setup>
import selectBase from "./select-base.vue"
import selectClear from "./select-clear.vue"
import selectDisabled from "./select-disabled.vue"
import selectSize from "./select-size.vue"
</script>


# Select 选择器

下拉选择。

## 基础用法

设置 ```option``` 组件 ```value/label/disabled```。

<selectBase />

::: details 查看代码
<<< ./select-base.vue#snippet{vue:line-numbers}
:::



## 设置禁用

设置 ```disabled``` 后，组件展开的下来会自动关闭。

<selectDisabled />

::: details 查看代码
<<< ./select-disabled.vue#snippet{vue:line-numbers}
:::



## 禁用清空

默认带有清空按钮，你可以设置 ```clear``` 为 ```false``` 来禁用清空。

<selectClear />

::: details 查看代码
<<< ./select-clear.vue#snippet{vue:line-numbers}
:::


## 设置尺寸

根据 ```size``` 设置不同尺寸。

<selectSize />

::: details 查看代码
<<< ./select-size.vue#snippet{vue:line-numbers}
:::


## Select-option Attributes

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
      <td>value</td>
      <td>选项的值</td>
      <td>String/Number</td>
      <td>—</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>label</td>
      <td>选项的显示文本</td>
      <td>String/Number</td>
      <td>—</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用选项</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

## Select-option Slots

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
      <td>用于自定义选项显示的内容，可以放置如文本或 HTML 结构，默认为 label</td>
    </tr>
  </tbody>
</table>


## Select Attributes

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
      <td>String/Number</td>
      <td>—</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>size</td>
      <td>输入框尺寸</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>占位符</td>
      <td>String</td>
      <td>—</td>
      <td>"请输入"</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>clearable</td>
      <td>是否可清空</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>popperHeight</td>
      <td>popper 组件的高度</td>
      <td>String</td>
      <td>—</td>
      <td>"200px"</td>
    </tr>
    <tr>
      <td>triggerForm</td>
      <td>是否触发表单验证(可能会被弃用)</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
  </tbody>
</table>

## Select Events

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
      <td>值改变时触发</td>
      <td>选中的项</td>
    </tr>
    <tr>
      <td>focus</td>
      <td>输入框获得焦点时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>blur</td>
      <td>输入框失去焦点时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>clear</td>
      <td>清空按钮点击时触发</td>
      <td>—</td>
    </tr>
  </tbody>
</table>

## Select Slots

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
      <td>用于放置下拉选项内容，可以放置 GovSelectOption 组件实例。</td>
    </tr>
  </tbody>
</table>
