<script setup>
import tabsBase from "./tabs-base.vue"
import tabsCustom from "./tabs-custom.vue"
</script>
# Tabs 标签页

选项卡切换组件。

## 基础使用

使用 ```v-model``` 绑定当前显示的 ```tab```。

<tabsBase />

::: details 查看代码
<<< ./tabs-base.vue{vue:line-numbers}
:::


## 自定义导航

可以在 ```name='nva'``` 的插槽里定义导航样式。

<tabsCustom />

::: details 查看代码
<<< ./tabs-custom.vue{4-6 vue:line-numbers}
:::

## Tabs Attributes

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
      <td>当前激活的标签名称</td>
      <td>String, Number</td>
      <td>—</td>
      <td>—</td>
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
      <td>是否显示圆角边框</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
  </tbody>
</table>

## Tabs Events

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
      <td>当前激活的标签变化时触发</td>
      <td>当前激活的标签名称</td>
    </tr>
    <tr>
      <td>switch</td>
      <td>切换标签时触发</td>
      <td>当前激活的标签名称</td>
    </tr>
  </tbody>
</table>


## Tabs Slots

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
      <td>nav</td>
      <td>自定义导航项内容，提供了 tab（当前标签项）, index（索引）, isActive（是否激活）作为作用域属性</td>
      <td>是</td>
      <td>—</td>
    </tr>
    <tr>
      <td>default</td>
      <td>标签内容区域，用于插入各个标签页的内容</td>
      <td>否</td>
      <td>—</td>
    </tr>
  </tbody>
</table>

## TabsPane Attributes

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
      <td>name</td>
      <td>标签页的唯一标识符</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>label</td>
      <td>标签页的显示名称</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用该标签页</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
  </tbody>
</table>


## TabsPane Slots

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
      <td>标签页的内容区域</td>
      <td>否</td>
      <td>—</td>
    </tr>
  </tbody>
</table>
