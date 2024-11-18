<script setup>
import uploadBase from "./upload-base.vue"
import uploadMultiple from "./upload-multiple.vue"
import uploadButton from "./upload-button.vue"
import uploadDisabled from "./upload-disabled.vue"
import uploadAppend from "./upload-append.vue"
</script>

# Upload 上传

## 基础例子

```uploadRequest``` 返回一个 ```Promise``` 用来接受成功/失败，以  ```axios``` 插件为例。

<uploadBase />

## 设置多选

```uploadMultiple``` 可以设置多选。

<uploadMultiple />

## 按钮类型

```buttonType``` 设置上传按钮风格。 ```buttonSize``` 设置上传按钮的大小。 ```buttonText``` 设置按钮的文字。

<uploadButton />

## 设置禁用

在禁用状态下，上传按钮禁用，没有删除按钮。

<uploadDisabled />

## 自定义提示

设置 ```props``` 或者 ```<slot />``` 来定义提示信息。

<uploadAppend />
