<script setup>
import customEditor from "./editor-base.vue"
</script>

# Editor 富文本编辑器

如何富文本编辑器，如何自定义表单组件。

::: warning
由于富文本编辑器是一个第三方插件，为了保持配置的灵活性，GvoUI 并没有将其直接集成。本文将逐步指导您如何自定义配置一个能够与表单进行交互的表单组件。
:::

## 准备工作
当你想创建一个表单组件时候，需要从表单组件获取必要的表单状态`disabled`、`size`、`validateState`;监听表单事件`reset`；触发事件给 `FormItem`, 如：`change`、`focus`...

以 [VueQuill](https://vueup.github.io/vue-quill/) 插件为例，需要先安装：

```sh [yarn]
yarn add @vueup/vue-quill@latest
```


在自定义组件里加入以下逻辑：

```js
// 注入 FormItem
const govFormItem = inject("govFormItem", null);

// 来自表单状态
const { disabled, size, validateState } = govFormItem;

// 告知表单组件发生了？例如 change 事件
govFormItem?.$emit("change");

// 监听表单 reset 事件来处理重置逻辑
govFormItem?.$on("reset", () => {
	// ...
});
```

## 富文本示例

以下代码为简单的封装，你可以复制代码到你的公共组件内，选择适当的 `Toolbar` 、或者配置更多模块。

<customEditor />

::: details 查看 Editor 封装代码
<<< ./editor.vue{vue:line-numbers}
:::


::: details 查看 Form 内调用代码
<<< ./editor-base.vue{vue:line-numbers}
:::
