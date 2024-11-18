<script setup>
import pageContainerBase from "./page-container-base.vue"
import pageContainerAll from "./page-container-all.vue"
</script>


# PageContainer 页面容器

页面容器，可以快速创建一个统一风格的页面容器。

## 基础使用

快速创建一个页面容器。

<pageContainerBase />


## 完整例子

配合面包屑和操作按钮一起使用。

+ 可以在```before```、```actions```、```title``` 插槽分别自定义内容展示。
+ 可以设置  ```border```、```round``` 是否需要边框和圆角。

<pageContainerAll />
