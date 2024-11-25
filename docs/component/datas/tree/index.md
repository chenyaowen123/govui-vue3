<script setup>
import treeBase from "./tree-base.vue"
import treeIcon from "./tree-icon.vue"
import treeSlot from "./tree-slot.vue"
</script>

# Tree 树结构

用于树结构展开。

## 基础用法

<treeBase />

::: details 查看代码
::: code-group
<<< ./tree-base.vue{vue:line-numbers}
<<< ./treeData.js{js:line-numbers}
:::


## 修改icon

你可以分别设置，节点展开前、节点展开后、无子节点等状态的 Icon 。

<treeIcon />

::: details 查看代码
::: code-group
<<< ./tree-icon.vue{vue:line-numbers}
<<< ./treeData.js{js:line-numbers}
:::


## 自定义节点

自定义节点内容。

<treeSlot />

::: details 查看代码
::: code-group
<<< ./tree-slot.vue{vue:line-numbers}
<<< ./treeData.js{js:line-numbers}
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
      <td>data</td>
      <td>树形结构数据</td>
      <td>Array</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>expandeds</td>
      <td>展开的节点 ID 列表</td>
      <td>Array</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>paddingLeft</td>
      <td>子节点的缩进宽度</td>
      <td>String</td>
      <td>—</td>
      <td>"20px"</td>
    </tr>
    <tr>
      <td>foldIcon</td>
      <td>折叠时的图标名称</td>
      <td>String</td>
      <td>—</td>
      <td>"caret-right"</td>
    </tr>
    <tr>
      <td>unfoldIcon</td>
      <td>展开时的图标名称，如果设置，则图标旋转消失</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>nodeIcon</td>
      <td>无子元素节点的图标名称</td>
      <td>String</td>
      <td>—</td>
      <td>null</td>
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
      <td>update:expandeds</td>
      <td>展开的节点 ID 列表更新时触发</td>
      <td>新的展开节点 ID 列表</td>
    </tr>
    <tr>
      <td>toggle</td>
      <td>节点展开或收起时触发</td>
      <td>新的展开节点 ID 列表，当前节点</td>
    </tr>
    <tr>
      <td>click</td>
      <td>节点被点击时触发</td>
      <td>当前节点</td>
    </tr>
  </tbody>
</table>


## Slots

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
      <td>默认插槽，用于自定义节点内容</td>
      <td>是</td>
      <td>提供了 node 和 isExpanded 作为作用域插槽属性</td>
    </tr>
  </tbody>
</table>
