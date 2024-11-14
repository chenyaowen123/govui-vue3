<template>
	<a
		:class="[
			'gov-link',
			type ? `gov-link--${type}` : '',
			disabled && 'is-disabled',
			underline && !disabled && 'is-underline',
		]"
		:href="disabled ? null : href"
		v-bind="$attrs"
		@click="handleClick"
	>
		<GovIcon :name="icon" v-if="icon" />
		<span v-if="$slots.default" class="gov-link--inner">
			<slot></slot>
		</span>
		<i class="gov-link-line"></i>
	</a>
</template>

<script setup>
defineOptions({
	name: "GovLink",
});

const props = defineProps({
	type: {
		type: String,
		default: "default",
	},
	underline: {
		type: Boolean,
		default: true,
	},
	disabled: Boolean,
	href: String,
	icon: String,
});

const emit = defineEmits(["click"]);

const handleClick = (event) => {
	if (!props.disabled) {
		if (!props.href) {
			emit("click", event);
		}
	}
};
</script>

<style lang="scss">
@use "./link.scss";
</style>
