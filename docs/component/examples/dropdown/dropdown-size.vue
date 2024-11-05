<template>
	<demo-container class="gov-demo-dropdown">
		<div>
			<gov-radio-group button v-model="size">
				<gov-radio value="large">大菜单</gov-radio>
				<gov-radio value="default">默认菜单</gov-radio>
				<gov-radio value="small">小菜单</gov-radio>
			</gov-radio-group>
			&nbsp;&nbsp;&nbsp;
			<gov-checkbox v-model="hideAfterClick">
				点击下拉菜单后是否关闭
			</gov-checkbox>
			<gov-checkbox v-model="disabled">是否禁用</gov-checkbox>
			<gov-checkbox v-model="center">居中布局</gov-checkbox>
		</div>
		<hr />
		<gov-dropdown
			v-model="visible"
			:size="size"
			:hideAfterClick="hideAfterClick"
			:disabled="disabled"
			:center="center"
		>
			<gov-button @click="visible = !visible">下拉菜单</gov-button>
			<template #dropdown>
				<gov-dropdown-item icon="user"> 个人中心 </gov-dropdown-item>
				<gov-dropdown-item icon="phone" disabled>
					联系我们
				</gov-dropdown-item>
				<gov-dropdown-item icon="setting" divided>
					退出平台
				</gov-dropdown-item>
			</template>
		</gov-dropdown>
		<template #console>
			visible: {{ visible }} <br />
			size: {{ size }} <br />
			hideAfterClick: {{ hideAfterClick }} <br />
			disabled: {{ disabled }}<br />
			center: {{ center }}
		</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const visible = ref(false);
const size = ref("default");
const hideAfterClick = ref(false);
const disabled = ref(false);
const center = ref(true);
</script>

<style lang="scss">
.gov-demo-dropdown .gov-dropdown-item {
	min-width: 100px;
}
</style>
