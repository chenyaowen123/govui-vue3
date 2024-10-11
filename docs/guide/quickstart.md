---
outline: deep
---

# 快速上手

## 完整引入
推荐使用完整导入，在开发项目过程中会更方便。

```js
import { createApp } from 'vue'
import GovUI from 'gov-ui';
import App from './App.vue'

const app = createApp(App)

app.use(GovUI)
app.mount('#app')
```

## 按需引入
### Composition API

```md
<template>
  <GovButton>Click me</GovButton>
</template>

<script setup>
import { GovButton } from 'gov-ui';
</script>
```

### Options API

```md
<template>
  <gov-button>Click me</gov-button>
</template>

<script>
import { GovButton } from 'gov-ui';
export default {
  components: {
    GovButton,
  },
};
</script>
```
