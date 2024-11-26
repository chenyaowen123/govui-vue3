<template>
	<div
		class="gov-page-container"
		:class="[{ 'is-border': border, 'is-round': round }]"
	>
		<div
			class="gov-page-container__title"
			:class="{
				'gov-page-container__title--underline': titleUnderline,
			}"
		>
			<div class="gov-page-container__title-text">
				<slot name="title">{{ title }}</slot>
			</div>
			<div
				class="gov-page-container__title-actions"
				v-if="$slots.actions"
			>
				<slot name="actions" />
			</div>
		</div>
		<div v-if="$slots.before" class="gov-page-container__before">
			<slot name="before" />
		</div>

		<div class="gov-page-container__content">
			<div class="gov-page-container__content-wrap"><slot /></div>
		</div>
	</div>
</template>

<script setup>
defineOptions({
	name: "GovPageContainer",
});

defineProps({
	title: {
		type: String,
		default: "",
	},
	titleUnderline: {
		type: Boolean,
		default: true,
	},
	border: {
		type: Boolean,
		default: true,
	},
	round: {
		type: Boolean,
		default: true,
	},
});
</script>
