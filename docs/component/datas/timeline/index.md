<script setup>
import timelineBase from "./timeline-base.vue"
import timelineCustom from "./timeline-custom.vue"
import timelineSlot from "./timeline-slot.vue"
</script>

# Timeline 时间线

通常用于某个事物完成节点，进度流程等。

## 基本使用

<timelineBase />

::: details 查看代码
<<< ./timeline-base.vue{vue:line-numbers}
:::


## 节点控制

控制节点的图标显示。

<timelineCustom />

::: details 查看代码
<<< ./timeline-custom.vue{vue:line-numbers}
:::


## 自定义节点

自定义节点显示的内容。

<timelineSlot />

::: details 查看代码
<<< ./timeline-slot.vue{vue:line-numbers}
:::


## TimelineItem Attributes

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
      <td>timestamp</td>
      <td>时间戳内容</td>
      <td>String</td>
      <td>—</td>
      <td>""</td>
    </tr>
    <tr>
      <td>hideTimestamp</td>
      <td>是否隐藏时间戳</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>内容和时间戳的位置</td>
      <td>String</td>
      <td>"top", "bottom"</td>
      <td>"bottom"</td>
    </tr>
    <tr>
      <td>type</td>
      <td>圆点颜色类型</td>
      <td>String</td>
      <td>"default", "primary", "success", "info", "warning", "danger"</td>
      <td>"default"</td>
    </tr>
    <tr>
      <td>color</td>
      <td>圆点颜色（背景色）</td>
      <td>String</td>
      <td>—</td>
      <td>""</td>
    </tr>
    <tr>
      <td>size</td>
      <td>圆点大小</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>图标名称</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>hollow</td>
      <td>是否空心</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

## TimelineItem Slots

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
      <td>默认插槽，用于插入内容</td>
      <td>否</td>
      <td>—</td>
    </tr>
    <tr>
      <td>dot</td>
      <td>自定义圆点内容</td>
      <td>否</td>
      <td>—</td>
    </tr>
  </tbody>
</table>

