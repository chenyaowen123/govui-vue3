# Popper 弹窗

基于Vue3-popper开发的弹窗组件。
<script setup>
import { ref } from 'vue';
const show = ref(false);
const show2 = ref(false);
</script>

## 基础用法

可以根据绑定一个布尔值，然后根据不同的事件切换显示隐藏，可以配合Button、Radio、Checkbox、Switch等一起配合使用。

当弹出内容是简单的文本，也可以设置 ```content``` 参数。

<demo-container class="demo-gov-form">
<gov-popper
	v-model="show"
	title="标题"
	content="存在即合理，一切事物的存在都有其独特的价值。"
	placement="right"
>
	<template #reference>
		<gov-button @click="show = !show">click激活</gov-button>
	</template>
</gov-popper>
</demo-container>

```md
<gov-popper
	v-model="show"
	title="标题"
	content="存在即合理，一切事物的存在都有其独特的价值。"
	placement="right"
>
	<template #reference>
		<gov-button @click="show = !show">click激活</gov-button>
	</template>
</gov-popper>

<script setup>
import { ref } from 'vue';
const show = ref(false);
</script>```


## 自定义弹出

可以在默认插槽内自定义弹出内容。

<demo-container class="demo-gov-form">
<gov-popper
	v-model="show2"
	title="GovUI是专为政府定制的"
	placement="right"
	width="200px"
>
	<template #reference>
		<gov-button @click="show2 = !show2">点击弹出</gov-button>
	</template>
	<img src="/logo.png"/>
	<br/>
	<div style="text-align:center;">
		<gov-button size="small" @click="show2 = false">关闭</gov-button>
		<gov-button size="small" @click="show2 = false" type="primary">确定</gov-button>
	</div>
</gov-popper>
</demo-container>

```md
<gov-popper
	v-model="show2"
	title="GovUI是专为政府定制的"
	placement="right"
	width="200px"
>
	<template #reference>
		<gov-button @click="show2 = !show2">点击弹出</gov-button>
	</template>
	<img src="/logo.png"/>
	<br/>
	<div style="text-align:center;">
		<gov-button size="small" @click="show2 = false">关闭</gov-button>
		<gov-button size="small" @click="show2 = false" type="primary">确定</gov-button>
	</div>
</gov-popper>

<script setup>
import { ref } from 'vue';
const show2 = ref(false);
</script>```




## Attributes

基于 ```Vue3-popper```开发，但是稍有不同。

<table>
  <thead>
    <tr>
      <th>参数</th>
	  <th>类型</th>
	  <th width="250">可选值</th>
      <th>默认值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
  	<tr>
      <td>modelValue / v-model</td>
	  <td>boolean</td>
	  <td>-</td>
      <td>false</td>
      <td>显示隐藏</td>
    </tr>
    <tr>
      <td>placement</td>
	  <td>string</td>
	  <td>top/top-start/top-end/<br/>bottom/bottom-start/bottom-end/<br/>left/left-start/left-end/<br/>right/right-start/right-end</td>
      <td>bottom</td>
      <td>显示位置。</td>
    </tr>
    <tr>
      <td>clickAwayClose</td>
	  <td>boolean</td>
	  <td>-</td>
      <td>true</td>
      <td>默认点击弹窗层外会关闭弹窗。</td>
    </tr>
    <tr>
      <td>offsetSkid</td>
	  <td>number</td>
	  <td>-</td>
      <td>0</td>
      <td>设置触发元素沿自身方向的偏移像素值。</td>
    </tr>
    <tr>
      <td>offsetDistance</td>
	  <td>number</td>
	  <td>-</td>
      <td>12</td>
      <td>设置距离触发元素的偏移像素值。</td>
    </tr>
    <tr>
      <td>arrow</td>
	  <td>boolean</td>
	  <td>-</td>
      <td>true</td>
      <td>设置为 true 时，在弹出层上显示一个箭头。</td>
    </tr>
    <tr>
      <td>arrowPadding</td>
	  <td>number</td>
	  <td>-</td>
      <td>0</td>
      <td>防止箭头触碰到弹出层边缘的像素值。</td>
    </tr>
    <tr>
      <td>disabled</td>
	  <td>boolean</td>
	  <td>-</td>
      <td>false</td>
      <td>设置为 true 时，禁用弹出层，如果已打开则关闭它。</td>
    </tr>
    <tr>
      <td>openDelay</td>
	  <td>number</td>
	  <td>-</td>
      <td>0</td>
      <td>设置延迟打开弹出层的时间（毫秒）。</td>
    </tr>
    <tr>
      <td>closeDelay</td>
	  <td>number</td>
	  <td>-</td>
      <td>0</td>
      <td>设置延迟关闭弹出层的时间（毫秒）。</td>
    </tr>
    <tr>
      <td>interactive</td>
	  <td>boolean</td>
	  <td>-</td>
      <td>true</td>
      <td>设置为 false 时，点击或悬停在弹出层上不会关闭它。</td>
    </tr>
    <tr>
      <td>content</td>
	  <td>string</td>
	  <td>-</td>
      <td>-</td>
      <td>如果内容是一个简单的字符串，可以直接作为属性传递。</td>
    </tr>
    <tr>
      <td>zIndex</td>
	  <td>number</td>
	  <td>-</td>
      <td>9999</td>
      <td>设置弹出层的 z-index 值，控制层叠顺序。</td>
    </tr>
    <tr>
      <td>locked</td>
	  <td>boolean</td>
	  <td>-</td>
      <td>false</td>
      <td>设置为 true 时，锁定弹出层位置，空间不足时不会动态翻转。</td>
    </tr>
  </tbody>
</table>


## Events
<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th>描述</th>
	  <th>类型</th>
    </tr>
  </thead>
  <tbody>
  	<tr>
      <td>toggle</td>
      <td>显示隐藏变化时触发的事件。</td>
	  <td>Function</td>
    </tr>
    <tr>
      <td>show</td>
      <td>当 Popper 被打开时触发。</td>
	  <td>Function</td>
    </tr>
    <tr>
      <td>hide</td>
      <td>当 Popper 被隐藏时触发。</td>
	  <td>Function</td>
    </tr>
  </tbody>
</table>


## Slots
<table>
  <thead>
    <tr>
      <th>插槽名</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
   <tr>
      <td>default</td>
      <td>Popper 弹出内容。</td>
    </tr>
    <tr>
      <td>reference</td>
      <td>Popper 包裹内容。</td>
    </tr>
  </tbody>
</table>


