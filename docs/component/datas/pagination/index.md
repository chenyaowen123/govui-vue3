<script setup>
import paginationBase from "./pagination-base.vue"
import paginationPagesizes from "./pagination-pagesizes.vue"
import paginationPlain from "./pagination-plain.vue"
import paginationDisabled from "./pagination-disabled.vue"
import paginationBackground from "./pagination-background.vue"
import paginationCustom from "./pagination-custom.vue"
</script>
# Pagination 分页


## 基础用法

使用 ```v-model / modelValue``` 快速绑定当前页码。

<paginationBase />

::: details 查看代码
<<< ./pagination-base.vue{vue:line-numbers}
:::


## 设置分页

可以通过 ```v-model:page-size``` 设置当前分页大小（对应下拉框值）；通过设置 ```page-sizes``` 可设置分页大小选择器内的 ```options```。

<paginationPagesizes />

::: details 查看代码
<<< ./pagination-pagesizes.vue{vue:line-numbers}
:::


## 朴素模式

朴素模式只有简单的分页分页列表、前一页、后一页；

<paginationPlain />

::: details 查看代码
<<< ./pagination-plain.vue{vue:line-numbers}
:::



## 禁用模式

禁用时分页不可选择。

<paginationDisabled />

::: details 查看代码
<<< ./pagination-disabled.vue{vue:line-numbers}
:::



## 背景色

设置背景色风格。

<paginationBackground />

::: details 查看代码
<<< ./pagination-background.vue{vue:line-numbers}
:::



## 自定义

自定义上下页。

<paginationCustom />

::: details 查看代码
<<< ./pagination-custom.vue{vue:line-numbers}
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
      <td>modelValue（v-model）</td>
      <td>当前页码</td>
      <td>Number</td>
      <td>—</td>
      <td>1</td>
    </tr>
    <tr>
      <td>pageSize（v-model:pageSize）</td>
      <td>每页显示条数</td>
      <td>Number</td>
      <td>—</td>
      <td>10</td>
    </tr>
    <tr>
      <td>pageSizes</td>
      <td>每页大小选项数组</td>
      <td>Array</td>
      <td>—</td>
      <td>[10, 20, 30, 40]</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用分页</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>background</td>
      <td>是否显示背景</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>plain</td>
      <td>是否为朴素模式</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>total</td>
      <td>总条数</td>
      <td>Number</td>
      <td>—</td>
      <td>0</td>
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
      <td>update:modelValue</td>
      <td>当前页码改变时触发</td>
      <td>新的页码</td>
    </tr>
    <tr>
      <td>update:pageSize</td>
      <td>每页大小改变时触发</td>
      <td>新的每页大小</td>
    </tr>
    <tr>
      <td>sizeChange</td>
      <td>每页大小改变时触发</td>
      <td>新的每页大小</td>
    </tr>
    <tr>
      <td>currentChange</td>
      <td>当前页码改变时触发</td>
      <td>新的页码</td>
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
      <td>total</td>
      <td>自定义总条数显示</td>
      <td>是</td>
      <td>可以自定义总条数的显示方式，提供了 total 作为作用域插槽属性</td>
    </tr>
    <tr>
      <td>prev</td>
      <td>自定义上一页按钮内容</td>
      <td>否</td>
      <td>可以自定义上一页按钮的内容</td>
    </tr>
    <tr>
      <td>next</td>
      <td>自定义下一页按钮内容</td>
      <td>否</td>
      <td>可以自定义下一页按钮的内容</td>
    </tr>
  </tbody>
</table>
