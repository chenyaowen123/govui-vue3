<template>
	<component
		:is="props.href ? 'a' : 'div'"
		class="gov-avatar"
		:class="avatarClasses"
		:style="avatarStyle"
		:href="props.href"
		:target="props.target"
		@click="handleClick"
	>
		<img v-if="props.src" :src="props.src" class="gov-avatar__image" />
		<span v-else-if="props.icon || $slots.icon" class="gov-avatar__icon">
			<slot name="icon">
				<GovIcon :name="props.icon" />
			</slot>
		</span>
		<span v-else class="gov-avatar__string">
			<slot></slot>
		</span>
	</component>
</template>

<script setup>
import { computed } from "vue";
import GovIcon from "../icon/icon.vue";

defineOptions({
	name: "GovAvatar",
});

const props = defineProps({
	color: String,
	circle: Boolean, // 是否为圆形
	size: {
		type: [Number, String],
		default: "default", // 设置大小，当为number的时候，应该是px单位的，'small', 'default', 'large',
	},
	dark: Boolean, // 深背景
	src: String,
	icon: String,
	href: String, // 是否为href链接
	target: {
		type: String,
		default: "_blank",
	},
});

const avatarClasses = computed(() => {
	return {
		"gov-avatar--circle": props.circle,
		"gov-avatar--square": !props.circle,
		"gov-avatar--dark": props.dark,
		"gov-avatar--size-small": props.size === "small",
		"gov-avatar--size-default": props.size === "default",
		"gov-avatar--size-large": props.size === "large",
		"gov-avatar--size-custom": typeof props.size === "number",
		"gov-avatar--image": props.src,
	};
});

// 自定义大小。如果size是数字，用size计算样式
const avatarStyle = computed(() => {
	let style = {};
	if (typeof props.size === "number") {
		style = {
			width: `${props.size}px`,
			height: `${props.size}px`,
			lineHeight: `${props.size}px`,
			fontSize: `${props.size / 2}px`,
		};
	}
	if (props.color) {
		style.backgroundColor = props.color;
	}
	return style;
});

// click事件
const emit = defineEmits(["click"]);
function handleClick(e) {
	emit("click", e);
}
</script>

<style lang="scss" scoped>
@import "./avatar.scss";
</style>
