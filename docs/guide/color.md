---
outline: deep
---

<script setup>
import colorCard from './assets/colorCard.vue';
const colorPalette = {
	primary: {
		value: "#e74c3c",
		tints: [
			"rgb(237, 120.75, 108.75)",
			"rgb(243, 165.5, 157.5)",
			"rgb(249, 210.25, 206.25)",
		],
	},
	success: {
		value: "#27ae60",
		tints: [
			"rgb(93, 194.25, 135.75)",
			"rgb(147, 214.5, 175.5)",
			"rgb(201, 234.75, 215.25)",
		],
	},
	warning: {
		value: "#f39c12",
		tints: [
			"rgb(246, 180.75, 77.25)",
			"rgb(249, 205.5, 136.5)",
			"rgb(252, 230.25, 195.75)",
		],
	},
	danger: {
		value: "#8e44ad",
		tints: [
			"rgb(170.25, 114.75, 193.5)",
			"rgb(198.5, 161.5, 214)",
			"rgb(226.75, 208.25, 234.5)",
		],
	},
	info: {
		value: "#909399",
		tints: [
			"rgb(171.75, 174, 178.5)",
			"rgb(199.5, 201, 204)",
			"rgb(227.25, 228, 229.5)",
		],
	},
	textColor: {
		value: "#303133",
		tints: [
			"rgb(99.75, 100.5, 102)",
			"rgb(151.5, 152, 153)",
			"rgb(203.25, 203.5, 204)",
		],
	},
	borderColor: {
		value: "#cdd0d6",
		tints: [
			"rgb(217.5, 219.75, 224.25)",
			"rgb(230, 231.5, 234.5)",
			"rgb(242.5, 243.25, 244.75)",
		],
	},
	fillColor: {
		value: "#e6e8eb",
		tints: [
			"rgb(236.25, 237.75, 240)",
			"rgb(242.5, 243.5, 245)",
			"rgb(248.75, 249.25, 250)",
		],
	},
};
</script>


# 色彩控制

GovUI 采用了统一的色彩控制，为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。


## 主色
GovUI 默认的主题色是政府机构指定的红色。

<colorCard
	name="主题色 primary"
	:color="colorPalette.primary.value"
	:list="colorPalette.primary.tints"
/>


## 辅助色

除了主颜色外，不同的场景中使用不同的场景颜色 (例如，慎重的颜色表示这个操作应该慎重)。

<colorCard
	name="成功 success"
	:color="colorPalette.success.value"
	:list="colorPalette.success.tints"
/>

<colorCard
	name="警告 warning"
	:color="colorPalette.warning.value"
	:list="colorPalette.warning.tints"
/>

<br/>

<colorCard
	name="慎重 danger"
	:color="colorPalette.danger.value"
	:list="colorPalette.danger.tints"
/>

<colorCard
	name="内容 info"
	:color="colorPalette.info.value"
	:list="colorPalette.info.tints"
/>

## 其它
用于文本、背景和边框颜色。 通过运用不同的中性色，来表现层次结构。

<colorCard
	name="文本颜色 text"
	:color="colorPalette.textColor.value"
	:list="colorPalette.textColor.tints"
/>

<colorCard
	name="边框色 border"
	blackText
	:color="colorPalette.borderColor.value"
	:list="colorPalette.borderColor.tints"
/>

<br />
<colorCard
	name="填充色 fill"
	blackText
	:color="colorPalette.fillColor.value"
	:list="colorPalette.fillColor.tints"
/>

## SCSS控制
GovUI使用Scss编写而成，内部的颜色控制非常简洁，如果你熟悉Scss来控制你的样式，那么你将非常容易上手。

### 内部实现

```sass
// 色彩控制
@use "sass:math";

$colors: (
	"primary": #e74c3c,
	"success": #27ae60,
	"warning": #f39c12,
	"danger": #8e44ad,
	"info": #909399,
	"text-color": #303133,
	"border-color": #cdd0d6,
	"fill-color": #e6e8eb
) !default;

:root {
    @each $color-name, $color-value in $colors {
        --gov-#{$color-name}: #{$color-value};
        @for $i from 1 through 3 {
            $percentage: math.div($i * 25, 100); // 计算百分比（25%, 50%, 75%）
            $color-tint: mix(white, $color-value, $percentage * 100%); // 混合颜色
            --gov-#{$color-name}-#{$i}: #{$color-tint};
        }
    }
}
```
### 如何覆盖？
如果您的项目也使用了 Scss，可以直接修改 GovUI 的样式变量。

新建Scss文件```./custom/index.scss```，内容如下：

```Scss
/* 只需要重写部分变量即可 */
@forward 'GovUI/styles/variables.scss' with (
  $colors: (
    "primary": #e74c3c,
  ),
);
```

在引入GovUI的时候，引入文件```./custom/index.scss```，代码如下：
```js
/* main.js */
import { createApp } from 'vue'
import './styles/custom/index.scss'
import GovUI from 'GovUI'
import App from './App.vue'

const app = createApp(App)
app.use(GovUI)
```

## CSS控制

### CSS全局变量
CSS全局变量，也称为CSS自定义属性（Custom Properties），允许你在CSS中定义可复用的值。这些变量可以在不同的选择器中使用，提高样式的一致性和可维护性。

GovUI使用了这一点，Scss只是生成了这些CSS全局变量的初始值，如下：

```css
/* Scss默认生成的所有css全局变量 */
:root {
  --gov-primary: #e74c3c;
  --gov-primary-1: rgb(237, 120.75, 108.75);
  --gov-primary-2: rgb(243, 165.5, 157.5);
  --gov-primary-3: rgb(249, 210.25, 206.25);

  --gov-success: #27ae60;
  --gov-success-1: rgb(93, 194.25, 135.75);
  --gov-success-2: rgb(147, 214.5, 175.5);
  --gov-success-3: rgb(201, 234.75, 215.25);

  --gov-warning: #f39c12;
  --gov-warning-1: rgb(246, 180.75, 77.25);
  --gov-warning-2: rgb(249, 205.5, 136.5);
  --gov-warning-3: rgb(252, 230.25, 195.75);

  --gov-danger: #8e44ad;
  --gov-danger-1: rgb(170.25, 114.75, 193.5);
  --gov-danger-2: rgb(198.5, 161.5, 214);
  --gov-danger-3: rgb(226.75, 208.25, 234.5);

  --gov-info: #909399;
  --gov-info-1: rgb(171.75, 174, 178.5);
  --gov-info-2: rgb(199.5, 201, 204);
  --gov-info-3: rgb(227.25, 228, 229.5);

  --gov-text-color: #303133;
  --gov-text-color-1: rgb(99.75, 100.5, 102);
  --gov-text-color-2: rgb(151.5, 152, 153);
  --gov-text-color-3: rgb(203.25, 203.5, 204);

  --gov-border-color: #cdd0d6;
  --gov-border-color-1: rgb(217.5, 219.75, 224.25);
  --gov-border-color-2: rgb(230, 231.5, 234.5);
  --gov-border-color-3: rgb(242.5, 243.25, 244.75);

  --gov-fill-color: #e6e8eb;
  --gov-fill-color-1: rgb(236.25, 237.75, 240);
  --gov-fill-color-2: rgb(242.5, 243.5, 245);
  --gov-fill-color-3: rgb(248.75, 249.25, 250);
}
```

### 使用js动态更改
普通项目推荐使用Scss控制主题色，而如果你需要js动态更改主题色，你只需要执行类似以下js代码即可：
```js
// 设置新的 --gov-primary 值
document.documentElement.style.setProperty('--gov-primary', '#c0392b');
```
