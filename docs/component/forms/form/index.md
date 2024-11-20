<script setup>
import formBase from "./form-base.vue"
</script>

# Form 表单

用于组织表单项。

## 基础用法

你可以控制 ```label``` 处于不同位置。

## 响应式布局

这在布局搜索项时非常有用，```Form``` 和 ```FormItem``` 基于 ```Row``` 和 ```cal``` 组件，可参考[Grid 栅格化](/component/grid/)。

## 表单校验

## 动态表单项

## 完整表单

该表单包含了所有预定表单项、表单验证、尺寸、布局、是否可用等控制。

<formBase />

## 如何自定义表单控件？

预定义的表单项很可能并不满足项目的日常需求，例如在线合同，某个表单项通常由多个表单项组合而成，这种集成式表单控件也需要和 ```Form``` 和 ```FormItem``` 控件交互。

查看[如何自定义一个表单项 Editor](/component/editor/)。


