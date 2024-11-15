---
outline: deep
---

# Grid 栅格化

通过基础的 24 分栏，迅速简便地创建布局。

## 基础布局
通过 ```row``` 和 ```col``` 组件，并通过 ```col``` 组件的 ```span``` 属性我们就可以自由地组合布局。

<demo-container class="demo-gov-grid-row">
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
<demo-container class="demo-gov-grid-row">
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
<demo-container class="demo-gov-grid-row">
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
<demo-container class="demo-gov-grid-row">
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

```align```属性可设置为```flex-start, center, flex-end, stretch```。

<demo-container class="demo-gov-grid-row">
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

<table style="width:100%; display:table;">
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型 / 示例</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>width</td>
      <td>行宽度，单位 px</td>
      <td>string | number</td>
      <td>auto</td>
    </tr>
    <tr>
      <td>gutter</td>
      <td>栅格间隔，见 Gutter 示例。</td>
      <td>number | object | array</td>
      <td>0</td>
    </tr>
    <tr>
      <td>wrap</td>
      <td>是否自动换行</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>align</td>
      <td>垂直对齐方式，对应 css 的 align-item 的值</td>
      <td>string</td>
      <td>flex-start</td>
    </tr>
    <tr>
      <td>justify</td>
      <td>水平排列方式,对应 css 的 justify-content 的值</td>
      <td>string</td>
      <td>start</td>
    </tr>
  </tbody>
</table>


### Gutter 示例

```vue
<template>
	<gov-row :gutter="16"> </gov-row>
	<gov-row :gutter="{ xs: 8, sm: 16, md: 24 }"> </gov-row>
	<gov-row :gutter="[16, 24]"> </gov-row>
	<gov-row :gutter="[16, { xs: 8, sm: 16, md: 24 }]"> </gov-row>
	<gov-row :gutter="[{ xs: 8, sm: 16 }, 24]"> </gov-row>
</template>
```
<table style="width:100%; display:table;">
  <thead>
    <tr>
      <th>名称</th>
      <th>说明</th>
      <th>类型</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>xs</td>
      <td>&lt;576px 响应式栅格</td>
      <td>number</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>sm</td>
      <td>≥576px 响应式栅格</td>
      <td>number</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>md</td>
      <td>≥768px 响应式栅格</td>
      <td>number</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>lg</td>
      <td>≥992px 响应式栅格</td>
      <td>number</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>xl</td>
      <td>≥1200px 响应式栅格</td>
      <td>number</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>xxl</td>
      <td>≥1600px 响应式栅格</td>
      <td>number</td>
      <td>undefined</td>
    </tr>
  </tbody>
</table>

## Col Attributes

参数 | 说明 | 类型 | 默认值
-- | -- | -- | --
span | 栅格占位格数，取 `0,1,2...24`，为 `0` 时相当于 `display: none`，优先级低于 `xs`, `sm`, `md`, `lg`, `xl`, `xxl` | number | undefined
offset | 栅格左侧的间隔格数，取 `0,1,2...24` | number | 0
flex | `flex` 布局填充 | string &#124; number | undefined
order | 栅格顺序，取 `0,1,2...` | number | 0
xs | `<576px` 响应式栅格 | number &#124; {span?: number&#44; offset?: number} | undefined
sm | `≥576px` 响应式栅格 | number &#124; {span?: number&#44; offset?: number} | undefined
md | `≥768px` 响应式栅格 | number &#124; {span?: number&#44; offset?: number} | undefined
lg | `≥992px` 响应式栅格 | number &#124; {span?: number&#44; offset?: number} | undefined
xl | `≥1200px` 响应式栅格 | number &#124; {span?: number&#44; offset?: number} | undefined
xxl | `≥1600px` 响应式栅格 | number &#124; {span?: number&#44; offset?: number} | undefined
