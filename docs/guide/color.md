---
outline: deep
---

<script setup>
import colorCard from './assets/colorCard.vue';
const colorPalette = {
	primary: "#e74c3c",
	success: "#27ae60",
	warning: "#f39c12",
	danger: "#8e44ad",
	info:"#909399",
	textColor: "#303133",
	borderColor: "#cdd0d6",
	fillColor: "#e6e8eb",
};
</script>


# 色彩控制

GovUI 采用了统一的色彩控制，为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。


## 主色
GovUI 默认的主题色是政府机构指定的红色。

<colorCard name="主题色 primary" :color="colorPalette.primary"/>


## 辅助色

除了主颜色外，不同的场景中使用不同的场景颜色 (例如，慎重的颜色表示这个操作应该慎重)。

<colorCard name="成功 success" :color="colorPalette.success"/>

<colorCard name="警告 warning" :color="colorPalette.warning"/>

<br/>

<colorCard name="慎重 danger" :color="colorPalette.danger"/>

<colorCard name="内容 info" :color="colorPalette.info"/>

## 其它
用于文本、背景和边框颜色。 通过运用不同的中性色，来表现层次结构。

<colorCard name="文本颜色 text" :color="colorPalette.textColor"/>

<colorCard name="边框色 border" blackText :color="colorPalette.borderColor"/>

<br />
<colorCard name="填充色 fill" blackText :color="colorPalette.fillColor"/>

## 更改颜色

### 内部实现

GovUI的样式使用Scss编写而成，内部的颜色控制非常简洁，它生成了一些必要的CSS变量。

::: details 查看sass代码
<<< ../../packages/styles/base.scss{scss:line-numbers}
:::

### CSS全局变量

你也可以使用CSS变量，也称为CSS自定义属性（Custom Properties），允许你在CSS中定义可复用的值。这些变量可以在不同的选择器中使用，提高样式的一致性和可维护性。

GovUI使用了这一点，Scss只是生成了这些CSS全局变量的初始值，以```primary```举例，如下：

```css
/* Scss默认生成的css全局变量 */
:root {
  --gov-primary-dark: rgb(173.25, 57, 45);
  --gov-primary: #e74c3c;
  --gov-primary-1: rgb(233.4, 93.9, 79.5);
  --gov-primary-2: rgb(235.8, 111.8, 99);
  --gov-primary-3: rgb(238.2, 129.7, 118.5);
  --gov-primary-4: rgb(240.6, 147.6, 138);
  --gov-primary-5: rgb(243, 165.5, 157.5);
  --gov-primary-6: rgb(245.4, 183.4, 177);
  --gov-primary-7: rgb(247.8, 201.3, 196.5);
  --gov-primary-8: rgb(250.2, 219.2, 216);
  --gov-primary-9: rgb(252.6, 237.1, 235.5);
  ...
}
```
其它以此类推，更多可使用浏览器开发工具查看。

### 使用CSS覆盖

新建一个style.css文件，替换CSS变量：

```css
:root {
  --gov-primary: red;
}
```

在组件样式下方引入：

```js
...
import "GovUI/dist/index.css";
import "path/to/your/module/style.css"; // style.css 文件地址
...
```

### 使用js动态更改
普通项目推荐使用Scss控制主题色，而如果你需要js动态更改主题色，你只需要执行类似以下js代码即可：
```js
// 设置新的 --gov-primary 值
document.documentElement.style.setProperty('--gov-primary', '#c0392b');
```
