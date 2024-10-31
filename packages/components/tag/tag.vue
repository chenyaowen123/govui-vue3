<template>
	<div
		class="gov-tag"
		:class="[
			`gov-tag--size-${size}`,
			type ? `gov-tag--${type}` : '',
			{
				'is-closable': closable,
				'is-round': round,
				'is-fill': fill,
			},
		]"
	>
		<slot name="icon">
			<GovIcon v-if="icon" :name="icon" />
		</slot>
		<slot>{{ text }}</slot>
		<button v-if="closable" class="gov-tag__close" @click="handleClose">
			<GovIcon name="close" />
		</button>
	</div>
</template>

<script setup>
import GovIcon from "../icon/icon.vue";

defineOptions({
	name: "GovTag",
});

defineProps({
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
	icon: String,
	closable: Boolean, // 关闭按钮
	round: Boolean, // 圆角
	fill: Boolean, // 是否填充
	text: String,
	size: {
		type: String,
		default: "default",
	},
});

const emits = defineEmits(["close"]);

const handleClose = () => {
	emits("close");
};
</script>

<style lang="scss">
@import "./tag.scss";
</style>
