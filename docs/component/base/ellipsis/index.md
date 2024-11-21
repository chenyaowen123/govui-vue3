<script setup>
import ellipsisBase from "./ellipsis-base.vue"
import ellipsisFold from "./ellipsis-fold.vue"
import ellipsisHidefoldup from "./ellipsis-hidefoldup.vue"
</script>


# Ellipsis 文字省略

用于长文本/内容的省略。

## 基础用法

```maxLines``` 设置几行省略，默认是1行。

<ellipsisBase />

::: details 查看代码
<<< ./ellipsis-base.vue#snippet{vue:line-numbers}
:::


## Fold 模式

```fold``` 模式展开按钮在下方，```foldHeight``` 可以设置折叠状态下的显示高度。内容不局限文本。

<ellipsisFold />

::: details 查看代码
<<< ./ellipsis-fold.vue#snippet{vue:line-numbers}
:::



## 隐藏收起

```fold``` 模式下，可设置 ```hideFoldup``` 隐藏收起按钮，通常用于文章内容页。

<ellipsisHidefoldup />

::: details 查看代码
<<< ./ellipsis-hidefoldup.vue#snippet{vue:line-numbers}
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
      <td>maxLines</td>
      <td>显示的最大行数</td>
      <td>Number | String</td>
      <td>—</td>
      <td>1</td>
    </tr>
    <tr>
      <td>fold</td>
      <td>是否为折叠模式</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>foldHeight</td>
      <td>折叠下的高度，单位px</td>
      <td>Number | String</td>
      <td>—</td>
      <td>100</td>
    </tr>
    <tr>
      <td>hideFoldup</td>
      <td>是否隐藏收起按钮</td>
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
      <td>用于放置需要折叠或展开的文本内容，可以放置任何自定义的内容，例如文本或 HTML 结构。</td>
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
      <td>toggle</td>
      <td>(折叠/展开)切换事件。</td>
	  <td>(value: boolean)</td>
    </tr>
  </tbody>
</table>
