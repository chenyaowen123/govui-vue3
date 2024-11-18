<script setup>
import selectBase from "./select-base.vue"
import selectClear from "./select-clear.vue"
import selectDisabled from "./select-disabled.vue"
import selectSize from "./select-size.vue"
</script>


# Select 选择器

下拉选择。

## 基础用法

设置 ```option``` 组件 ```value/label/disabled```。

<selectBase />

## 设置禁用

设置 ```disabled``` 后，组件展开的下来会自动关闭。

<selectDisabled />

## 禁用清空

默认带有清空按钮，你可以设置 ```clear``` 为 ```false``` 来禁用清空。

<selectClear />

## 设置尺寸

根据 ```size``` 设置不同尺寸。

<selectSize />
