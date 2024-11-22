<script setup>
import loadingBase from "./loading-base.vue"
import loadingStyle from "./loading-style.vue"
import loadingSlot from "./loading-slot.vue"
</script>

# Loading 标签

区域加载状态。

## 基础用法

你可以包裹任何区域，使用 ```v-model``` 控制 loading 效果的隐藏。

<loadingBase />

::: details 查看代码
<<< ./loading-base.vue{vue:line-numbers}
:::


## 加载样式

通常可以使用 ```loadingText``` 和 ```loadingBackground``` 来定义不同的背景色和文字。

<loadingStyle />

::: details 查看代码
<<< ./loading-style.vue{vue:line-numbers}
:::



## 自定义

<loadingSlot />

::: details 查看代码
<<< ./loading-slot.vue{vue:line-numbers}
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
      <td>modelValue</td>
      <td>控制加载状态的显示与隐藏</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>loadingText</td>
      <td>加载时显示的文本</td>
      <td>String</td>
      <td>—</td>
      <td>"加载中..."</td>
    </tr>
    <tr>
      <td>loadingBackground</td>
      <td>加载时的背景样式</td>
      <td>String</td>
      <td>—</td>
      <td>"rgba(0, 0, 0, 0.5)"</td>
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
      <td>用于放置加载状态以外的内容，例如文本或 HTML 结构。</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>用于自定义加载中的图标和文本</td>
    </tr>
  </tbody>
</table>
