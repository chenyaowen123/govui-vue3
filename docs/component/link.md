---
outline: deep
aside: false
---

# Link 文字链接

规范的超链接

## 基础用法

<demo-container class="demo-gov-link">
	<gov-link href="http://govui.org" target="_blank">默认链接</gov-link>
	<gov-link type="primary">主要链接</gov-link>
	<gov-link type="success">成功链接</gov-link>
	<gov-link type="warning">警告链接</gov-link>
	<gov-link type="danger">危险链接</gov-link>
	<gov-link type="info">信息链接</gov-link>
</demo-container>

```md
<gov-link href="http://govui.org" target="_blank">默认链接</gov-link>
<gov-link type="primary">主要链接</gov-link>
<gov-link type="success">成功链接</gov-link>
<gov-link type="warning">警告链接</gov-link>
<gov-link type="danger">危险链接</gov-link>
<gov-link type="info">信息链接</gov-link>
```

## 禁用状态

文字链接不可用状态。

<demo-container class="demo-gov-link">
	<gov-link disabled>默认链接</gov-link>
	<gov-link type="primary" disabled>主要链接</gov-link>
	<gov-link type="success" disabled>成功链接</gov-link>
	<gov-link type="warning" disabled>警告链接</gov-link>
	<gov-link type="danger" disabled>危险链接</gov-link>
	<gov-link type="info" disabled>信息链接</gov-link>
</demo-container>

```md
<gov-link disabled>默认链接</gov-link>
<gov-link type="primary" disabled>主要链接</gov-link>
<gov-link type="success" disabled>成功链接</gov-link>
<gov-link type="warning" disabled>警告链接</gov-link>
<gov-link type="danger" disabled>危险链接</gov-link>
<gov-link type="info" disabled>信息链接</gov-link>
```

## 下划线

文字链接下划线。

<demo-container class="demo-gov-link">
	<gov-link :underline="false">没有下划线</gov-link>
	<gov-link type="primary">默认带下划线</gov-link>
</demo-container>

```md
<gov-link :underline="false">没有下划线</gov-link>
<gov-link>默认带下划线</gov-link>
```

## 带图标

带图标的文字链接可增强辨识度。

<demo-container class="demo-gov-link">
	<gov-link icon="edit">编辑</gov-link>
	<gov-link icon="delete">删除</gov-link>
</demo-container>

```md
<gov-link icon="edit">编辑</gov-link>
<gov-link icon="delete">删除</gov-link>
```
