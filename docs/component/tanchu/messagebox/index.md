<script setup>
import messageboxBase from "./messagebox-base.vue"
import messageboxConfirm from "./messagebox-confirm.vue"
import messageboxJianxie from "./messagebox-jianxie.vue"
</script>

# messageboxBox 弹窗

基于 ```Dialog``` 组件，通过该组件，可以不用书写组件，快速调用 ```Alert``` 和 ```Confirm```。

如果需要更复杂的逻辑结构，建议使用 ```Dialog``` 组件。


## 基础用法 Alert

`Alert` 一个弹窗。

<messageboxBase />

::: details 查看代码
<<< ./messagebox-base.vue{vue:line-numbers}
:::


## 确认消息 Confirm

`Confirm` 一个弹窗。

<messageboxConfirm />

::: details 查看代码
<<< ./messagebox-confirm.vue{vue:line-numbers}
:::



## 简写方式

如果你的弹出相对简单，你也可以直接传递一个字符串。

<messageboxJianxie />

::: details 查看代码
<<< ./messagebox-jianxie.vue{vue:line-numbers}
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
      <td>对话框标题</td>
      <td>String</td>
      <td>—</td>
      <td>"提示"</td>
    </tr>
    <tr>
      <td>width</td>
      <td>对话框宽度</td>
      <td>String</td>
      <td>—</td>
      <td>"450px"</td>
    </tr>
    <tr>
      <td>content</td>
      <td>对话框内容</td>
      <td>String</td>
      <td>—</td>
      <td>""</td>
    </tr>
    <tr>
      <td>showCancelButton</td>
      <td>是否显示取消按钮</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>showConfirmButton</td>
      <td>是否显示确认按钮</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>cancelButtonText</td>
      <td>取消按钮文本</td>
      <td>String</td>
      <td>—</td>
      <td>"取消"</td>
    </tr>
    <tr>
      <td>confirmButtonText</td>
      <td>确认按钮文本</td>
      <td>String</td>
      <td>—</td>
      <td>"确定"</td>
    </tr>
    <tr>
      <td>cancelCallback</td>
      <td>取消按钮回调函数</td>
      <td>Function</td>
      <td>—</td>
      <td>() => {}</td>
    </tr>
    <tr>
      <td>confirmCallback</td>
      <td>确认按钮回调函数</td>
      <td>Function</td>
      <td>—</td>
      <td>() => {}</td>
    </tr>
    <tr>
      <td>closeCallback</td>
      <td>关闭对话框时的回调函数</td>
      <td>Function</td>
      <td>—</td>
      <td>() => {}</td>
    </tr>
    <tr>
      <td>closedCallback</td>
      <td>对话框关闭后的回调函数</td>
      <td>Function</td>
      <td>—</td>
      <td>() => {}</td>
    </tr>
  </tbody>
</table>


## Methods

<table>
  <thead>
    <tr>
      <th>方法名</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>alert</td>
      <td>弹出一个 alert 弹窗，返回promise。</td>
    </tr>
	<tr>
      <td>confirm</td>
      <td>弹出一个 confirm 弹窗，返回promise。</td>
    </tr>
  </tbody>
</table>
