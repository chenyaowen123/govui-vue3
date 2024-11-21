<script setup>
import tabsBase from "./tabs-base.vue"
import tabsCustom from "./tabs-custom.vue"
</script>
# Tabs 标签页

选项卡切换组件。

## 基础使用

使用 ```v-model``` 绑定当前显示的 ```tab```。

<tabsBase />

## 自定义导航

可以在 ```name='nva'``` 的插槽里定义导航样式。

<tabsCustom />

