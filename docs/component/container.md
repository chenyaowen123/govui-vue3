---
outline: deep
---

# Container 布局容器
用于布局的容器组件，方便快速搭建平台基本结构。

<table style="width:100%; display:table;">
  <thead>
    <tr>
      <th width="130">组件</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>gov-container</td>
      <td>布局容器组件，用于包裹其他布局组件，提供整体布局的外部容器。直接子元素必须是其它四个组件中的一个或多个</td>
    </tr>
    <tr>
      <td>gov-header</td>
      <td>布局头部组件，通常用于页面顶部的导航或标题区域。</td>
    </tr>
    <tr>
      <td>gov-aside</td>
      <td>布局侧边组件，用于页面的侧边栏，通常包含导航菜单或其他辅助信息。</td>
    </tr>
    <tr>
      <td>gov-main</td>
      <td>布局主要内容区域组件，用于放置页面的主要内容。</td>
    </tr>
    <tr>
      <td>gov-footer</td>
      <td>布局底部组件，通常用于页面底部的信息展示，如版权声明等。</td>
    </tr>
  </tbody>
</table>

## 布局一

<demo-container class="demo-gov-container">
	<gov-container>
		<gov-header>Header</gov-header>
		<gov-main>Main</gov-main>
	</gov-container>
</demo-container>

```html
<gov-container>
	<gov-header>Header</gov-header>
	<gov-main>Main</gov-main>
</gov-container>
```

## 布局二

<demo-container class="demo-gov-container">
	<gov-container>
		<gov-header>Header</gov-header>
		<gov-main>Main</gov-main>
		<gov-footer>Footer</gov-footer>
	</gov-container>
</demo-container>

```html
<gov-container>
	<gov-header>Header</gov-header>
	<gov-main>Main</gov-main>
	<gov-footer>Footer</gov-footer>
</gov-container>
```

## 布局三

<demo-container class="demo-gov-container">
	<gov-container>
		<gov-aside width="200px">Aside</gov-aside>
		<gov-main>Main</gov-main>
	</gov-container>
</demo-container>

```html
<gov-container>
	<gov-aside width="200px">Aside</gov-aside>
	<gov-main>Main</gov-main>
</gov-container>
```

## 布局四

<demo-container class="demo-gov-container">
	<gov-container>
		<gov-header>Header</gov-header>
		<gov-container>
			<gov-aside width="200px">Aside</gov-aside>
			<gov-main>Main</gov-main>
		</gov-container>
	</gov-container>
</demo-container>

```html
<gov-container>
	<gov-header>Header</gov-header>
	<gov-container>
		<gov-aside width="200px">Aside</gov-aside>
		<gov-main>Main</gov-main>
	</gov-container>
</gov-container>
```

## 布局五
<demo-container class="demo-gov-container">
	<gov-container>
		<gov-header>Header</gov-header>
		<gov-container>
			<gov-aside width="200px">Aside</gov-aside>
			<gov-container>
				<gov-main>Main</gov-main>
				<gov-footer>Footer</gov-footer>
			</gov-container>
		</gov-container>
	</gov-container>
</demo-container>

```html
<gov-container>
	<gov-header>Header</gov-header>
	<gov-container>
		<gov-aside width="200px">Aside</gov-aside>
		<gov-container>
			<gov-main>Main</gov-main>
			<gov-footer>Footer</gov-footer>
		</gov-container>
	</gov-container>
</gov-container>
```

## 布局六
<demo-container class="demo-gov-container">
	<gov-container>
		<gov-aside width="200px">Aside</gov-aside>
		<gov-container>
			<gov-header>Header</gov-header>
			<gov-main>Main</gov-main>
		</gov-container>
	</gov-container>
</demo-container>

```html
<gov-container>
	<gov-aside width="200px">Aside</gov-aside>
	<gov-container>
		<gov-header>Header</gov-header>
		<gov-main>Main</gov-main>
	</gov-container>
</gov-container>
```

## 布局七
<demo-container class="demo-gov-container">
	<gov-container>
		<gov-aside width="200px">Aside</gov-aside>
		<gov-container>
			<gov-header>Header</gov-header>
			<gov-main>Main</gov-main>
			<gov-footer>Footer</gov-footer>
		</gov-container>
	</gov-container>
</demo-container>

```html
<gov-container>
	<gov-aside width="200px">Aside</gov-aside>
	<gov-container>
		<gov-header>Header</gov-header>
		<gov-main>Main</gov-main>
		<gov-footer>Footer</gov-footer>
	</gov-container>
</gov-container>
```
