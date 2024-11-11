<script setup>
import badgeBase from "./examples/badge/badge-base.vue"
import badgeMax from "./examples/badge/badge-max.vue"
import badgeCustom from "./examples/badge/badge-custom.vue"
import badgeDot from "./examples/badge/badge-dot.vue"
</script>

# Badge 标记

局部区域的小标记，例如消息提示，待办等。

## 基础使用

设置不同的 ```type``` 会出现不同的颜色背景。

<badgeBase />


## 超出最大值

当 ```value``` 绑定数值，且设置了 ```max``` ，超出最大值会显示 ```+``` 号。

<badgeMax />


## 显示文本

```value ``` 可传入自定义文本、emoji内容。也可以已设置 ```transparent``` 来设置是否需要背景。

<badgeCustom />


## 显示未小圆点

以原点的形式标记需要关注的内容。

<badgeDot />

## Attributes

<table style="width:100%; display:table;">
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
