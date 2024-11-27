## GovUI 是什么？

欢迎使用 GovUI，一款开箱即用的Vue3 UI。

[GovUI UI 在线文档](https://govui.cc/)

## 文档运行

项目采用 vitepress 搭建文档系统，组件库存放在 packages 目录下，你可以根目录、packages目录分别执行安装：。

```bash
yarn
```

在 packages 目录下执行组件库打包：

```bash
yarn build
```

在根目录下运行文档：

```bash
yarn docs:dev
```

## 组件库安装使用（Install）

```bash
npm install vue-amazing-ui
# or
pnpm add vue-amazing-ui
# or
yarn add vue-amazing-ui
# or
bun add vue-amazing-ui
```

## 如何在项目中使用

两种方式可供选择：

**1、全局引入**

```js
import { createApp } from 'vue'
import App from './App.vue'
import GovUI from 'gov-ui'
import 'gov-ui/styles/index.css'

const app = createApp(App)
app.use(GovUI)
```

**2、按需引入**

```vue
<script setup>
import { Button } from 'vue-amazing-ui'
import 'gov-ui/styles/index.css'
</script>
```

## 所有组件（60+）

以下为不完全统计，以文档为准。

| 组件名 | 简单介绍 |
| --- | --- |
| GovGuoqi | 国旗组件 |
| GovGuohui | 国徽组件 |
| GovDangqi | 党旗组件 |
| GovDanghui | 党徽组件 |
| GovRow | 栅格行布局组件 |
| GovCol | 栅格列布局组件 |
| GovContainer | 容器组件 |
| GovAside | 侧边栏组件 |
| GovFooter | 页脚组件 |
| GovHeader | 页眉组件 |
| GovMain | 主要内容区组件 |
| GovIcon | 图标组件 |
| GovButtonGroup | 按钮组组件 |
| GovButton | 按钮组件 |
| GovLink | 链接组件 |
| GovAlert | 警告提示组件 |
| GovBlockquote | 块引用组件 |
| GovTag | 标签组件 |
| GovEllipsis | 文本省略组件 |
| GovLoading | 加载指示组件 |
| GovForm | 表单组件 |
| GovFormItem | 表单项组件 |
| GovRadioGroup | 单选按钮组组件 |
| GovRadio | 单选按钮组件 |
| GovCheckboxGroup | 复选框组组件 |
| GovCheckbox | 复选框组件 |
| GovInput | 输入框组件 |
| GovInputAuto | 自动完成输入框组件 |
| GovInputNumber | 数字输入框组件 |
| GovTextarea | 文本域组件 |
| GovSelect | 选择器组件 |
| GovSelectOption | 选择器选项组件 |
| GovCascader | 级联选择器组件 |
| GovCascaderPanel | 级联选择器面板组件 |
| GovSwitch | 开关组件 |
| GovDatepicker | 日期选择器组件 |
| GovUpload | 上传组件 |
| GovRate | 评分组件 |
| GovDrawer | 抽屉组件 |
| GovDialog | 对话框组件 |
| GovMessage | 消息提示组件（JavaScript）|
| GovMessageBox | 消息框组件（JavaScript）|
| GovPopper | 弹出层组件 |
| GovPopconfirm | 确认弹出组件 |
| GovTooltip | 文字提示组件 |
| GovNotification | 通知组件（JavaScript）|
| GovAvatar | 头像组件 |
| GovUsercard | 用户卡片组件 |
| GovBadge | 徽章组件 |
| GovCard | 卡片组件 |
| GovCollapse | 折叠面板组件 |
| GovCollapseItem | 折叠面板项组件 |
| GovCollapseTransition | 折叠面板过渡效果组件 |
| GovEmpty | 空状态组件 |
| GovPagination | 分页组件 |
| GovProgress | 进度条组件 |
| GovResult | 结果展示组件 |
| GovTable | 表格组件 |
| GovSwiper | 轮播组件 |
| GovSwiperSlide | 轮播滑块组件（JavaScript）|
| GovTimeline | 时间线组件 |
| GovTimelineItem | 时间线项组件 |
| GovTree | 树形控件组件 |
| GovBacktop | 返回顶部组件 |
| GovBreadcrumb | 面包屑导航组件 |
| GovBreadcrumbItem | 面包屑导航项组件 |
| GovDropdown | 下拉菜单组件 |
| GovDropdownItem | 下拉菜单项组件 |
| GovPageContainer | 页面容器组件 |
| GovSteps | 步骤指示组件 |
| GovStep | 步骤指示项组件 |
| GovTabs | 标签页组件 |
| GovTabPane | 标签页面板组件 |
| GovQrcode | 二维码组件 |
