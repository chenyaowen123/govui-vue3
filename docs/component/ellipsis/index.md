<script setup>
import ellipsisBase from "./ellipsis-base.vue"
import ellipsisFold from "./ellipsis-fold.vue"
import ellipsisHidefoldup from "./ellipsis-hidefoldup.vue"
</script>


# Ellipsis 文字省略

用于长文本/内容的省略。

## 基础用法

```maxLines``` 设置几行省略，默认是1行。

<ellipsisBase />

## Fold 模式

```fold``` 模式展开按钮在下方，```foldHeight``` 可以设置折叠状态下的显示高度。内容不局限文本。

<ellipsisFold />

## 隐藏收起

```fold``` 模式下，可设置 ```hideFoldup``` 隐藏收起按钮，通常用于文章内容页。

<ellipsisHidefoldup />
