---
outline: deep
aside: false
---

# Alert 警告

用于页面中展示重要的提示信息。


## 基本用法

默认为朴素风格。

<demo-container class="demo-gov-alert">
<gov-alert title="消息提示的文案"/>
<gov-alert title="成功提示的文案" type="success"/>
<gov-alert title="警告提示的文案" type="warning"/>
<gov-alert title="危险提示的文案" type="danger"/>
</demo-container>

```md
<gov-alert title="消息提示的文案"/>
<gov-alert title="成功提示的文案" type="success"/>
<gov-alert title="警告提示的文案" type="warning"/>
<gov-alert title="危险提示的文案" type="danger"/>
```



## 朴素风格

<demo-container class="demo-gov-alert">
<gov-alert plain title="消息提示的文案"/>
<gov-alert plain title="成功提示的文案" type="success"/>
<gov-alert plain title="警告提示的文案" type="warning"/>
<gov-alert plain title="危险提示的文案" type="danger"/>
</demo-container>

```md
<gov-alert plain title="消息提示的文案"/>
<gov-alert plain title="成功提示的文案" type="success"/>
<gov-alert plain title="警告提示的文案" type="warning"/>
<gov-alert plain title="危险提示的文案" type="danger"/>
```



## 辅助性文字介绍

<demo-container class="demo-gov-alert">
<gov-alert plain title="秦风·蒹葭" description="蒹葭苍苍，白露为霜。所谓伊人，在水一方。"/>
<gov-alert plain type="success" title="秦风·蒹葭" description="蒹葭苍苍，白露为霜。所谓伊人，在水一方。"/>
</demo-container>

```md
<gov-alert plain title="秦风·蒹葭" description="蒹葭苍苍，白露为霜。所谓伊人，在水一方。"/>
<gov-alert plain type="success" plain title="秦风·蒹葭" description="蒹葭苍苍，白露为霜。所谓伊人，在水一方。"/>
```

## 带有Icon

<demo-container class="demo-gov-alert">
<gov-alert plain showIcon title="消息提示的文案"/>
<gov-alert plain showIcon title="成功提示的文案" type="success"/>
<gov-alert plain showIcon title="警告提示的文案" type="warning"/>
<gov-alert plain showIcon title="危险提示的文案" type="danger"/>
<gov-alert showIcon title="秦风·蒹葭" description="蒹葭苍苍，白露为霜。所谓伊人，在水一方。"/>
</demo-container>

```md
<gov-alert plain showIcon title="消息提示的文案"/>
<gov-alert plain showIcon title="成功提示的文案" type="success"/>
<gov-alert plain showIcon title="警告提示的文案" type="warning"/>
<gov-alert plain showIcon title="危险提示的文案" type="danger"/>
<!-- 当设置 description 或者默认插槽时，Icon自动变大 -->
<gov-alert showIcon title="秦风·蒹葭" description="蒹葭苍苍，白露为霜。所谓伊人，在水一方。"/>
```

## 自定义内容

你可以在默认插槽内自定义html。

<demo-container class="demo-gov-alert">
<gov-alert showIcon title="提示">
蒹葭<sub><i>(一种植物)</i></sub>苍苍，白露为霜。所谓伊人，在水一方。<br/>
溯洄从之,道阻且长;溯游从之,宛在水中央。
</gov-alert>
</demo-container>

```md
<gov-alert showIcon title="提示">
	蒹葭<sub><i>(一种植物)</i></sub>苍苍，白露为霜。所谓伊人，在水一方。<br/>
	溯洄从之,道阻且长;溯游从之,宛在水中央。
</gov-alert>
```
