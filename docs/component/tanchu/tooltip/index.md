<script setup>
import tooltipBase from "./tooltip-base.vue"
import tooltipDisabled from "./tooltip-disabled.vue"
import tooltipCustom from "./tooltip-custom.vue"
</script>

# tooltip 文字提示

鼠标 hover 时的提示信息。

## 基础用法

文字有9种不同位置，默认为 ```top```。

<tooltipBase />

::: details 查看代码
<<< ./tooltip-base.vue{vue:line-numbers}
:::




## 关闭提示

设置 ```disabled``` 为 ```true``` 即可关闭提示。

<tooltipDisabled />

::: details 查看代码
<<< ./tooltip-disabled.vue{vue:line-numbers}
:::


## 自定义内容

<tooltipCustom />

::: details 查看代码
<<< ./tooltip-custom.vue{vue:line-numbers}
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
      <td>content</td>
      <td>提示内容</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用提示</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>提示位置</td>
      <td>String</td>
      <td>top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end</td>
      <td>top</td>
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
      <td>toggle</td>
      <td>触发提示显示或隐藏</td>
      <td>true 显示，false 隐藏</td>
    </tr>
    <tr>
      <td>show</td>
      <td>提示显示时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>hide</td>
      <td>提示隐藏时触发</td>
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
      <th>作用域插槽</th>
      <th>内容</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>触发提示的元素</td>
      <td>否</td>
      <td>放置触发提示的元素，如按钮或其他元素。</td>
    </tr>
    <tr>
      <td>content</td>
      <td>自定义提示内容</td>
      <td>是</td>
      <td>可以自定义提示的内容，而不是使用 props.content 的文本。</td>
    </tr>
  </tbody>
</table>
