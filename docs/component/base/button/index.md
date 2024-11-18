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

## 按钮组

<demo-container class="demo-gov-row">
	<gov-button-group>
		<gov-button type="primary">按钮组</gov-button>
		<gov-button type="primary">按钮组</gov-button>
		<gov-button type="success">按钮组</gov-button>
	</gov-button-group>
	<br/>
	<br/>
	<gov-button-group>
		<gov-button type="primary" round>按钮组</gov-button>
		<gov-button type="primary" round>按钮组</gov-button>
		<gov-button type="warning" round>按钮组</gov-button>
	</gov-button-group>
	<br/>
	<br/>
	<gov-button-group>
		<gov-button type="primary" icon="user-solid" circle/>
		<gov-button type="primary" icon="edit" circle>按钮组</gov-button>
		<gov-button type="primary" icon="s-tools" circle/>
	</gov-button-group>
</demo-container>

```md
<gov-button-group>
	<gov-button type="primary">按钮组</gov-button>
	<gov-button type="primary">按钮组</gov-button>
	<gov-button type="success">按钮组</gov-button>
</gov-button-group>
<gov-button-group>
	<gov-button type="primary" round>按钮组</gov-button>
	<gov-button type="primary" round>按钮组</gov-button>
	<gov-button type="success" round>按钮组</gov-button>
</gov-button-group>
<gov-button-group>
	<gov-button type="primary" icon="user-solid" circle/>
	<gov-button type="primary" icon="edit" circle>按钮组</gov-button>
	<gov-button type="primary" icon="s-tools" circle/>
</gov-button-group>
```


## Attributes

<table>
  <thead>
    <tr>
      <th width="110">属性</th>
      <th width="120">说明</th>
      <th width="90">类型</th>
      <th>可选值</th>
      <th width="80">默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>size</td>
      <td>尺寸</td>
      <td>string</td>
      <td>large / default / small</td>
      <td>—</td>
    </tr>
    <tr>
      <td>type</td>
      <td>类型</td>
      <td>string</td>
      <td>primary / success / warning / danger / info / text</td>
      <td>—</td>
    </tr>
    <tr>
      <td>plain</td>
      <td>是否朴素按钮</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>round</td>
      <td>是否圆角按钮</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>circle</td>
      <td>是否圆形按钮</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>是否加载中状态</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用状态</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>图标名</td>
      <td>string</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>autofocus</td>
      <td>是否默认聚焦</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>native-type</td>
      <td>原生 type 属性</td>
      <td>string</td>
      <td>button / submit / reset</td>
      <td>—</td>
    </tr>
  </tbody>
</table>
