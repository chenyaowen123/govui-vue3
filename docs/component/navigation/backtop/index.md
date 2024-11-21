<script setup>
import backtopBase from "./backtop-base.vue"
import backtopCustom from "./backtop-custom.vue"
</script>

# Backtop 返回顶部

任意容器返回顶部。常见于项目需要返回顶部时。

## 基础用法

+ 当指定 ```target``` 时，组件会对其滚动事件做监听，值可以是 id 或者 class。
+ 不指定 ```target``` 时，组件默认会从**组件调用位置**开始向上查找到最近的滚动元素。
+ 组件默认会渲染在 body 下，可以设置 ```popperAppendToBody``` 关闭或者打开。

<backtopBase />

```vue
<template>
	<gov-backtop />
</template>
```


## 自定义显示

通过默认插槽可以自定义一个返回顶部。

<backtopCustom />

```vue
<template>
	<gov-backtop bottom="100">
		<div class="gov-demo-backtop__custom">
			<img src="./top.png" alt="返回顶部" />
		</div>
	</gov-backtop>
</template>
```

## 更多拓展

如果你有更多自定义，例如你需要一个咨询按钮和返回并排，你也可以在咨询按钮标签上设置 ```@click.stop``` 来阻止冒泡，仅把 ```Backtop``` 当做一个容器。

## Attributes

<table>
  <thead>
    <tr>
      <th>参数</th>
      <th width="150">类型</th>
      <th width="100">默认值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>visibilityHeight</td>
      <td>Number</td>
      <td>200</td>
      <td>滚动时触发显示回到顶部按钮的高度，单位 px。</td>
    </tr>
    <tr>
      <td>target</td>
      <td>String</td>
      <td>""</td>
      <td>指定滚动的目标元素，可以是 CSS 选择器或元素 ID。如不设置，则默认从组件调用位置开始，向上查找第一个滚动元素。</td>
    </tr>
    <tr>
      <td>right</td>
      <td>Number / String</td>
      <td>40</td>
      <td>回到顶部按钮距离页面右侧的距离，支持数字和字符串（如 40 , '40px'）。</td>
    </tr>
    <tr>
      <td>bottom</td>
      <td>Number / String</td>
      <td>40</td>
      <td>回到顶部按钮距离页面底部的距离，支持数字和字符串（如 40 , '40px'）。</td>
    </tr>
    <tr>
      <td>zIndex</td>
      <td>Number</td>
      <td>2000</td>
      <td>回到顶部按钮的 z-index 层级。</td>
    </tr>
    <tr>
      <td>appendToBody</td>
      <td>Boolean</td>
      <td>true</td>
      <td>是否将组件挂载到 body 上。</td>
    </tr>
  </tbody>
</table>


## Events

<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>backtop</td>
      <td>点击返回顶部事件。</td>
    </tr>
  </tbody>
</table>


## Slots

<table>
  <thead>
    <tr>
      <th>插槽</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>自定义返回顶部的内容显示。</td>
    </tr>
  </tbody>
</table>
