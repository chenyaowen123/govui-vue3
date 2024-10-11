<template>
	<div class="gov-row" :style="rowStyle" :class="rowClasses">
		<slot></slot>
	</div>
</template>

<script setup>
import { computed, provide } from "vue";

defineOptions({
	name: "GovRow",
});

const props = defineProps({
	gutter: {
		type: Number,
		default: 0,
	},
	justify: {
		type: String,
		default: null, // 'start', 'end', 'center', 'space-between', 'space-around'
	},
	align: {
		type: String,
		default: null, // 'top', 'middle', 'bottom'
	},
});

provide("gutter", props.gutter);

const rowStyle = computed(() => {
	const style = {};
	if (props.gutter) {
		style["margin-left"] = `-${props.gutter / 2}px`;
		style["margin-right"] = style["margin-left"];
	}
	return style;
});

const rowClasses = computed(() => {
	return [
		{ "gov-row--flex": Boolean(props.justify || props.align) },
		props.justify ? `gov-row--justify-${props.justify}` : "",
		props.align ? `gov-row--align-${props.align}` : "",
	];
});
</script>

<style lang="scss" scoped>
.gov-row {
	position: relative;
	box-sizing: border-box;
	&::before,
	&::after {
		display: table;
		content: "";
		clear: both;
	}
	&--flex {
		display: flex;
	}

	@each $just in start, end, center, space-between, space-around {
		&--justify-#{$just} {
			justify-content: $just;
		}
	}

	@each $align in top, middle, bottom {
		&--align-#{$align} {
			align-items: $align;
		}
	}
}
</style>
