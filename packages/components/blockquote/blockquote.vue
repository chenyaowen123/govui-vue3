<template>
	<div
		class="gov-blockquote"
		:class="[
			type ? `gov-blockquote--${type}` : '',
			reverse ? 'gov-blockquote--reverse' : '',
		]"
		:style="{
			fontSize: fontSize || '',
			borderColor: borderColor || '',
		}"
	>
		<slot></slot>
	</div>
</template>

<script setup>
defineOptions({
	name: "GovBlockquote",
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
	fontSize: String,
	borderColor: String,
	reverse: Boolean, // 是否翻转
});
</script>
