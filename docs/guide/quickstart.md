---
outline: deep
---

# 快速上手

提供两种引入方式，推荐完整引入。

## 完整引入 😋

使用完整导入，在开发项目过程中会更方便。

```js
// main.js
import { createApp } from 'vue'
import GovUI from 'GovUI';
import 'GovUI/dist/index.css';
import App from './App.vue'

const app = createApp(App)

app.use(GovUI)
app.mount('#app')
```

## 按需引入

按需引入，可减少打包体积。

```vue
<script setup>
import { GovButton } from 'GovUI';
</script>
```

在入口文件加入样式：

::: warning 注意
因为 `GovUI` 样式文件在开启 `gzip` 的时候只有 `50kb`，而组件却有 `60+` ，组件之间仍有相互依赖的 `icon/button` 等基础组件，**所以并没有单独划分组件 css 文件**，这意味着你仍然需要在入口文件添加样式文件。
:::

``` js
// main.js
import 'GovUI/dist/index.css';
```
