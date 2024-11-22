<script setup>
import GovMessageBase from "./message-base.vue"
import GovMessageOption from "./message-option.vue"
import GovMessageType from "./message-type.vue"
import GovMessageCloseall from "./message-closeall.vue"
</script>

# Message 弹窗

常用于消息提示。

## 基础使用

<GovMessageBase />

::: details 查看代码
<<< ./message-base.vue{11 vue:line-numbers}
:::


## 不同类型

弹出不同风格的 `message`。

<GovMessageType />

::: details 查看代码
<<< ./message-type.vue{25 vue:line-numbers}
:::



## 更多控制

支持 `html`，时长，是否有关闭按钮等。

<GovMessageOption />

::: details 查看代码
<<< ./message-option.vue{11-23 vue:line-numbers}
:::



## 关闭所有

在任意实例上关闭所有弹窗。

<GovMessageCloseall />

::: details 查看代码
<<< ./message-closeall.vue{16 vue:line-numbers}
:::


## Options

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
      <td>message</td>
      <td>消息内容</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>duration</td>
      <td>显示时长</td>
      <td>Number</td>
      <td>—</td>
      <td>3000</td>
    </tr>
    <tr>
      <td>type</td>
      <td>消息类型</td>
      <td>String</td>
      <td>default, primary, success, info, warning, danger</td>
      <td>default</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>图标名称</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>customClass</td>
      <td>自定义类名</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>onBeforeOpen</td>
      <td>打开前的回调函数</td>
      <td>Function</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>onOpend</td>
      <td>打开后的回调函数</td>
      <td>Function</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>onBeforeClose</td>
      <td>关闭前的回调函数</td>
      <td>Function</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>onClosed</td>
      <td>关闭后的回调函数</td>
      <td>Function</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>closable</td>
      <td>是否显示关闭按钮</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

## Methods

<table>
  <thead>
    <tr>
      <th>方法名</th>
      <th>说明</th>
      <th>参数</th>
      <th>返回值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>closeAll</td>
      <td>关闭所有弹窗</td>
      <td>—</td>
      <td>无</td>
    </tr>
  </tbody>
</table>
