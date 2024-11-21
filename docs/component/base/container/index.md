<script setup>
import container1 from "./container1.vue"
import container2 from "./container2.vue"
import container3 from "./container3.vue"
import container4 from "./container4.vue"
import container5 from "./container5.vue"
import container6 from "./container6.vue"
import container7 from "./container7.vue"
</script>

# Container 布局容器

用于布局的容器组件，基于flex布局，方便快速搭建平台基本结构。

## 布局一

<container1 />

::: details 查看代码
<<< ./container1.vue#snippet{vue:line-numbers}
:::


## 布局二

<container2 />

::: details 查看代码
<<< ./container2.vue#snippet{vue:line-numbers}
:::



## 布局三

<container3 />

::: details 查看代码
<<< ./container3.vue#snippet{vue:line-numbers}
:::


## 布局四

<container4 />

::: details 查看代码
<<< ./container4.vue#snippet{vue:line-numbers}
:::


## 布局五

<container5 />

::: details 查看代码
<<< ./container5.vue#snippet{vue:line-numbers}
:::


## 布局六

<container6 />

::: details 查看代码
<<< ./container6.vue#snippet{vue:line-numbers}
:::


## 布局七

<container7 />

::: details 查看代码
<<< ./container7.vue#snippet{vue:line-numbers}
:::



## Attributes / Slots

以下几种布局组件提供名称为 ```default``` 的默认插槽，用于自定义内容。

<table>
  <thead>
    <tr>
      <th width="130">组件</th>
	  <th width="100">Attributes</th>
	  <th width="100">默认值</th>
      <th>组件说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>gov-container</td>
	  <td>-</td>
	  <td>-</td>
      <td>布局容器组件，直接子元素必须是其它四个组件中的一个或多个</td>
    </tr>
    <tr>
      <td>gov-header</td>
	  <td>height</td>
	  <td>60px</td>
      <td>布局头部组件。</td>
    </tr>
    <tr>
      <td>gov-aside</td>
	  <td>width</td>
	  <td>200px</td>
      <td>布局侧边组件。</td>
    </tr>
    <tr>
      <td>gov-main</td>
	  <td>-</td>
	  <td>-</td>
      <td>布局主要内容区域组件。</td>
    </tr>
    <tr>
      <td>gov-footer</td>
	  <td>height</td>
	  <td>60px</td>
      <td>布局底部组件。</td>
    </tr>
  </tbody>
</table>
