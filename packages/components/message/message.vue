<template>
	<transition
		name="gov-message-fade"
		@before-enter="handleBeforeEnter"
		@before-leave="handleBeforeLeave"
		@after-enter="handleAfterEnter"
		@after-leave="handleAfterLeave"
	>
		<div
			:class="[
				'gov-message',
				`gov-message--${type}`,
				closable ? 'is-closable' : '',
				customClass,
			]"
			v-show="visible"
			@mouseenter="clearTimer"
			@mouseleave="startTimer"
		>
			<GovIcon :name="iconName" />
			<slot>
				<div v-html="message" class="gov-message__content"></div>
			</slot>
			<GovIcon
				class="gov-message__closeBtn"
				name="close"
				size="14"
				v-if="closable"
				@click="visible = false"
			/>
		</div>
	</transition>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import GovIcon from "../icon/icon.vue";

defineOptions({
	name: "GovMessage",
});

const props = defineProps({
	message: String, // 消息内容
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
	icon: String, // icon名称
	customClass: String, // 自定义class
	onBeforeOpen: Function, // 打开前
	onOpend: Function, // 打开后
	onBeforeClose: Function, // 关闭前
	onClosed: Function, // 关闭后
	closable: Boolean, // 是否显示关闭
});

const visible = ref(false);
const timer = ref(null);

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

onMounted(() => {
	visible.value = true;
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
@use "./message.scss";
</style>
