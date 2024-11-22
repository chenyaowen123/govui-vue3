<script setup>
import linkBase from "./link-base.vue"
import linkDisabled from "./link-disabled.vue"
import linkUnderline from "./link-underline.vue"
import linkIcon from "./link-icon.vue"
</script>

# Link 文字链接

规范的超链接

## 基础用法

<linkBase />

::: details 查看代码
<<< ./link-base.vue{vue:line-numbers}
:::

## 禁用状态

文字链接不可用状态。

<linkDisabled />

::: details 查看代码
<<< ./link-disabled.vue{vue:line-numbers}
:::


## 下划线

文字链接下划线。

<linkUnderline />

::: details 查看代码
<<< ./link-underline.vue{vue:line-numbers}
:::


## 带图标

带图标的文字链接可增强辨识度。

<linkIcon />

::: details 查看代码
<<< ./link-icon.vue{vue:line-numbers}
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
      <td>链接类型</td>
      <td>String</td>
      <td>default, primary, success, info, warning, danger</td>
      <td>default</td>
    </tr>
    <tr>
      <td>underline</td>
      <td>是否显示下划线</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用链接</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>href</td>
      <td>链接地址</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>链接前的图标名称</td>
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
      <th>插槽名</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>用于放置链接的内容</td>
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
      <td>click</td>
      <td>点击事件。</td>
    </tr>
  </tbody>
</table>
