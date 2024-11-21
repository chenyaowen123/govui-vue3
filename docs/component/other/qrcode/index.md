<script setup>
import qrcodeBase from "./qrcode-base.vue"
import qrcodeSize from "./qrcode-size.vue"
import qrcodeColor from "./qrcode-color.vue"
</script>
# Qrcode 二维码

常用于链接/文字转换为二维码。

## 基础使用

设置 ```value``` 即可快速生成二维码。

<qrcodeBase />


## 二维码控制

可以自由设置二维码尺寸和是否有边框，你也可以直接对组件使用样式。

<qrcodeSize />

## 自定义颜色

自定义二维码颜色和背景色。

<qrcodeColor/>
