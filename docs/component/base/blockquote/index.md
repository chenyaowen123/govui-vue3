<script setup>
import blockquoteBase from "./blockquote-base.vue"
import blockquoteQiantao from "./blockquote-qiantao.vue"
import blockquoteFontsize from "./blockquote-fontsize.vue"
import blockquoteReverse from "./blockquote-reverse.vue"
</script>


# Blockquote 引用

一段引用。

## 基本使用

设置 ```type``` 不同类型的引用。

<blockquoteBase />

::: details 查看代码
<<< ./blockquote-base.vue{vue:line-numbers}
:::


## 嵌套使用

可以互相嵌套使用。

<blockquoteQiantao />

::: details 查看代码
<<< ./blockquote-qiantao.vue{vue:line-numbers}
:::


## 自定义

字体大小默认继承，可设置 ```fontSize``` 修改字体大小； 根据```borderColor``` 设置边框颜色。

<blockquoteFontsize />

::: details 查看代码
<<< ./blockquote-fontsize.vue{vue:line-numbers}
:::

## 翻转

```reverse``` 设置是否翻转，默认不翻转。

<blockquoteReverse />

::: details 查看代码
<<< ./blockquote-reverse.vue{vue:line-numbers}
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
      <td>块引用的类型</td>
      <td>String</td>
      <td>"default", "primary", "success", "info", "warning", "danger"</td>
      <td>"default"</td>
    </tr>
    <tr>
      <td>fontSize</td>
      <td>字体大小</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>borderColor</td>
      <td>边框颜色</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>reverse</td>
      <td>是否翻转显示</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
  </tbody>
</table>


## Slots

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
      <td>用于放置块引用的内容，可以放置任何自定义的内容，例如文本、图片或其他 HTML 结构。</td>
    </tr>
  </tbody>
</table>
