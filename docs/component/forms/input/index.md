<script setup>
import inputBase from "./input-base.vue"
import inputSize from "./input-size.vue"
import inputDisabled from "./input-disabled.vue"
import inputFix from "./input-fix.vue"
import inputAddon from "./input-addon.vue"
import inputClear from "./input-clear.vue"
import inputPwd from "./input-pwd.vue"
import inputCount from "./input-count.vue"
</script>

# Input 输入

用于表单里 input 输入项。

## 基本用法

使用 ```v-model``` 绑定输入值。

<inputBase />

::: details 查看代码
<<< ./input-base.vue{vue:line-numbers}
:::


## 尺寸大小

设置不同尺寸。

<inputSize />

::: details 查看代码
<<< ./input-size.vue{vue:line-numbers}
:::


## 禁用状态

设置 ```disabled``` 禁用输入框。

<inputDisabled />

::: details 查看代码
<<< ./input-disabled.vue{vue:line-numbers}
:::



## 前缀后缀

设置 ```prefix``` 和 ```suffix``` 来显示前后缀。

<inputFix />

::: details 查看代码
<<< ./input-fix.vue{vue:line-numbers}
:::



## 前置后置

前置和后置插槽与 ```prefix``` 和 ```suffix``` 位置不同。

<inputAddon />

::: details 查看代码
<<< ./input-addon.vue{vue:line-numbers}
:::


## 清空按钮

当有内容时，鼠标经过现实清空按钮。

<inputClear />

::: details 查看代码
<<< ./input-clear.vue{vue:line-numbers}
:::


## 密码框

密码框模式，可以点击切换密码是否可见。

<inputPwd />

::: details 查看代码
<<< ./input-pwd.vue{vue:line-numbers}
:::



## 字数提示

设置```maxlength``` 来设置最大输入长度；设置 ```count``` 会有统计效果。

<inputCount />

::: details 查看代码
<<< ./input-count.vue{vue:line-numbers}
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
      <td>width</td>
      <td>输入框宽度</td>
      <td>Number</td>
      <td>—</td>
      <td>null</td>
    </tr>
    <tr>
      <td>size</td>
      <td>输入框尺寸</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>addonBefore</td>
      <td>前置标签内容</td>
      <td>String/Number</td>
      <td>—</td>
     <td>— </td>
    </tr>
    <tr>
      <td>addonAfter</td>
      <td>后置标签内容</td>
      <td>String/Number</td>
      <td>—</td>
     <td>— </td>
    </tr>
    <tr>
      <td>prefix</td>
      <td>前缀内容</td>
      <td>String/Number</td>
      <td>—</td>
     <td>— </td>
    </tr>
    <tr>
      <td>suffix</td>
      <td>后缀内容</td>
      <td>String/Number</td>
      <td>—</td>
     <td>— </td>
    </tr>
    <tr>
      <td>clearable</td>
      <td>是否可清空</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>password</td>
      <td>是否为密码输入</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>readonly</td>
      <td>是否只读</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>占位符</td>
      <td>String</td>
      <td>—</td>
      <td>请输入</td>
    </tr>
    <tr>
      <td>maxlength</td>
      <td>最大长度</td>
      <td>Number</td>
      <td>—</td>
     <td>— </td>
    </tr>
    <tr>
      <td>count</td>
      <td>是否显示字数统计</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>modelValue</td>
      <td>绑定值</td>
      <td>String/Number</td>
      <td>—</td>
     <td>— </td>
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
      <td>clear</td>
      <td>清空按钮点击时触发</td>
      <td>—</td>
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
      <td>事件对象</td>
    </tr>
    <tr>
      <td>blur</td>
      <td>失去焦点时触发</td>
      <td>事件对象</td>
    </tr>
  </tbody>
</table>

## Slots

<table>
  <thead>
    <tr>
      <th>插槽名</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>addonBefore</td>
      <td>前置标签内容</td>
    </tr>
    <tr>
      <td>addonAfter</td>
      <td>后置标签内容</td>
    </tr>
    <tr>
      <td>prefix</td>
      <td>输入框前缀内容</td>
    </tr>
    <tr>
      <td>suffix</td>
      <td>输入框后缀内容</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>自定义图标，可以放置自定义的图标。</td>
    </tr>
  </tbody>
</table>
