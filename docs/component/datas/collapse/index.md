<script setup>
import collapseBase from "./collapse-base.vue"
import collapseAccordion from "./collapse-accordion.vue"
import collapseDisabled from "./collapse-disabled.vue"
import collapseDisabledAll from "./collapse-disabled-all.vue"
</script>
# Collapse 折叠面板

常用于收纳一组内容。


## 基础用法

默认面板各自独立，利用 ```defaultOpend``` 设置默认是否打开。

<collapseBase />

::: details 查看代码
<<< ./collapse-base.vue{vue:line-numbers}
:::



## 手风琴

```v-model``` 对应面板的 ```name```，当设置 ```v-model``` 时，会自动开启手风琴效果。

<collapseAccordion />

::: details 查看代码
<<< ./collapse-accordion.vue{vue:line-numbers}
:::


## 禁用面板

设置禁用某个面板。

<collapseDisabled />

::: details 查看代码
<<< ./collapse-disabled.vue{vue:line-numbers}
:::



设置禁用全部。

<collapseDisabledAll />

::: details 查看代码
<<< ./collapse-disabled-all.vue{vue:line-numbers}
:::


## Collapse Attributes

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
      <td>绑定的值，控制展开的面板，对应 collapseitem 的 name；当设置 <code>v-model</code> 时自动开启手风琴。</td>
      <td>String/Number</td>
      <td>—</td>
      <td>null</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用整个折叠面板</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

## Collapse Events

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
      <td>当面板展开或收起时触发</td>
      <td>展开的面板值</td>
    </tr>
    <tr>
      <td>update:modelValue</td>
      <td>同步绑定值更新事件</td>
      <td>展开的面板值</td>
    </tr>
  </tbody>
</table>

## Collapse Slots

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
      <td>默认插槽，放置GovCollapseItem组件</td>
    </tr>
  </tbody>
</table>


## CollapseItem Attributes

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
      <td>折叠项标题</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>name</td>
      <td>折叠项标识，用于控制展开状态</td>
      <td>String/Number</td>
      <td>—</td>
      <td>null</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用折叠项</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>defaultOpend</td>
      <td>默认是否展开</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

## CollapseItem Events

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
      <td>折叠项展开或收起时触发</td>
      <td>当前展开状态，true 为展开，false 为收起</td>
    </tr>
  </tbody>
</table>

## CollapseItem Slots

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
      <td>自定义折叠项标题内容</td>
      <td>否</td>
      <td>可以放置自定义的标题内容，如文本或图标</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>自定义折叠项图标</td>
      <td>是</td>
      <td>可以放置自定义的图标，提供了 opend 属性表示当前是否展开</td>
    </tr>
    <tr>
      <td>default</td>
      <td>折叠项内容</td>
      <td>否</td>
      <td>放置折叠项的主要内容</td>
    </tr>
  </tbody>
</table>
