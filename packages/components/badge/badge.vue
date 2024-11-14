<template>
	<div class="gov-badge" :class="{ 'is-transparent': transparent }">
		<slot />
		<sup
			v-show="!hidden && (content || content === 0 || isDot)"
			v-text="content"
			class="gov-badge__content"
			:class="[
				type ? 'gov-badge__content--' + type : null,
				{
					'is-fixed': $slots.default,
					'is-dot': isDot,
				},
			]"
		/>
	</div>
</template>

<script setup>
import { computed } from "vue";

defineOptions({
	name: "GovBadge",
});

const props = defineProps({
	value: [String, Number], // 值
	max: Number, // 最大值
	isDot: Boolean, // 小圆点
	hidden: Boolean, // 隐藏 badge
	transparent: Boolean, // 是否透明
	type: {
		type: String,
		default: "primary",
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
});

const content = computed(() => {
	if (props.isDot) return;
	const { value, max } = props;
	if (typeof value === "number" && typeof max === "number") {
		return max < value ? `${max}+` : value;
	}
	return value;
});
</script>

<style lang="scss">
@use "./badge.scss";
</style>
