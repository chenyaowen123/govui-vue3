<template>
	<demo-container>
		<gov-dropdown v-model="visible">
			<gov-button @click="visible = !visible">下拉菜单</gov-button>
			<template #dropdown>
				<gov-dropdown-item>个人中心</gov-dropdown-item>
				<gov-dropdown-item disabled>联系我们</gov-dropdown-item>
				<gov-dropdown-item divided>退出平台</gov-dropdown-item>
			</template>
		</gov-dropdown>
		<template #console> visible: {{ visible }} </template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const visible = ref(false);
</script>

<style lang="scss"></style>
