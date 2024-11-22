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


## 如何自定义表单控件？

预定义的表单项很可能并不满足项目的日常需求，例如：
+ 1、富文本编辑器；
+ 2、自定义控件；
+ 3、组合式表单项，例如在线合同，某个表单项通常由多个表单项组合而成；

这些都需要和 ```Form``` 和 ```FormItem``` 控件交互，例如触发表单验证，控制 ```disabled``` 和 ```size```。

查看[如何自定义一个表单项 Editor](/component/editor/)。


