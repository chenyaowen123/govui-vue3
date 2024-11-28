<script setup>
import textareaBase from "./textarea-base.vue"
import textareaRows from "./textarea-rows.vue"
import textareaMax from "./textarea-max.vue"
import textareaClear from "./textarea-clear.vue"
import textareaResize from "./textarea-resize.vue"
</script>

# Textarea 文本域

增强的文本域。

## 基础使用

<textareaBase />

::: details 查看代码
<<< ./textarea-base.vue{vue:line-numbers}
:::


## 设置行数

默认 ```rows``` 为3行。

<textareaRows />

::: details 查看代码
<<< ./textarea-rows.vue{vue:line-numbers}
:::



## 最大长度

可设置最大输入长度，并带有统计提示。

<textareaMax />

::: details 查看代码
<<< ./textarea-max.vue{vue:line-numbers}
:::


## 清空按钮

```clearable``` 是否显示清空按钮。

<textareaClear />

::: details 查看代码
<<< ./textarea-clear.vue{vue:line-numbers}
:::


## 改变大小

默认 ```resize``` 为 ```true```，当关闭时不可改变大小。

<textareaResize />

::: details 查看代码
<<< ./textarea-resize.vue{vue:line-numbers}
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
      <td>绑定的值</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>rows</td>
      <td>textarea 行数</td>
      <td>Number/String</td>
      <td>—</td>
      <td>3</td>
    </tr>
    <tr>
      <td>maxlength</td>
      <td>最大长度</td>
      <td>Number/String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>clearable</td>
      <td>是否可清空</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>占位符</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>resize</td>
      <td>是否可调整大小</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
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
      <td>新的值</td>
    </tr>
    <tr>
      <td>input</td>
      <td>输入时触发</td>
      <td>输入的值</td>
    </tr>
    <tr>
      <td>change</td>
      <td>值改变时触发</td>
      <td>新的值</td>
    </tr>
    <tr>
      <td>focus</td>
      <td>获得焦点时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>blur</td>
      <td>失去焦点时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>clear</td>
      <td>清空按钮点击时触发</td>
      <td>—</td>
    </tr>
  </tbody>
</table>

