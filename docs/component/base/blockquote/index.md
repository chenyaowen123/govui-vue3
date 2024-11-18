<script setup>
import blockquoteBase from "./blockquote-base.vue"
import blockquoteQiantao from "./blockquote-qiantao.vue"
import blockquoteFontsize from "./blockquote-fontsize.vue"
import blockquoteReverse from "./blockquote-reverse.vue"
</script>


# Blockquote 引用

设置一段引用。

## 基本使用

<blockquoteBase />

## 嵌套使用

<blockquoteQiantao />

## 自定义

字体大小默认继承，可设置 ```fontSize``` 修改字体大小； 根据```borderColor``` 设置边框颜色。

<blockquoteFontsize />

## 翻转

```reverse``` 设置是否翻转，默认不翻转。

<blockquoteReverse />
