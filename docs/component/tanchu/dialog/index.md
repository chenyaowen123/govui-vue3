<script setup>
import dialogBase from "./dialog-base.vue"
import dialogModal from "./dialog-modal.vue"
import dialogSlot from "./dialog-slot.vue"
import dialogWidth from "./dialog-width.vue"
import dialogFill from "./dialog-fill.vue"
</script>

# Dialog 对话框

弹出一个对话框。

## 基本用法

你可以在任意位置弹出一个 Dialog对话框。

<dialogBase/>

::: details 查看代码
<<< ./dialog-base.vue{1,3-4 vue:line-numbers}
:::


## 点击遮罩层关闭

默认点击遮罩层关闭，你可以设置 `closeOnClickModal` 为 `false` 关闭该功能。

<dialogModal />

::: details 查看代码
<<< ./dialog-modal.vue{8 vue:line-numbers}
:::

## 自定义标题

自定义标题内容。

<dialogSlot />

::: details 查看代码
<<< ./dialog-slot.vue{ vue:line-numbers}
:::


## 设置宽度

定义不同宽度。

<dialogWidth/>

::: details 查看代码
<<< ./dialog-width.vue{ vue:line-numbers}
:::


## 全屏模式

全屏模式可以覆盖整个视觉区域。

<dialogFill />

::: details 查看代码
<<< ./dialog-fill.vue{ vue:line-numbers}
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
      <td>控制对话框的显示与隐藏</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>title</td>
      <td>对话框标题</td>
      <td>String</td>
      <td>—</td>
      <td>"提示"</td>
    </tr>
    <tr>
      <td>closeOnClickModal</td>
      <td>点击遮罩层是否关闭对话框</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>showClose</td>
      <td>是否显示关闭按钮</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>width</td>
      <td>对话框宽度</td>
      <td>String</td>
      <td>—</td>
      <td>"800px"</td>
    </tr>
    <tr>
      <td>top</td>
      <td>对话框距离顶部的距离</td>
      <td>String</td>
      <td>—</td>
      <td>"15vh"</td>
    </tr>
    <tr>
      <td>fullscreen</td>
      <td>是否全屏显示</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>customClass</td>
      <td>自定义类名</td>
      <td>String</td>
      <td>—</td>
      <td>""</td>
    </tr>
    <tr>
      <td>beforeClose</td>
      <td>关闭前的回调函数</td>
      <td>Function</td>
      <td>—</td>
      <td>—</td>
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
      <td>change</td>
      <td>对话框显示状态改变时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>open</td>
      <td>对话框打开时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>opened</td>
      <td>对话框打开动画结束后触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>close</td>
      <td>对话框关闭时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>closed</td>
      <td>对话框关闭动画结束后触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>update:modelValue</td>
      <td>更新对话框显示状态</td>
      <td>新的显示状态</td>
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
      <td>title</td>
      <td>自定义对话框标题内容</td>
      <td>否</td>
      <td>可以放置自定义的标题内容</td>
    </tr>
    <tr>
      <td>default</td>
      <td>对话框主体内容</td>
      <td>否</td>
      <td>放置对话框的主要内容</td>
    </tr>
    <tr>
      <td>footer</td>
      <td>对话框底部内容</td>
      <td>否</td>
      <td>放置对话框底部的按钮或其他内容</td>
    </tr>
  </tbody>
</table>
