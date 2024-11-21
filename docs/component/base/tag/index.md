<script setup>
import tagBase from "./tag-base.vue"
import tagClose from "./tag-close.vue"
import tagSize from "./tag-size.vue"
import tagIcon from "./tag-icon.vue"
</script>


# Tag 标签

常用于标记。

## 基础用法

设置 ```type``` 可展示不同类型的样式。设置 ```text``` 和默认插槽都可以设置标签内容。

<tagBase />

## 关闭按钮

标签提供关闭按钮和关闭事件。

<tagClose />

## 不同尺寸

<tagSize />

## 设置图标

<tagIcon />


## Events

<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>close</td>
      <td>关闭事件。</td>
    </tr>
  </tbody>
</table>
