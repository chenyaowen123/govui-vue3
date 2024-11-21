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

::: details 查看代码
<<< ./tag-base.vue#snippet{vue:line-numbers}
:::



## 关闭按钮

标签提供关闭按钮和关闭事件。

<tagClose />

::: details 查看代码
<<< ./tag-close.vue#snippet{vue:line-numbers}
:::


## 不同尺寸

<tagSize />

::: details 查看代码
<<< ./tag-size.vue#snippet{vue:line-numbers}
:::


## 设置图标

<tagIcon />

::: details 查看代码
<<< ./tag-icon.vue#snippet{vue:line-numbers}
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
      <td>type</td>
      <td>标签类型</td>
      <td>String</td>
      <td>default, primary, success, info, warning, danger</td>
      <td>default</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>图标名称</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>closable</td>
      <td>是否可关闭</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>round</td>
      <td>是否为圆角</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>fill</td>
      <td>是否填充</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>text</td>
      <td>标签文本</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>size</td>
      <td>标签尺寸</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
  </tbody>
</table>



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


## Slots

<table>
  <thead>
    <tr>
      <th>插槽名</th>
      <th>说明</th>
      <th>内容</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>icon</td>
      <td>用于自定义图标</td>
      <td>可以放置自定义图标组件或图片。</td>
    </tr>
    <tr>
      <td>default</td>
      <td>用于自定义标签文本内容</td>
      <td>可以放置自定义文本或 HTML 结构。</td>
    </tr>
  </tbody>
</table>
