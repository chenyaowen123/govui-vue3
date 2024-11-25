<script setup>
import emptyBase from "./empty-base.vue"
import emptySize from "./empty-size.vue"
import emptyCustom from "./empty-custom.vue"
</script>
# Empty 空状态

## 基础用法

直接使用该组件。

<emptyBase />

::: details 查看代码
<<< ./empty-base.vue{vue:line-numbers}
:::


## 控制大小

通过 ```size``` 修改图片大小；通过 ```description``` 修改描述文字。

<emptySize />

::: details 查看代码
<<< ./empty-size.vue{vue:line-numbers}
:::



## 自定义

自定义图片和文本。

<emptyCustom />

::: details 查看代码
<<< ./empty-custom.vue{vue:line-numbers}
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
      <td>size</td>
      <td>图标大小</td>
      <td>Number</td>
      <td>—</td>
      <td>40</td>
    </tr>
    <tr>
      <td>description</td>
      <td>描述文字</td>
      <td>String</td>
      <td>—</td>
      <td>"暂无数据"</td>
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
      <td>默认插槽，用于自定义内容</td>
      <td>否</td>
      <td>可以放置自定义的内容，如文本、图标或其他 HTML 结构。</td>
    </tr>
  </tbody>
</table>
