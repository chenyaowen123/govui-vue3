---
outline: deep
aside: false
---

# Radio 单选

在一组备选项中进行备选项

<script setup>
import { ref } from 'vue'
const radio = ref('1');
</script>


## 基础用法

你可以使用 ```label``` 或者 ```<slot/>``` 两种方式定义其中内容。

<demo-container class="demo-gov-form">
	<gov-radio v-model="radio" value="1" label="选项1"/>
	<gov-radio v-model="radio" value="2" label="选项2"/>
	<gov-radio v-model="radio" value="3">选项3</gov-radio>
</demo-container>

```md
<template>
	<gov-radio v-model="radio" value="1" label="选项1"/>
	<gov-radio v-model="radio" value="2" label="选项2"/>
	<gov-radio v-model="radio" value="3">选项3</gov-radio>
</template>

<script setup>
import { ref } from 'vue'
const radio = ref('1');
</script>
```

## 禁用状态

备选项框不可用的状态。

<demo-container class="demo-gov-form">
	<gov-radio disabled v-model="radio" value="1">备选项</gov-radio>
	<gov-radio disabled v-model="radio" value="2">备选项</gov-radio>
	<gov-radio disabled v-model="radio" value="3">备选项</gov-radio>
</demo-container>

```md
<template>
	<gov-radio disabled v-model="radio" value="1">禁用状态</gov-radio>
	<gov-radio disabled v-model="radio" value="2">禁用状态</gov-radio>
	<gov-radio disabled v-model="radio" value="3">禁用状态</gov-radio>
</template>

<script setup>
import { ref } from 'vue'
const radio = ref('1');
</script>
```

## 边框与大小

默认没有尺寸设计，只有设置边框后才能看到设置不同尺寸。

<demo-container class="demo-gov-form">
	<gov-radio-group border v-model="radio" size="large">
		<gov-radio value="1">备选项</gov-radio>
		<gov-radio value="2">备选项</gov-radio>
		<gov-radio value="3">备选项</gov-radio>
	</gov-radio-group>
	<br/>
	<br/>
	<gov-radio-group border v-model="radio">
		<gov-radio value="1">备选项</gov-radio>
		<gov-radio value="2">备选项</gov-radio>
		<gov-radio value="3">备选项</gov-radio>
	</gov-radio-group>
	<br/>
	<br/>
	<gov-radio-group border v-model="radio" size="small">
		<gov-radio value="1">备选项</gov-radio>
		<gov-radio value="2">备选项</gov-radio>
		<gov-radio value="3">备选项</gov-radio>
	</gov-radio-group>
</demo-container>

```md
<template>
	<gov-radio-group border v-model="radio" size="large">
		<gov-radio value="1">备选项</gov-radio>
		<gov-radio value="2">备选项</gov-radio>
		<gov-radio value="3">备选项</gov-radio>
	</gov-radio-group>
	<gov-radio-group border v-model="radio">
		<gov-radio value="1">备选项</gov-radio>
		<gov-radio value="2">备选项</gov-radio>
		<gov-radio value="3">备选项</gov-radio>
	</gov-radio-group>
	<gov-radio-group border v-model="radio" size="small">
		<gov-radio value="1">备选项</gov-radio>
		<gov-radio value="2">备选项</gov-radio>
		<gov-radio value="3">备选项</gov-radio>
	</gov-radio-group>
</template>

<script setup>
import { ref } from 'vue'
const radio = ref('1');
</script>
```





## 按钮样式

按钮样式的单选组合。

<demo-container class="demo-gov-form">
	<gov-radio-group v-model="radio" size="large">
		<gov-radio-button value="1">备选项</gov-radio-button>
		<gov-radio-button value="2">备选项</gov-radio-button>
		<gov-radio-button value="3">备选项</gov-radio-button>
	</gov-radio-group>
	<br/>
	<br/>
	<gov-radio-group v-model="radio">
		<gov-radio-button value="1">备选项</gov-radio-button>
		<gov-radio-button value="2" disabled>备选项</gov-radio-button>
		<gov-radio-button value="3">备选项</gov-radio-button>
	</gov-radio-group>
	<br/>
	<br/>
	<gov-radio-group v-model="radio" size="small" disabled>
		<gov-radio-button value="1">备选项</gov-radio-button>
		<gov-radio-button value="2">备选项</gov-radio-button>
		<gov-radio-button value="3">备选项</gov-radio-button>
	</gov-radio-group>
</demo-container>

```md
<template>
	<gov-radio-group v-model="radio" size="large">
		<gov-radio-button value="1">备选项</gov-radio-button>
		<gov-radio-button value="2">备选项</gov-radio-button>
		<gov-radio-button value="3">备选项</gov-radio-button>
	</gov-radio-group>
	<gov-radio-group v-model="radio">
		<gov-radio-button value="1">备选项</gov-radio-button>
		<gov-radio-button value="2" disabled>备选项</gov-radio-button>
		<gov-radio-button value="3">备选项</gov-radio-button>
	</gov-radio-group>
	<gov-radio-group v-model="radio" size="small" disabled>
		<gov-radio-button value="1">备选项</gov-radio-button>
		<gov-radio-button value="2">备选项</gov-radio-button>
		<gov-radio-button value="3">备选项</gov-radio-button>
	</gov-radio-group>
</template>

<script setup>
import { ref } from 'vue'
const radio = ref('1');
</script>
```



## Radio Attributes

<table style="width:100%; display:table;">
  <thead>
    <tr>
      <th>属性</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>model-value / v-model</td>
      <td>绑定值</td>
      <td>string / number / boolean</td>
      <td>—</td>
      <td>—</td>
    </tr>
	<tr>
      <td>value</td>
      <td>单选框的值</td>
      <td>string / number / boolean</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>label</td>
      <td>内容文本</td>
      <td>string / number</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>border</td>
      <td>是否显示边框</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size</td>
      <td>Radio 的尺寸，仅在 border 为真时有效</td>
      <td>string</td>
      <td>large / default / small</td>
      <td>—</td>
    </tr>
    <tr>
      <td>name</td>
      <td>原生 name 属性</td>
      <td>string</td>
      <td>—</td>
      <td>—</td>
    </tr>
  </tbody>
</table>

## Radio Events

<table style="width:100%; display:table;">
  <thead>
    <tr>
      <th>事件名</th>
      <th>说明</th>
      <th>类型</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>change</td>
      <td>绑定值变化时触发的事件</td>
      <td>Function</td>
    </tr>
  </tbody>
</table>

## Radio Slots

<table style="width:100%; display:table;">
  <thead>
    <tr>
      <th>插槽名</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>自定义默认内容</td>
    </tr>
  </tbody>
</table>


## Radio-group Attributes


<table style="width:100%; display:table;">
  <thead>
    <tr>
      <th>属性</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>model-value / v-model</td>
      <td>绑定值</td>
      <td>string / number / boolean</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>border</td>
      <td>是否显示边框</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size</td>
      <td>Radio 的尺寸，仅在 border 为真时有效</td>
      <td>string</td>
      <td>large / default / small</td>
      <td>—</td>
    </tr>
  </tbody>
</table>

## Radio-group Events

<table style="width:100%; display:table;">
  <thead>
    <tr>
      <th>事件名</th>
      <th>说明</th>
      <th>类型</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>change</td>
      <td>绑定值变化时触发的事件</td>
      <td>Function</td>
    </tr>
  </tbody>
</table>


## Radio-button Attributes

<table style="width:100%; display:table;">
  <thead>
    <tr>
      <th>属性</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
	<tr>
      <td>value</td>
      <td>单选按钮的值</td>
      <td>string / number / boolean</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>name</td>
      <td>原生 name 属性</td>
      <td>string</td>
      <td>—</td>
      <td>—</td>
    </tr>
  </tbody>
</table>
