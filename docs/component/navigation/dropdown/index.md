<script setup>
import dropdownBase from "./dropdown-base.vue"
import dropdownSize from "./dropdown-size.vue"
</script>
# Dropdown 下拉菜单

常见的下拉菜单。

## 基础用法

包裹任意元素，对其做下拉菜单。

<dropdownBase />

::: details 查看代码
<<< ./dropdown-base.vue{vue:line-numbers}
:::

## 参数控制

可设置不同参数控制组件。

>下拉方向默认是 ```bottom``` 你可以象设置 ```Popper``` 组件一样设置不同方向的下拉，在此不做展示。

<dropdownSize />

::: details 查看代码
<<< ./dropdown-size.vue{vue:line-numbers}
:::


## Dropdown Attributes

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
      <td>绑定值，控制下拉菜单的显示</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>—</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用下拉菜单</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>center</td>
      <td>下拉菜单是否居中</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>hideAfterClick</td>
      <td>点击后是否隐藏下拉菜单</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size</td>
      <td>下拉菜单的大小</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
  </tbody>
</table>

## Dropdown Events

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
      <td>下拉菜单显示状态改变时触发</td>
      <td>下拉菜单的显示状态（Boolean）</td>
    </tr>
    <tr>
      <td>toggle</td>
      <td>下拉菜单显示状态改变时触发</td>
      <td>下拉菜单的显示状态（Boolean）</td>
    </tr>
  </tbody>
</table>

## Dropdown Slots

<table>
  <thead>
    <tr>
      <th>插槽名</th>
      <th>说明</th>
      <th>作用域插槽</th>
      <th>内容</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>触发下拉菜单的元素</td>
      <td>否</td>
      <td>—</td>
    </tr>
    <tr>
      <td>dropdown</td>
      <td>下拉菜单的内容</td>
      <td>否</td>
      <td>—</td>
    </tr>
  </tbody>
</table>


## DropdownItem Attributes

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
      <td>divided</td>
      <td>是否显示分隔线</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用该项</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>项前的图标名称</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>content</td>
      <td>下拉菜单项的内容</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>size</td>
      <td>下拉菜单项的大小</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>center</td>
      <td>内容是否居中</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>hideAfterClick</td>
      <td>点击后是否隐藏下拉菜单</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
  </tbody>
</table>


## DropdownItem Events

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
      <td>click</td>
      <td>点击下拉菜单项时触发</td>
      <td>—</td>
    </tr>
  </tbody>
</table>

## DropdownItem Slots

<table>
  <thead>
    <tr>
      <th>插槽名</th>
      <th>说明</th>
      <th>作用域插槽</th>
      <th>内容</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>下拉菜单项的内容，如果提供了 `content` 属性，则此插槽将被忽略</td>
      <td>否</td>
      <td>—</td>
    </tr>
  </tbody>
</table>
