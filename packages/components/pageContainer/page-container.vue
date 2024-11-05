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

<style lang="scss" scoped>
.gov-page-container {
	display: flex;
	flex-direction: column;
	margin-right: auto;
	margin-left: auto;
	max-width: 1200px; // 可以根据需要设置最大宽度
	background: #fff;

	&.is-border {
		border: 1px solid var(--gov-border-color);
	}
	&.is-round {
		border-radius: var(--gov-border-radius-base);
	}
	&__before {
		padding: 5px 20px;
		text-align: center;
		background: var(--gov-fill-color-5);
	}

	&__title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
		&-text {
			font-size: 24px;
			font-weight: bold;
		}
		&--underline {
			border-bottom: 1px solid var(--gov-border-color-5);
		}
	}

	&__title-actions {
		display: flex;
		gap: 10px;
	}

	&__content {
		padding: 20px;
	}
}
</style>
