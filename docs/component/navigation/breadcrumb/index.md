<script setup>
import breadcrumbBase from "./breadcrumb-base.vue"
import breadcrumbSize from "./breadcrumb-size.vue"
import breadcrumbIcon from "./breadcrumb-icon.vue"
</script>

# Breadcrumb 面包屑

页面面包屑导航。

## 基础用法

<breadcrumbBase />

::: details 查看代码
<<< ./breadcrumb-base.vue{vue:line-numbers}
:::



## 不同大小

<breadcrumbSize />

::: details 查看代码
<<< ./breadcrumb-size.vue{vue:line-numbers}
:::


## 修改图标

<breadcrumbIcon />

::: details 查看代码
<<< ./breadcrumb-icon.vue{vue:line-numbers}
:::


## Breadcrumb Attributes

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
      <td>icon</td>
      <td>面包屑图标</td>
      <td>String</td>
      <td>—</td>
      <td>arrow-right</td>
    </tr>
    <tr>
      <td>size</td>
      <td>面包屑大小</td>
      <td>String</td>
      <td>large，default，small</td>
      <td>default</td>
    </tr>
  </tbody>
</table>

## Breadcrumb Slots

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
      <td>存放 <code>BreadcrumbItem</code> 组件。</td>
    </tr>
  </tbody>
</table>
