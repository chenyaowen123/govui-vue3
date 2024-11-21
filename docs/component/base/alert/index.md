<script setup>
import alertBase from "./alert-base.vue"
import alertPlain from "./alert-plain.vue"
import alertDescription from "./alert-description.vue"
import alertIcon from "./alert-icon.vue"
import alertSlot from "./alert-slot.vue"
</script>

# Alert 警告

用于页面中展示重要的提示信息。


## 基本用法

默认为朴素风格。

<alertBase />

::: details 查看代码
<<< ./alert-base.vue{vue:line-numbers}
:::


## 朴素风格

<alertPlain />

::: details 查看代码
<<< ./alert-plain.vue{vue:line-numbers}
:::


## 辅助性文字介绍

<alertDescription />

::: details 查看代码
<<< ./alert-description.vue{vue:line-numbers}
:::


## 带有Icon

<alertIcon />

::: details 查看代码
<<< ./alert-icon.vue{vue:line-numbers}
:::


## 自定义内容

你可以在默认插槽内自定义html。

<alertSlot />

::: details 查看代码
<<< ./alert-slot.vue{vue:line-numbers}
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
      <td>title</td>
      <td>警告框的标题</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>description</td>
      <td>警告框的详细描述</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>type</td>
      <td>警告框的类型</td>
      <td>String</td>
      <td>info, success, warning, danger</td>
      <td>info</td>
    </tr>
    <tr>
      <td>plain</td>
      <td>是否为朴素风格</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>closable</td>
      <td>是否可关闭</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>closeText</td>
      <td>关闭按钮的文本</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>showIcon</td>
      <td>是否显示图标</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>center</td>
      <td>内容是否居中</td>
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
      <td>title</td>
      <td>用于自定义警告框的标题内容。</td>
    </tr>
    <tr>
      <td>default</td>
      <td>当没有提供 <code>description</code> 属性时，可以放置默认的警告内容。</td>
    </tr>
  </tbody>
</table>
