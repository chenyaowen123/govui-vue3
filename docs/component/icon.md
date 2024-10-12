---
outline: deep
---

# Icon 字体图标

常用的字体图标集合。


## 使用方法

只需要对```<gov-icon name="iconName"/>``` 组件指定相应图标的```name```属性即可，例如：

<demo-container class="demo-gov-icon">
	<gov-icon name="edit" />
	<gov-icon name="delete" />
	<gov-icon name="loading" />
</demo-container>

```md
<gov-icon name="edit"/>
<gov-icon name="delete"/>
<gov-icon name="loading"/>
```

## 图标集合

<script setup>
import iconList from "./icon.js";
</script>

<demo-container class="demo-gov-icons">
	<div class="list">
		<div class="box" v-for="icon in iconList" :key="icon">
			<gov-icon :name="icon"/>
			<div>{{icon}}</div>
		</div>
	</div>
</demo-container>
