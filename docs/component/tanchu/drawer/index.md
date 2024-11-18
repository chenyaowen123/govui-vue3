<script setup>
import drawerBase from "./drawer-base.vue"
import drawerModal from "./drawer-modal.vue"
</script>

# Drawer 抽屉

相较于 Dialog 组件拥有更大操作空间，常用于系统操作区。

## 基础使用

设置 ```at``` 可控制弹出位置。
<hr/>
<drawerBase />

## 遮罩层

设置 ```modal``` 可控制是否有遮罩层； 设置 ```drawerModal``` 可控制点击遮罩层是否触发关闭。


<drawerModal />

