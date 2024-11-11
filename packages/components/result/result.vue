<template>
	<div class="gov-result" :class="`is-${type}`">
		<div class="gov-result__icon">
			<slot name="icon">
				<GovIcon :name="type" />
			</slot>
		</div>
		<div v-if="title || $slots.title" class="gov-result__title">
			<slot name="title"> {{ title }} </slot>
		</div>
		<div
			v-if="description || $slots.description"
			class="gov-result__description"
		>
			<slot name="description"> {{ description }} </slot>
		</div>
		<div v-if="$slots.default" class="gov-result__footer">
			<slot />
		</div>
	</div>
</template>

<script setup>
import GovIcon from "../icon/icon.vue";

defineOptions({
	name: "GovResult",
});

defineProps({
	title: String,
	description: String,
	type: {
		type: String,
		default: "success",
		required: true,
		validator: (value) => {
			return ["success", "info", "warning", "danger"].includes(value);
		},
	},
});
</script>

<style lang="scss">
@import "./result.scss";
</style>
