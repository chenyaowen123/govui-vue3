<script setup>
import collapseBase from "./examples/collapse/collapse-base.vue"
import collapseAccordion from "./examples/collapse/collapse-accordion.vue"
import collapseDisabled from "./examples/collapse/collapse-disabled.vue"
import collapseDisabledAll from "./examples/collapse/collapse-disabled-all.vue"
</script>

# Collapse 折叠面板

常用于收纳一组内容。


## 基础用法

默认面板各自独立，利用 ```defaultOpend``` 设置默认是否打开。

<collapseBase />

## 手风琴

```v-model``` 对应面板的 ```name```，当设置 ```v-model``` 时，会自动开启手风琴效果。

<collapseAccordion />

## 禁用面板

设置禁用某个面板。

<collapseDisabled />

设置禁用全部。

<collapseDisabledAll />
