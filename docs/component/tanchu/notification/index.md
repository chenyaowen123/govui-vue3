<script setup>
import notificationBase from "./notification-base.vue"
import notificationType from "./notification-type.vue"
import notificationCustom from "./notification-custom.vue"
import notificationPosition from "./notification-position.vue"
import notificationCloseall from "./notification-closeall.vue"
import notificationNoclose from "./notification-noclose.vue"

</script>

# Notification 弹窗

常用于消息提示。

## 基础使用

调用一个系统消息。

<notificationBase />

::: details 查看代码
<<< ./notification-base.vue{vue:line-numbers}
:::


## 不同类型

不同类型的系统提示消息。

<notificationType />

::: details 查看代码
<<< ./notification-type.vue{vue:line-numbers}
:::



## 自定义内容

支持`html`。

<notificationCustom />

::: details 查看代码
<<< ./notification-custom.vue{vue:line-numbers}
:::


## 不同位置

四种位置。

<notificationPosition />

::: details 查看代码
<<< ./notification-position.vue{vue:line-numbers}
:::


## 关闭所有

你可以调用 `closeAll` 关闭所有 `notification`。

<notificationCloseall />

::: details 查看代码
<<< ./notification-closeall.vue{vue:line-numbers}
:::


## 禁用自动关闭

默认 `3000ms` 后自动关闭，你可以将 `duration` 设置为 `false` 即可控制 `notification` 不会自动关闭。

<notificationNoclose />

::: details 查看代码
<<< ./notification-noclose.vue{vue:line-numbers}
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
      <td>title</td>
      <td>通知标题</td>
      <td>String</td>
      <td>—</td>
      <td>"提示"</td>
    </tr>
    <tr>
      <td>content</td>
      <td>通知内容</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>duration</td>
      <td>显示时长，设置false的时候不会自动关闭。</td>
      <td>Number | boolean</td>
      <td>—</td>
      <td>3000</td>
    </tr>
    <tr>
      <td>type</td>
      <td>通知类型</td>
      <td>String</td>
      <td>default, primary, success, info, warning, danger</td>
      <td>default</td>
    </tr>
    <tr>
      <td>position</td>
      <td>通知位置</td>
      <td>String</td>
      <td>top-right, top-left, bottom-right, bottom-left</td>
      <td>top-right</td>
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
      <td>打开前回调函数</td>
      <td>Function</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>onOpend</td>
      <td>打开后回调函数</td>
      <td>Function</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>onBeforeClose</td>
      <td>关闭前回调函数</td>
      <td>Function</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>onClosed</td>
      <td>关闭后回调函数</td>
      <td>Function</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>closable</td>
      <td>是否显示关闭按钮</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
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
      <td>关闭所有 <code>notification</code> 弹窗</td>
      <td>—</td>
      <td>无</td>
    </tr>
  </tbody>
</table>
