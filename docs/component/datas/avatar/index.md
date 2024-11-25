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

::: details 查看代码
<<< ./avatar-base.vue{vue:line-numbers}
:::


## 自定义颜色

默认填充颜色为浅色背景，可自定义背景色。

<avatarColor/>

::: details 查看代码
<<< ./avatar-color.vue{vue:line-numbers}
:::



## 自定义尺寸

除了 `small`、`default`、`large` 以外，还可以设置以像素为单位的头像大小。

<avatarSize/>

::: details 查看代码
<<< ./avatar-size.vue{12 vue:line-numbers}
:::



## 自定义内容

多种内容定义，可以定义 `icon`、自定义内容、或者图片 `src`。

<avatarCustom/>

::: details 查看代码
<<< ./avatar-custom.vue{vue:line-numbers}
:::



## 超链接

当设置 ```href``` 地址后，会渲染为超链接，点击头像可以打开链接地址。

<avatarHref />

::: details 查看代码
<<< ./avatar-href.vue{vue:line-numbers}
:::


## Attributes

<table>
  <thead>
    <tr>
      <th>属性名</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>color</td>
      <td>背景颜色</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>circle</td>
      <td>是否为圆形</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>size</td>
      <td>大小</td>
      <td>Number/String</td>
      <td>'small', 'default', 'large' 或 Number（像素值）</td>
      <td>"default"</td>
    </tr>
    <tr>
      <td>dark</td>
      <td>是否深背景</td>
      <td>Boolean</td>
      <td>true, false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>src</td>
      <td>图片地址</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>图标名称</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>href</td>
      <td>链接地址</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>target</td>
      <td>链接打开目标</td>
      <td>String</td>
      <td>—</td>
      <td>"_blank"</td>
    </tr>
  </tbody>
</table>

## Events

<table>
  <thead>
    <tr>
      <th>事件名</th>
      <th>说明</th>
      <th>回调参数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>click</td>
      <td>点击头像时触发</td>
      <td>事件对象</td>
    </tr>
  </tbody>
</table>

## Slots

<table>
  <thead>
    <tr>
      <th>插槽名</th>
      <th>说明</th>
      <th>作用域插槽</th>
      <th>内容</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>icon</td>
      <td>自定义图标</td>
      <td>是</td>
      <td>可以放置自定义图标或图片。</td>
    </tr>
    <tr>
      <td>default</td>
      <td>默认插槽</td>
      <td>否</td>
      <td>可以放置文本或子组件。</td>
    </tr>
  </tbody>
</table>
