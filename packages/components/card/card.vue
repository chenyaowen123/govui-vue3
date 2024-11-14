<template>
	<div class="gov-card" :class="[`is-${shadow}-shadow`]">
		<div
			class="gov-card__header"
			v-if="$slots.actions || $slots.actions || title"
		>
			<div class="gov-card__header-title">
				<slot name="title">{{ title }}</slot>
			</div>
			<div class="gov-card__header-actions" v-if="$slots.actions">
				<slot name="actions" />
			</div>
		</div>
		<div class="gov-card__content" :style="contentStyle">
			<slot />
		</div>
	</div>
</template>

<script setup>
defineOptions({
	name: "GovCard",
});

defineProps({
	title: String,
	contentStyle: Object, //  内容样式
	shadow: {
		type: String,
		default: "always",
		validator: (value) => ["always", "hover", "never"].includes(value), // 一直，hover，从不
	},
});
</script>

<style lang="scss">
@use "./card.scss";
</style>
