---
outline: deep
aside: false
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
<demo-container class="demo-gov-row">
	<gov-row :gutter="20">
		<gov-col :span="16"></gov-col>
		<gov-col :span="8"></gov-col>
	</gov-row>
	<gov-row :gutter="20">
		<gov-col :span="8"></gov-col>
		<gov-col :span="8"></gov-col>
		<gov-col :span="4"></gov-col>
		<gov-col :span="4"></gov-col>
	</gov-row>
	<gov-row :gutter="20">
		<gov-col :span="4"></gov-col>
		<gov-col :span="16"></gov-col>
		<gov-col :span="4"></gov-col>
	</gov-row>
</demo-container>

```md
<gov-row :gutter="20">
  <gov-col :span="16"></gov-col>
  <gov-col :span="8"></gov-col>
</gov-row>
<gov-row :gutter="20">
  <gov-col :span="8"></gov-col>
  <gov-col :span="8"></gov-col>
  <gov-col :span="4"></gov-col>
  <gov-col :span="4"></gov-col>
</gov-row>
<gov-row :gutter="20">
  <gov-col :span="4"></gov-col>
  <gov-col :span="16"></gov-col>
  <gov-col :span="4"></gov-col>
</gov-row>
```


## 分栏偏移
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

## 对齐方式
当设置```align```属性和 ```justify``` 属性，会自动开启 flex 布局模式。

```justify``` 属性可设置为 ```start, center, end, space-between, space-around```

```align```属性可设置为```top，middle，bottom```。

<demo-container class="demo-gov-row">
	<gov-row>
		<gov-col :span="6"></gov-col>
		<gov-col :span="6"></gov-col>
		<gov-col :span="6"></gov-col>
	</gov-row>
	<gov-row justify="center">
		<gov-col :span="6"></gov-col>
		<gov-col :span="6"></gov-col>
		<gov-col :span="6"></gov-col>
	</gov-row>
	<gov-row justify="end">
		<gov-col :span="6"></gov-col>
		<gov-col :span="6"></gov-col>
		<gov-col :span="6"></gov-col>
	</gov-row>
	<gov-row justify="space-between">
		<gov-col :span="6"></gov-col>
		<gov-col :span="6"></gov-col>
		<gov-col :span="6"></gov-col>
	</gov-row>
	<gov-row justify="space-around">
		<gov-col :span="6"></gov-col>
		<gov-col :span="6"></gov-col>
		<gov-col :span="6"></gov-col>
	</gov-row>
</demo-container>

```md
<gov-row>
	<gov-col :span="6"></gov-col>
	<gov-col :span="6"></gov-col>
	<gov-col :span="6"></gov-col>
</gov-row>
<gov-row justify="center">
	<gov-col :span="6"></gov-col>
	<gov-col :span="6"></gov-col>
	<gov-col :span="6"></gov-col>
</gov-row>
<gov-row justify="end">
	<gov-col :span="6"></gov-col>
	<gov-col :span="6"></gov-col>
	<gov-col :span="6"></gov-col>
</gov-row>
<gov-row justify="space-between">
	<gov-col :span="6"></gov-col>
	<gov-col :span="6"></gov-col>
	<gov-col :span="6"></gov-col>
</gov-row>
<gov-row justify="space-around">
	<gov-col :span="6"></gov-col>
	<gov-col :span="6"></gov-col>
	<gov-col :span="6"></gov-col>
</gov-row>
```


## Row Attributes
| 参数   | 说明               | 类型     | 可选值 | 默认值 |
| ------ | ------------------ | -------- | ------ | ------ |
| gutter | 栅格间隔           | number   | —      | 0      |
| justify | 水平排列方式，设置后自动启用 flex 布局 | string | start/end/center/space-around/space-between | start |
| align  | 垂直排列方式，设置后自动启用 flex 布局 | string | top/middle/bottom | — |


## Col Attributes
| 参数   | 说明             | 类型     | 可选值 | 默认值 |
| ------ | ---------------- | -------- | ------ | ------ |
| span   | 栅格占据的列数   | number   | —      | 24     |
| offset | 栅格左侧的间隔格数 | number   | —      | 0      |
