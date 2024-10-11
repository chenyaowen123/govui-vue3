<template>
	<div class="gov-col" :class="colClasses" :style="colStyle">
		<slot></slot>
	</div>
</template>

<script setup>
import { computed, inject } from "vue";

defineOptions({
	name: "GovCol",
});

const props = defineProps({
	span: {
		type: Number,
		default: 24,
	},
	offset: {
		type: Number,
		default: 0,
	},
});
const gutter = inject("gutter");

const colClasses = computed(() => {
	return [
		`gov-col-span-${props.span}`,
		props.offset > 0 ? `gov-col-offset-${props.offset}` : "",
	];
});

const colStyle = computed(() => {
	const style = {};
	if (gutter) {
		style["padding-left"] = `${gutter / 2}px`;
		style["padding-right"] = style["padding-left"];
	}
	return style;
});
</script>

<style lang="scss" scoped>
.gov-col {
	float: left;
	box-sizing: border-box;

	@for $i from 1 through 24 {
		&-span-#{$i} {
			flex: 0 0 calc(#{$i} / 24 * 100%);
			width: calc(#{$i} / 24 * 100%);
		}

		&-offset-#{$i} {
			margin-left: calc(#{$i} / 24 * 100%);
		}
	}
}
</style>
