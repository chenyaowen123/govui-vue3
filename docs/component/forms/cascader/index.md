<script setup>
import cascaderBase from "./cascader-base.vue"
import cascaderShowAllLevels from "./cascader-show-all-levels.vue"
</script>

# Cascader 级联选择器

## 基本用法

级联选择器。

<cascaderBase />

::: details 查看代码
<<< ./cascader-base.vue#snippet{vue:line-numbers}
:::



## 仅显示最后一级

属性 ```show-all-levels``` 定义了是否显示完整的路径，将其赋值为false则仅显示最后一级。

<cascaderShowAllLevels />

::: details 查看代码
<<< ./cascader-show-all-levels.vue#snippet{vue:line-numbers}
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
      <td>绑定的值，用于控制选中的级联菜单项</td>
      <td>Array</td>
      <td>—</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>options</td>
      <td>级联菜单的数据选项</td>
      <td>Array</td>
      <td>—</td>
      <td>[]</td>
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
      <td>clear</td>
      <td>是否显示清空按钮</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>showAllLevels</td>
      <td>是否显示完整的路径</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
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
      <td>change</td>
      <td>选中项变化时触发</td>
      <td>选中项的值数组</td>
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
    <tr>
      <td>update:modelValue</td>
      <td>绑定值更新时触发</td>
      <td>选中项的值数组</td>
    </tr>
  </tbody>
</table>
