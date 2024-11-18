<script setup>
import usercardBase from "./usercard-base.vue"
import usercardCustom from "./usercard-custom.vue"
</script>

# Usercard 人员信息卡

平台人员信息卡，常用于人员管理。

## 基础使用

该组件结合了 Avatar、Qrcode 组件。```qrcode``` 为可扫码的卡片二维码信息，```avatar``` 为头像地址。

<usercardBase />

## 自定义头部

<usercardCustom />


## Attributes

<table style="width:100%; display:table;">
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
      <td>title</td>
      <td>String</td>
      <td>-</td>
      <td>顶部标题</td>
    </tr>
    <tr>
      <td>avatar</td>
      <td>String</td>
      <td>-</td>
      <td>头像图片的URL</td>
    </tr>
    <tr>
      <td>name</td>
      <td>String</td>
      <td>-</td>
      <td>姓名</td>
    </tr>
    <tr>
      <td>nums</td>
      <td>Number | String</td>
      <td>-</td>
      <td>编号</td>
    </tr>
    <tr>
      <td>place</td>
      <td>String</td>
      <td>-</td>
      <td>工作单位</td>
    </tr>
    <tr>
      <td>job</td>
      <td>String</td>
      <td>-</td>
      <td>职务</td>
    </tr>
    <tr>
      <td>qrcode</td>
      <td>String</td>
      <td>-</td>
      <td>二维码的值</td>
    </tr>
    <tr>
      <td>background</td>
      <td>String</td>
      <td>-</td>
      <td>自定义背景图的URL</td>
    </tr>
    <tr>
      <td>expiration</td>
      <td>String</td>
      <td>-</td>
      <td>有效期</td>
    </tr>
  </tbody>
</table>


## Slots

<table style="width:100%; display:table;">
  <thead>
    <tr>
      <th>Slot Name</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>header</td>
      <td>用于自定义工作证头部内容的插槽。默认情况下，会显示传递给title属性的标题。</td>
    </tr>
  </tbody>
</table>
