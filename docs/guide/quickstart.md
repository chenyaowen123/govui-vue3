---
outline: deep
---

# 快速上手

假设你已经安装了 `vuecli` 脚手架。

## 完整引入

使用完整导入，在开发项目过程中会更方便。

```js
import { createApp } from 'vue'
import GovUI from 'GovUI';
import 'GovUI/dist/index.css';
import App from './App.vue'

const app = createApp(App)

app.use(GovUI)
app.mount('#app')
```

## 手动导入

```vue
<script setup>
import { GovButton } from 'GovUI/es';
</script>
```


## 自动导入
