<script setup>
import resultBase from "./examples/result/result-base.vue"
import resultCustom from "./examples/result/result-custom.vue"
</script>

# Result 结果

操作结果或者异常状态做反馈。


## 基础用法

<resultBase />

## 定义插槽内容

默认插槽里可以追加一些按钮等操作。

<resultCustom />

## Attributes

<table style="width:100%; display:table;">
  <thead>
    <tr>
      <th>属性</th>
      <th>类型</th>
      <th>默认值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>String</td>
      <td>-</td>
      <td>结果标题。</td>
    </tr>
    <tr>
      <td>description</td>
      <td>String</td>
      <td>-</td>
      <td>结果描述。</td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>"success"</td>
      <td>结果类型，可选值有'success', 'info', 'warning', 'danger'。</td>
    </tr>
  </tbody>
</table>

## Slots

<table style="width:100%; display:table;">
  <thead>
    <tr>
      <th>Slot Name</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>icon</td>
      <td>用于自定义结果图标的插槽。默认情况下，会显示与`type`对应的图标。</td>
    </tr>
    <tr>
      <td>title</td>
      <td>用于自定义结果标题的插槽。如果未提供，则显示`title`属性的内容。</td>
    </tr>
    <tr>
      <td>description</td>
      <td>用于自定义结果描述的插槽。如果未提供，则显示`description`属性的内容。</td>
    </tr>
    <tr>
      <td>default</td>
      <td>用于自定义结果底部内容的插槽。只有在提供了内容时才会显示。</td>
    </tr>
  </tbody>
</table>
