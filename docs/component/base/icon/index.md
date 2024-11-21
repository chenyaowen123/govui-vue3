<script setup>
import iconBase from "./icon-base.vue"
import iconList from "./icon-list.vue"
</script>

# Icon 字体图标

常用的字体图标集合。


## 使用方法

只需要对```<gov-icon name="iconName"/>``` 组件指定相应图标的```name```属性即可，例如：

<iconBase/>

::: details 查看代码
<<< ./icon-base.vue#snippet{vue:line-numbers}
:::


## 图标集合

<iconList/>

::: details 查看代码
<<< ./icon-list.vue#snippet{vue:line-numbers}
:::



## Attributes

<table>
  <thead>
    <tr>
      <th>属性名</th>
      <th>说明</th>
      <th>类型</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>icon 名称标识</td>
      <td>String</td>
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
