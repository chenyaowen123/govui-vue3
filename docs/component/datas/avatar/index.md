<script setup>
import avatarBase from "./avatar-base.vue"
import avatarColor from "./avatar-color.vue"
import avatarSize from "./avatar-size.vue"
import avatarCustom from "./avatar-custom.vue"
import avatarHref from "./avatar-href.vue"
</script>

# Avatar 头像


## 基础用法

默认浅色背景，可设置 ```dark``` 为深色背景；```circle``` 可设置为圆形。

<avatarBase />

## 自定义颜色

<avatarColor/>

## 自定义尺寸

<avatarSize/>

## 自定义内容

<avatarCustom/>

## 超链接

当设置 ```href``` 地址后，会渲染为超链接，点击头像可以打开链接地址。

<avatarHref />
