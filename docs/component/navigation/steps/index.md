<script setup>
import stepsBase from "./steps-base.vue"
import stepsSize from "./steps-size.vue"
import stepsIcon from "./steps-icon.vue"
import stepsCenter from "./steps-center.vue"
import stepsCustom from "./steps-custom.vue"
</script>
# Steps 步骤条

显示某系列步骤流程。

## 基础用法

<stepsBase />

::: details 查看代码
<<< ./steps-base.vue{vue:line-numbers}
:::


## 不同尺寸

<stepsSize />

::: details 查看代码
<<< ./steps-size.vue{16-20 vue:line-numbers}
:::


## 定义Icon

<stepsIcon />

::: details 查看代码
<<< ./steps-icon.vue{7,12,17 vue:line-numbers}
:::


## 居中显示

<stepsCenter />

::: details 查看代码
<<< ./steps-center.vue{3 vue:line-numbers}
:::


## 自定义内容

<stepsCustom />


::: details 查看代码
<<< ./steps-custom.vue{4-10 vue:line-numbers}
:::


## Steps Attributes

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
      <td>active</td>
      <td>当前活动的步骤索引（从 1 开始）</td>
      <td>Number</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>center</td>
      <td>步骤描述是否居中</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size</td>
      <td>步骤条的大小</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
  </tbody>
</table>



## Step Attributes

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
      <td>步骤标题</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>步骤图标名称</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>description</td>
      <td>步骤描述</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
  </tbody>
</table>

## Step Slots

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
      <td>icon</td>
      <td>自定义步骤图标，提供了 index（步骤索引）和 status（步骤状态）作为作用域属性</td>
      <td>是</td>
      <td>—</td>
    </tr>
    <tr>
      <td>title</td>
      <td>自定义步骤标题，提供了 index（步骤索引）和 status（步骤状态）作为作用域属性</td>
      <td>是</td>
      <td>—</td>
    </tr>
    <tr>
      <td>description</td>
      <td>自定义步骤描述，提供了 index（步骤索引）和 status（步骤状态）作为作用域属性</td>
      <td>是</td>
      <td>—</td>
    </tr>
  </tbody>
</table>
