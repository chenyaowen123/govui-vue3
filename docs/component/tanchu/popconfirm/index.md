<script setup>
import popconfirmBase from "./popconfirm-base.vue"
import popconfirmSlot from "./popconfirm-slot.vue"
</script>


# Popconfirm 气泡确认框

弹出气泡确认框。 `Popconfirm` 在 `Popover` 基础上做了常用封装。

## 基础用法

点击弹出 `Popconfirm`。



<popconfirmBase />

::: details 查看代码
<<< ./popconfirm-base.vue{vue:line-numbers}
:::


## 自定义内容

也可以不用```icon```、```title```属性，使用默认插槽。

<popconfirmSlot />

::: details 查看代码
<<< ./popconfirm-slot.vue{vue:line-numbers}
:::


## Attributes

`Popconfirm` 在 `Popover` 基础上做了常用封装，重复属性请参考 [Popover](../popper/index.md) 文档，在此文档不再赘述。

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>标题</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>confirm-button-text</td>
      <td>确认按钮文字</td>
      <td>String</td>
      <td>—</td>
      <td>确定</td>
    </tr>
    <tr>
      <td>cancel-button-text</td>
      <td>取消按钮文字</td>
      <td>String</td>
      <td>—</td>
      <td>取消</td>
    </tr>
    <tr>
      <td>confirm-button-type</td>
      <td>确认按钮类型</td>
      <td>String</td>
      <td>—</td>
      <td>primary</td>
    </tr>
    <tr>
      <td>cancel-button-type</td>
      <td>取消按钮类型</td>
      <td>String</td>
      <td>—</td>
      <td>text</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>Icon</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>icon-color</td>
      <td>Icon 颜色</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
  </tbody>
</table>


## Slots

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reference</td>
      <td>触发 Popconfirm 显示的 HTML 元素</td>
    </tr>
  </tbody>
</table>

## Events

<table>
  <thead>
    <tr>
      <th>事件名称</th>
      <th>说明</th>
      <th>回调参数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>confirm</td>
      <td>点击确认按钮时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>cancel</td>
      <td>点击取消按钮时触发</td>
      <td>—</td>
    </tr>
  </tbody>
</table>
