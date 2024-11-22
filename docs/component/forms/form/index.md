<script setup>
import formBase from "./form-base.vue"
import formLabel from "./form-label.vue"
import formRow from "./form-row.vue"
import formValidate from "./form-validate.vue"
import formAddValidate from "./form-add-validate.vue"
import formAll from "./formAll/index.vue"
</script>

# Form 表单

用于组织表单项。

## 基础用法

可以控制 ```labelWidth``` 来设置 ```Label``` 宽度。

<formBase />

::: details 查看代码
<<< ./form-base.vue{vue:line-numbers}
:::



## 对齐方式

<formLabel />

::: details 查看代码
<<< ./form-label.vue{vue:line-numbers}
:::


## 响应式布局

```Form``` 和 ```FormItem``` 基于 ```Row``` 和 ```cal``` 组件，这在布局搜索项时非常有用，你可以在不同尺寸屏幕下控制表现形式，更多设置请参考[Grid 栅格化](/component/grid/)。

<formRow/>

::: details 查看代码
<<< ./form-row.vue{vue:line-numbers}
:::



## 表单校验

在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。

更多高级用法可参考 [async-validator](https://github.com/yiminghe/async-validator)。

<formValidate />

::: details 查看代码
<<< ./form-validate.vue{vue:line-numbers}
:::


## 动态表单项

除了在 Form 组件上一次性传递所有的验证规则外，还可以在单个的表单域上传递属性的验证规则。

<formAddValidate />

::: details 查看代码

注意：第 `11` 行，`prop` 属性允许引用表单数据中的深层值，只需按照对象路径使用点`.`分隔各个层级，例如你可以使用 `domains.0.value` 来对应 `formData.domains[0].value` 的值。

<<< ./form-add-validate.vue{11 vue:line-numbers}
:::




## 完整表单

该表单包含了所有预定表单项、表单验证、尺寸、布局、是否可用等控制。

<formAll />

::: details 查看代码
::: code-group
<<< ./formAll/index.vue{vue:line-numbers}
<<< ./formAll/rules.js{js:line-numbers}
<<< ./formAll/axiosUpload.js{js:line-numbers}
<<< ./formAll/simulateUpload.js{js:line-numbers}
<<< ./formAll/fruits.js{js:line-numbers}
<<< ./formAll/locationTree.js{js:line-numbers}
:::


## Form Attributes

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
      <td>model</td>
      <td>表单的数据对象</td>
      <td>Object</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>rules</td>
      <td>表单验证规则</td>
      <td>Object</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>size</td>
      <td>表单的尺寸</td>
      <td>String</td>
      <td>large, default, small</td>
      <td>default</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用整个表单</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

## Form Methods

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
      <td>validate</td>
      <td>触发表单验证</td>
      <td>(callback): Function(validateState,invalidFields)</td>
      <td>无</td>
    </tr>
    <tr>
      <td>validateFields</td>
      <td>触发表单某个字段的验证</td>
      <td>(fields, callback): Array[String], Function</td>
      <td>无</td>
    </tr>
    <tr>
      <td>resetFields</td>
      <td>重置表单字段的值</td>
      <td>—</td>
      <td>无</td>
    </tr>
    <tr>
      <td>clearValidate</td>
      <td>清除表单验证信息</td>
      <td>—</td>
      <td>无</td>
    </tr>
  </tbody>
</table>

## Form Slots

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
      <td>表单内容，用于放置表单控件</td>
      <td>否</td>
      <td>—</td>
    </tr>
  </tbody>
</table>


## FormItem Attributes

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
      <td>prop</td>
      <td>表单域 model 字段</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>label</td>
      <td>标签文本</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>rules</td>
      <td>表单验证规则</td>
      <td>Object</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>labelPosition</td>
      <td>标签位置</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>labelWidth</td>
      <td>标签宽度</td>
      <td>String/Number</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>size</td>
      <td>尺寸</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>span</td>
      <td>栅格占位格数</td>
      <td>Number</td>
      <td>0-24</td>
      <td>24</td>
    </tr>
  </tbody>
</table>


## FormItem Methods

<table>
  <thead>
    <tr>
      <th>方法名</th>
      <th>说明</th>
      <th>回调参数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>validate</td>
      <td>触发表单验证</td>
      <td>(callback): Function(validateState,invalidFields)</td>
    </tr>
    <tr>
      <td>clearValidate</td>
      <td>清除表单验证</td>
      <td>—</td>
    </tr>
    <tr>
      <td>resetField</td>
      <td>重置表单域的值</td>
      <td>—</td>
    </tr>
  </tbody>
</table>

## FormItem Slots

<table>
  <thead>
    <tr>
      <th>插槽名</th>
      <th>说明</th>
      <th width="120">作用域插槽</th>
      <th>内容</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>label</td>
      <td>自定义标签内容</td>
      <td>否</td>
      <td>可以放置自定义的标签内容</td>
    </tr>
    <tr>
      <td>validate</td>
      <td>自定义验证错误信息</td>
      <td>是</td>
      <td>可以自定义验证错误信息的展示，提供了 validateMessage 作为插槽内容</td>
    </tr>
    <tr>
      <td>default</td>
      <td>表单控件内容</td>
      <td>否</td>
      <td>放置表单控件，如 input、select 等</td>
    </tr>
  </tbody>
</table>



## 如何自定义表单控件？

预定义的表单项很可能并不满足项目的日常需求，例如：
+ 1、富文本编辑器；
+ 2、自定义控件；
+ 3、组合式表单项，例如在线合同，某个表单项通常由多个表单项组合而成；

这些都需要和 ```Form``` 和 ```FormItem``` 控件交互，例如触发表单验证，控制 ```disabled``` 和 ```size```。

查看[如何自定义一个表单项 Editor](/component/editor/)。


