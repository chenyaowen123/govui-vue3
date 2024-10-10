---
outline: deep
---

<script setup>
import colorCard from './colorCard.vue';
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
	name="文本颜色"
	:color="colorPalette.textColor.value"
	:list="colorPalette.textColor.tints"
/>

<colorCard
	name="边框色"
	blackText
	:color="colorPalette.borderColor.value"
	:list="colorPalette.borderColor.tints"
/>

<br />
<colorCard
	name="填充色"
	blackText
	:color="colorPalette.fillColor.value"
	:list="colorPalette.fillColor.tints"
/>

