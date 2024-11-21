<script setup>
import rateBase from "./rate-base.vue"
import rateMax from "./rate-max.vue"
import rateDisabled from "./rate-disabled.vue"
import rateCustom from "./rate-custom.vue"
</script>

# Rate 评分

设置评分。

## 基础用法

<rateBase />

::: details 查看代码
<<< ./rate-base.vue#snippet{vue:line-numbers}
:::



## 设置长度

默认显示 5 个图标，可以设置 ```max``` 来指定长度。

<rateMax />

::: details 查看代码
<<< ./rate-max.vue#snippet{vue:line-numbers}
:::



## 禁用状态

设置 ```disabled``` 禁用时其实是“只读模式”。

<rateDisabled />

::: details 查看代码
<<< ./rate-disabled.vue#snippet{vue:line-numbers}
:::


## 自定义图标

根据插槽自定义图标。

<rateCustom />

::: details 查看代码
<<< ./rate-custom.vue#snippet{vue:line-numbers}
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
      <td>绑定的值，表示当前的评分</td>
      <td>Number</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>max</td>
      <td>最大评分数</td>
      <td>Number</td>
      <td>—</td>
      <td>5</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用评分</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>iconColor</td>
      <td>评分图标的颜色</td>
      <td>String</td>
      <td>—</td>
      <td>#f5a623</td>
    </tr>
    <tr>
      <td>triggerForm</td>
      <td>是否触发表单验证</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
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
      <td>绑定值更新时触发</td>
      <td>新的评分值</td>
    </tr>
    <tr>
      <td>change</td>
      <td>评分改变时触发</td>
      <td>新的评分值</td>
    </tr>
    <tr>
      <td>focus</td>
      <td>组件获得焦点时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>blur</td>
      <td>组件失去焦点时触发</td>
      <td>—</td>
    </tr>
  </tbody>
</table>

## Slots

<table>
  <thead>
    <tr>
      <th width="80">插槽名</th>
      <th width="150">说明</th>
      <th width="120">作用域插槽</th>
      <th>内容</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>icon</td>
      <td>自定义评分图标</td>
      <td>是</td>
      <td>可以自定义评分图标，提供了两个作用域属性：index（当前评分的索引），isActive（当前评分是否被激活）</td>
    </tr>
  </tbody>
</table>
