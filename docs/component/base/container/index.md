# Container 布局容器
用于布局的容器组件，基于flex布局，方便快速搭建平台基本结构。

以下四种布局组件提供名称为 ```default``` 的默认插槽，用于自定义内容。

<table style="width:100%; display:table;">
  <thead>
    <tr>
      <th width="130">组件</th>
	  <th width="100">Attributes</th>
	  <th width="100">默认值</th>
      <th>组件说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>gov-container</td>
	  <td>-</td>
	  <td>-</td>
      <td>布局容器组件，直接子元素必须是其它四个组件中的一个或多个</td>
    </tr>
    <tr>
      <td>gov-header</td>
	  <td>height</td>
	  <td>60px</td>
      <td>布局头部组件。</td>
    </tr>
    <tr>
      <td>gov-aside</td>
	  <td>width</td>
	  <td>200px</td>
      <td>布局侧边组件。</td>
    </tr>
    <tr>
      <td>gov-main</td>
	  <td>-</td>
	  <td>-</td>
      <td>布局主要内容区域组件。</td>
    </tr>
    <tr>
      <td>gov-footer</td>
	  <td>height</td>
	  <td>60px</td>
      <td>布局底部组件。</td>
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
