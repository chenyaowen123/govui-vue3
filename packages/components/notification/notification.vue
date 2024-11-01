<template>
	<transition
		name="gov-notification-fade"
		@before-enter="handleBeforeEnter"
		@before-leave="handleBeforeLeave"
		@after-enter="handleAfterEnter"
		@after-leave="handleAfterLeave"
	>
		<div
			:class="[
				'gov-notification',
				`gov-notification--${type}`,
				closable ? 'is-closable' : '',
				horizontalClass,
				verticalClass,
				customClass,
			]"
			v-show="visible"
			@mouseenter="clearTimer"
			@mouseleave="startTimer"
		>
			<div class="gov-notification__title">
				<GovIcon :name="iconName" class="gov-notification__lefticon" />
				<div class="gov-notification__title-txt">{{ title }}</div>
				<GovIcon
					class="gov-notification__closeBtn"
					name="close"
					v-if="closable"
					@click="visible = false"
				/>
			</div>
			<slot>
				<div v-html="content" class="gov-notification__content"></div>
			</slot>
		</div>
	</transition>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import GovIcon from "../icon/icon.vue";

defineOptions({
	name: "GovNotification",
});

const props = defineProps({
	// 标题
	title: {
		type: String,
		default: "提示",
	},
	content: String, // 消息内容
	duration: {
		type: Number,
		default: 3000, // 显示时长
	},
	type: {
		type: String,
		default: "default",
		validator: (value) => {
			return [
				"default",
				"primary",
				"success",
				"info",
				"warning",
				"danger",
			].includes(value);
		},
	},
	position: {
		type: String,
		validator: (value) => {
			return [
				"top-right",
				"top-left",
				"bottom-right",
				"bottom-left",
			].includes(value);
		},
		default: "top-right",
	},
	icon: String, // icon名称
	customClass: String, // 自定义class
	onBeforeOpen: Function, // 打开前
	onOpend: Function, // 打开后
	onBeforeClose: Function, // 关闭前
	onClosed: Function, // 关闭后
	// 是否显示关闭
	closable: {
		type: Boolean,
		default: true,
	},
});

const visible = ref(false);
const timer = ref(null);

onMounted(() => {
	visible.value = true;
});

// 位置
const horizontalClass = computed(() =>
	props.position.endsWith("right") ? "at-right" : "at-left",
);
const verticalClass = computed(() =>
	props.position.startsWith("top") ? "at-top" : "at-bottom",
);

// 图标
const iconName = computed(() => {
	if (props.icon) {
		return props.icon;
	} else if (props.type) {
		if (!["default", "primary"].includes(props.type)) {
			return props.type;
		}
	}
	return "message-solid";
});

// 计时
const startTimer = () => {
	if (props.duration > 0) {
		timer.value = setTimeout(() => {
			visible.value = false;
		}, props.duration);
	}
};

// 关闭计时
const clearTimer = () => {
	clearTimeout(timer.value);
};

// 打开前
const handleBeforeEnter = () => {
	props.onBeforeOpen?.();
};

// 打开后
const handleAfterEnter = () => {
	startTimer();
	props.onOpend?.();
};

// 关闭前
const handleBeforeLeave = () => {
	props.onBeforeClose?.();
};

// 关闭后
const handleAfterLeave = () => {
	clearTimeout(timer.value);
	props.onClosed?.();
};

// 销毁时清理
onBeforeUnmount(() => {
	clearTimeout(timer.value);
});

// 关闭
const close = () => {
	visible.value = false;
};

// 给外层提供关闭调用
defineExpose({
	close,
});
</script>

<style lang="scss">
@import "./notification.scss";
</style>
