<script setup>
import drawerBase from "./drawer-base.vue"
import drawerModal from "./drawer-modal.vue"
</script>

# Drawer 抽屉

相较于 Dialog 组件拥有更大操作空间，常用于系统操作区。

## 基础使用

设置 ```at``` 可控制弹出位置。

<drawerBase />

::: details 查看代码
<<< ./drawer-base.vue{14 vue:line-numbers}
:::

## 遮罩层

设置 ```modal``` 可控制是否有遮罩层； 设置 ```drawerModal``` 可控制点击遮罩层是否触发关闭。

<drawerModal />

::: details 查看代码
<<< ./drawer-modal.vue{12-18 vue:line-numbers}
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
      <td>控制抽屉的显示与隐藏</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>hasClose</td>
      <td>是否显示关闭按钮</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>modal</td>
      <td>是否显示遮罩层</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>modalClosable</td>
      <td>点击遮罩层是否关闭</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>customClass</td>
      <td>自定义class</td>
      <td>String</td>
      <td>—</td>
      <td>""</td>
    </tr>
    <tr>
      <td>at</td>
      <td>抽屉的方向</td>
      <td>String</td>
      <td>left, right, top, bottom</td>
      <td>right</td>
    </tr>
    <tr>
      <td>size</td>
      <td>抽屉的大小</td>
      <td>Number/String</td>
      <td>—</td>
      <td>"30%"</td>
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
      <td>更新modelValue值</td>
      <td>新的状态</td>
    </tr>
    <tr>
      <td>open</td>
      <td>抽屉打开时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>opened</td>
      <td>抽屉打开动画结束后触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>close</td>
      <td>抽屉关闭时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>closed</td>
      <td>抽屉关闭动画结束后触发</td>
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
      <td>抽屉内容</td>
      <td>否</td>
      <td>可以放置任何自定义的内容，如文本、图标或其他 HTML 结构。</td>
    </tr>
  </tbody>
</table>
