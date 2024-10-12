---
outline: deep
---

# Button 按钮
常用的操作按钮。


## 基础用法

<demo-container class="demo-gov-row">
	<div>
		<gov-button>默认按钮</gov-button>
		<gov-button type="primary">主要按钮</gov-button>
		<gov-button type="success">成功按钮</gov-button>
		<gov-button type="info">信息按钮</gov-button>
		<gov-button type="warning">警告按钮</gov-button>
		<gov-button type="danger">危险按钮</gov-button>
	</div>
	<br/>
	<div>
		<gov-button plain>默认按钮</gov-button>
		<gov-button plain type="primary">主要按钮</gov-button>
		<gov-button plain type="success">成功按钮</gov-button>
		<gov-button plain type="info">信息按钮</gov-button>
		<gov-button plain type="warning">警告按钮</gov-button>
		<gov-button plain type="danger">危险按钮</gov-button>
	</div>
	<br/>
	<div>
		<gov-button round>默认按钮</gov-button>
		<gov-button round type="primary">主要按钮</gov-button>
		<gov-button round type="success">成功按钮</gov-button>
		<gov-button round type="info">信息按钮</gov-button>
		<gov-button round type="warning">警告按钮</gov-button>
		<gov-button round type="danger">危险按钮</gov-button>
	</div>
	<br/>
	<div>
		<gov-button icon="edit">默认按钮</gov-button>
		<gov-button type="primary" icon="edit">主要按钮</gov-button>
		<gov-button icon="search" plain circle/>
		<gov-button type="primary" icon="delete" circle/>
		<gov-button type="text">文字按钮</gov-button>
	</div>
</demo-container>

```md
<div>
	<gov-button>默认按钮</gov-button>
	<gov-button type="primary">主要按钮</gov-button>
	<gov-button type="success">成功按钮</gov-button>
	<gov-button type="info">信息按钮</gov-button>
	<gov-button type="warning">警告按钮</gov-button>
	<gov-button type="danger">危险按钮</gov-button>
</div>
<div>
	<gov-button plain>默认按钮</gov-button>
	<gov-button plain type="primary">主要按钮</gov-button>
	<gov-button plain type="success">成功按钮</gov-button>
	<gov-button plain type="info">信息按钮</gov-button>
	<gov-button plain type="warning">警告按钮</gov-button>
	<gov-button plain type="danger">危险按钮</gov-button>
</div>
<div>
	<gov-button round>默认按钮</gov-button>
	<gov-button round type="primary">主要按钮</gov-button>
	<gov-button round type="success">成功按钮</gov-button>
	<gov-button round type="info">信息按钮</gov-button>
	<gov-button round type="warning">警告按钮</gov-button>
	<gov-button round type="danger">危险按钮</gov-button>
</div>
<div>
	<gov-button icon="edit">默认按钮</gov-button>
	<gov-button type="primary" icon="edit">主要按钮</gov-button>
	<gov-button icon="search" plain circle/>
	<gov-button type="primary" icon="delete" circle/>
	<gov-button type="text">文字按钮</gov-button>
</div>
```

## 不同尺寸
<demo-container class="demo-gov-row">
	<gov-button size="large">大按钮</gov-button>
	<gov-button size="default">默认按钮</gov-button>
	<gov-button size="small">小按钮</gov-button>
</demo-container>


```md
<gov-button size="large">大按钮</gov-button>
<gov-button size="default">默认按钮</gov-button>
<gov-button size="small">小按钮</gov-button>
```


## 禁用状态

<demo-container class="demo-gov-row">
	<div>
		<gov-button disabled>主要按钮</gov-button>
		<gov-button disabled type="success">成功按钮</gov-button>
		<gov-button disabled type="info">信息按钮</gov-button>
		<gov-button disabled type="warning">警告按钮</gov-button>
		<gov-button disabled type="danger">危险按钮</gov-button>
	</div>
	<br/>
	<div>
		<gov-button disabled plain>主要按钮</gov-button>
		<gov-button disabled plain type="success">成功按钮</gov-button>
		<gov-button disabled plain type="info">信息按钮</gov-button>
		<gov-button disabled plain type="warning">警告按钮</gov-button>
		<gov-button disabled plain type="danger">危险按钮</gov-button>
	</div>
</demo-container>

```md
<div>
	<gov-button disabled>主要按钮</gov-button>
	<gov-button disabled type="success">成功按钮</gov-button>
	<gov-button disabled type="info">信息按钮</gov-button>
	<gov-button disabled type="warning">警告按钮</gov-button>
	<gov-button disabled type="danger">危险按钮</gov-button>
</div>
<div>
	<gov-button disabled plain>主要按钮</gov-button>
	<gov-button disabled plain type="success">成功按钮</gov-button>
	<gov-button disabled plain type="info">信息按钮</gov-button>
	<gov-button disabled plain type="warning">警告按钮</gov-button>
	<gov-button disabled plain type="danger">危险按钮</gov-button>
</div>
```

## 加载中

操作完毕以后，可以在按钮上显示加载状态。

<demo-container class="demo-gov-row">
	<gov-button type="primary" loading>加载中</gov-button>
</demo-container>

```md
<gov-button type="primary" loading>加载中</gov-button>
```

## 文字按钮

<demo-container class="demo-gov-row">
	<gov-button type="text">文字按钮</gov-button>
	<gov-button type="text" disabled>文字按钮</gov-button>
</demo-container>

```md
<gov-button type="text">文字按钮</gov-button>
<gov-button type="text" disabled>文字按钮</gov-button>
```
