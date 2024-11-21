<script setup>
import buttonBase from "./button-base.vue"
import buttonSize from "./button-size.vue"
import buttonDisabled from "./button-disabled.vue"
import buttonLoading from "./button-loading.vue"
import buttonText from "./button-text.vue"
import buttonGroup from "./button-group.vue"
</script>

# Button 按钮
常用的操作按钮。

## 基础用法

<buttonBase />

::: details 查看代码
<<< ./button-base.vue#snippet{vue:line-numbers}
:::


## 不同尺寸

<buttonSize />

::: details 查看代码
<<< ./button-size.vue#snippet{vue:line-numbers}
:::


## 禁用状态

<buttonDisabled />

::: details 查看代码
<<< ./button-disabled.vue#snippet{vue:line-numbers}
:::




## 加载中

操作完毕以后，可以在按钮上显示加载状态。

<buttonLoading />

::: details 查看代码
<<< ./button-loading.vue#snippet{vue:line-numbers}
:::


## 文字按钮

设置 ```type='text'``` 时显示文字按钮样式。

<buttonText />

::: details 查看代码
<<< ./button-text.vue#snippet{vue:line-numbers}
:::


## 按钮组

可设置按钮组来组合按钮。

<buttonGroup />

::: details 查看代码
<<< ./button-group.vue#snippet{vue:line-numbers}
:::



## Attributes

<table>
  <thead>
    <tr>
      <th width="110">属性</th>
      <th width="120">说明</th>
      <th width="90">类型</th>
      <th>可选值</th>
      <th width="80">默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>size</td>
      <td>尺寸</td>
      <td>string</td>
      <td>large / default / small</td>
      <td>—</td>
    </tr>
    <tr>
      <td>type</td>
      <td>类型</td>
      <td>string</td>
      <td>primary / success / warning / danger / info / text</td>
      <td>—</td>
    </tr>
	 <tr>
      <td>label</td>
      <td>按钮文字</td>
      <td>string</td>
      <td>-</td>
      <td>—</td>
    </tr>
    <tr>
      <td>plain</td>
      <td>是否朴素按钮</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>round</td>
      <td>是否圆角按钮</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>circle</td>
      <td>是否圆形按钮</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>是否加载中状态</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用状态</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>图标名</td>
      <td>string</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>autofocus</td>
      <td>是否默认聚焦</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>native-type</td>
      <td>原生 type 属性</td>
      <td>string</td>
      <td>button / submit / reset</td>
      <td>—</td>
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
      <td>用于放置按钮的label文本，可以放置任何自定义的内容，例如文本、图标或其他 HTML 结构。</td>
    </tr>
  </tbody>
</table>
