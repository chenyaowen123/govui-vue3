<script setup>
import textareaBase from "./examples/textarea/textarea-base.vue"
import textareaRows from "./examples/textarea/textarea-rows.vue"
import textareaMax from "./examples/textarea/textarea-max.vue"
import textareaClear from "./examples/textarea/textarea-clear.vue"
import textareaResize from "./examples/textarea/textarea-resize.vue"
</script>


# Textarea 文本域

增强的文本域。

## 基础使用

<textareaBase />

## 设置行数

默认 ```rows``` 为3行。

<textareaRows />

## 最大长度

可设置最大输入长度，并带有统计提示。

<textareaMax />

## 清空按钮

```clearable``` 是否显示清空按钮。

<textareaClear />

## 改变大小

默认 ```resize``` 为 ```true```，当关闭时不可改变大小。

<textareaResize />
