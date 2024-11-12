<template>
	<div class="gov-usercard" :style="style">
		<div class="gov-usercard__header">
			<slot name="header">
				<div class="gov-usercard__header-title">{{ title }}</div>
			</slot>
		</div>
		<gov-avatar
			class="gov-usercard__avatar"
			:src="avatar"
			icon="user"
			:size="100"
		/>
		<gov-qrcode
			:value="qrcode"
			class="gov-usercard__qrcode"
			:border="false"
			:size="60"
		/>
		<div class="gov-usercard__text">
			<div class="gov-usercard__text-name">姓名：{{ name }}</div>
			<div class="gov-usercard__text-place">单位：{{ place }}</div>
			<div class="gov-usercard__text-job">职务：{{ job }}</div>
			<div class="gov-usercard__text-nums">编号：{{ nums }}</div>
		</div>
		<div class="gov-usercard__footer">
			<div>有效期：{{ expiration }}</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from "vue";

defineOptions({
	name: "GovUsercard",
});

const props = defineProps({
	title: String, // 顶部标题
	avatar: String, // 头像
	name: String, // 姓名
	nums: [Number, String], // 编号
	place: String, // 工作单位
	job: String, // 工作
	qrcode: String, // 二维码
	background: String, // 自定义背景图
	expiration: String, // 有效期
});

const style = computed(() => {
	return {
		background: props.background,
	};
});
</script>

<style lang="scss">
@import "./usercard.scss";
</style>
