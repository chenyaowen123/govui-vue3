---
outline: deep
---

# Popconfirm 气泡确认框

点击元素，弹出气泡确认框。

<script setup>
import { ref } from 'vue';
const handleCancel= () =>{
	alert('点击了cancel');
}

const handleConfirm= () =>{
	alert('点击了confirm');
}
</script>

## 基础用法

Popconfirm 在 Popover 基础上做了常用封装，因此对于重复属性，请参考 Popover 的文档，在此文档中不做详尽解释。

<demo-container class="demo-gov-form">
<gov-popconfirm
	title="这是一段内容确定删除吗？"
	icon="info"
	iconColor="red"
	placement="right"
>
	<template #reference>
		<gov-button icon="delete">点击删除</gov-button>
	</template>
</gov-popconfirm>
</demo-container>

```md
<gov-popconfirm
	title="这是一段内容确定删除吗？"
	icon="delete"
	iconColor="red"
	placement="right"
>
	<template #reference>
		<gov-button icon="delete">点击删除</gov-button>
	</template>
</gov-popconfirm>
```


## 自定义内容

也可以不用```icon```、```title```属性，使用默认插槽。

<demo-container class="demo-gov-form">
<gov-popconfirm
	placement="right"
	confirmButtonText="是的，确定"
	cancelButtonText="不是，点击关闭"
	confirmButtonType="primary"
	cancelButtonType="default"
	@cancel="handleCancel"
	@confirm="handleConfirm"
>
	<div>下图是本站LOGO吗？</div>
	<img src="/logo.png" width="200"/>
	<template #reference>
		<gov-button icon="mouse">点击触发</gov-button>
	</template>
</gov-popconfirm>
</demo-container>


```md
<gov-popconfirm
	placement="right"
	confirmButtonText="是的，确定"
	cancelButtonText="不是，点击关闭"
	confirmButtonType="primary"
	cancelButtonType="default"
	@cancel="handleCancel"
	@confirm="handleConfirm"
>
	<p>下图是本站LOGO吗？</p>
	<img src="/logo.png"/>
	<template #reference>
		<gov-button icon="mouse">点击触发</gov-button>
	</template>
</gov-popconfirm>

<script setup>
import { ref } from 'vue';
const handleCancel= () =>{
	alert('点击了cancel');
}
const handleConfirm= () =>{
	alert('点击了confirm');
}
</script>```


## Attributes

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>title</td>
      <td>标题</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>confirm-button-text</td>
      <td>确认按钮文字</td>
      <td>String</td>
      <td>—</td>
      <td>确定</td>
    </tr>
    <tr>
      <td>cancel-button-text</td>
      <td>取消按钮文字</td>
      <td>String</td>
      <td>—</td>
      <td>取消</td>
    </tr>
    <tr>
      <td>confirm-button-type</td>
      <td>确认按钮类型</td>
      <td>String</td>
      <td>—</td>
      <td>primary</td>
    </tr>
    <tr>
      <td>cancel-button-type</td>
      <td>取消按钮类型</td>
      <td>String</td>
      <td>—</td>
      <td>text</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>Icon</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>icon-color</td>
      <td>Icon 颜色</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
  </tbody>
</table>


## Slots

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>reference</td>
      <td>触发 Popconfirm 显示的 HTML 元素</td>
    </tr>
  </tbody>
</table>

## Events

<table>
  <thead>
    <tr>
      <th>事件名称</th>
      <th>说明</th>
      <th>回调参数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>confirm</td>
      <td>点击确认按钮时触发</td>
      <td>—</td>
    </tr>
    <tr>
      <td>cancel</td>
      <td>点击取消按钮时触发</td>
      <td>—</td>
    </tr>
  </tbody>
</table>
