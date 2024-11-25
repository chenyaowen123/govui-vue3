<script setup>
import badgeBase from "./badge-base.vue"
import badgeMax from "./badge-max.vue"
import badgeCustom from "./badge-custom.vue"
import badgeDot from "./badge-dot.vue"
</script>

# Badge 标记

局部区域的小标记，例如消息提示，待办等。

## 基础使用

设置不同的 ```type``` 会出现不同的颜色背景。

<badgeBase />

::: details 查看代码
<<< ./badge-base.vue{vue:line-numbers}
:::


## 超出最大值

当 ```value``` 绑定数值，且设置了 ```max``` ，超出最大值会显示 ```+``` 号。

<badgeMax />

::: details 查看代码
<<< ./badge-max.vue{vue:line-numbers}
:::


## 显示文本

```value ``` 可传入自定义文本、emoji内容。也可以已设置 ```transparent``` 来设置是否需要背景。

<badgeCustom />

::: details 查看代码
<<< ./badge-custom.vue{vue:line-numbers}
:::


## 显示未小圆点

以原点的形式标记需要关注的内容。

<badgeDot />

::: details 查看代码
<<< ./badge-dot.vue{vue:line-numbers}
:::


## Attributes

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th width="140">类型</th>
      <th>默认值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>value</td>
      <td>String | Number</td>
      <td>-</td>
      <td>Badge显示的值。</td>
    </tr>
    <tr>
      <td>max</td>
      <td>Number</td>
      <td>-</td>
      <td>值的最大显示限制，超过这个值会显示为'max+'。</td>
    </tr>
    <tr>
      <td>isDot</td>
      <td>Boolean</td>
      <td>false</td>
      <td>是否显示为小圆点。</td>
    </tr>
    <tr>
      <td>hidden</td>
      <td>Boolean</td>
      <td>false</td>
      <td>是否隐藏Badge。</td>
    </tr>
    <tr>
      <td>transparent</td>
      <td>Boolean</td>
      <td>false</td>
      <td>Badge是否透明，不适用于开启小圆点时。</td>
    </tr>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>"primary"</td>
      <td>Badge的类型，可选值有'default', 'primary', 'success', 'info', 'warning', 'danger'。</td>
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
      <td>默认插槽，被标记包裹的结构。</td>
    </tr>
  </tbody>
</table>
