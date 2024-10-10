---
outline: deep
---

# Grid 栅格化

通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局
通过 ```row``` 和 ```col``` 组件，并通过 ```col``` 组件的 ```span``` 属性我们就可以自由地组合布局。
<demo-container class="demo-gov-row">
	<gov-row>
		<gov-col :span="24"></gov-col>
	</gov-row>
	<gov-row>
		<gov-col :span="12"></gov-col>
		<gov-col :span="12"></gov-col>
	</gov-row>
	<gov-row>
		<gov-col :span="8"></gov-col>
		<gov-col :span="8"></gov-col>
		<gov-col :span="8"></gov-col>
	</gov-row>
	<gov-row>
		<gov-col :span="6"></gov-col>
		<gov-col :span="6"></gov-col>
		<gov-col :span="6"></gov-col>
		<gov-col :span="6"></gov-col>
	</gov-row>
</demo-container>

```md
<gov-row>
	<gov-col :span="24"></gov-col>
</gov-row>
<gov-row>
	<gov-col :span="12"></gov-col>
	<gov-col :span="12"></gov-col>
</gov-row>
<gov-row>
	<gov-col :span="8"></gov-col>
	<gov-col :span="8"></gov-col>
	<gov-col :span="8"></gov-col>
</gov-row>
<gov-row>
	<gov-col :span="6"></gov-col>
	<gov-col :span="6"></gov-col>
	<gov-col :span="6"></gov-col>
	<gov-col :span="6"></gov-col>
</gov-row>
```



## 分栏间隔
Row 组件 提供 ```gutter``` 属性来指定每一栏之间的间隔，默认间隔为 0。
<demo-container class="demo-gov-row">
	<gov-row :gutter="20">
		<gov-col :span="6"></gov-col>
		<gov-col :span="6"></gov-col>
		<gov-col :span="6"></gov-col>
		<gov-col :span="6"></gov-col>
	</gov-row>
</demo-container>

```md
<gov-row :gutter="20">
	<gov-col :span="6"></gov-col>
	<gov-col :span="6"></gov-col>
	<gov-col :span="6"></gov-col>
	<gov-col :span="6"></gov-col>
</gov-row>
```


## 混合布局
支持偏移指定的栏数。
<demo-container class="demo-gov-row">
	<gov-row :gutter="20">
		<gov-col :span="6"></gov-col>
		<gov-col :span="6" :offset="6"></gov-col>
	</gov-row>
	<gov-row :gutter="20">
		<gov-col :span="6" :offset="6"></gov-col>
		<gov-col :span="6" :offset="6"></gov-col>
	</gov-row>
	<gov-row :gutter="20">
		<gov-col :span="12" :offset="6"></gov-col>
	</gov-row>
</demo-container>

```md
<gov-row :gutter="20">
	<gov-col :span="6"></gov-col>
	<gov-col :span="6" :offset="6"></gov-col>
</gov-row>
<gov-row :gutter="20">
	<gov-col :span="6" :offset="6"></gov-col>
	<gov-col :span="6" :offset="6"></gov-col>
</gov-row>
<gov-row :gutter="20">
	<gov-col :span="12" :offset="6"></gov-col>
</gov-row>
```
