<script setup>
import pageContainerBase from "./page-container-base.vue"
import pageContainerAll from "./page-container-all.vue"
</script>

# PageContainer 页面容器

页面容器，可以快速创建一个统一风格的页面容器。

## 基础使用

快速创建一个页面容器。

<pageContainerBase />

::: details 查看代码
<<< ./page-container-base.vue{vue:line-numbers}
:::


## 完整例子

配合面包屑和操作按钮一起使用。

+ 可以在```before```、```actions```、```title``` 插槽分别自定义内容展示。
+ 可以设置  ```border```、```round``` 是否需要边框和圆角。

<pageContainerAll />

::: details 查看代码
<<< ./page-container-all.vue{vue:line-numbers}
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
      <td>页面容器标题</td>
      <td>String</td>
      <td>—</td>
      <td>""</td>
    </tr>
    <tr>
      <td>titleUnderline</td>
      <td>标题是否显示下划线</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>border</td>
      <td>是否显示边框</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>round</td>
      <td>边框是否圆角</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
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
      <td>title</td>
      <td>标题内容，如果提供了 `title` 属性，则此插槽将被忽略</td>
      <td>否</td>
      <td>—</td>
    </tr>
    <tr>
      <td>actions</td>
      <td>标题右侧的操作区域</td>
      <td>否</td>
      <td>—</td>
    </tr>
    <tr>
      <td>before</td>
      <td>内容区域之前的插槽</td>
      <td>否</td>
      <td>—</td>
    </tr>
    <tr>
      <td>default</td>
      <td>主要内容区域</td>
      <td>否</td>
      <td>—</td>
    </tr>
  </tbody>
</table>
