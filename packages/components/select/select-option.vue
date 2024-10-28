<template>
	<div
		class="gov-select-option"
		:class="[{ 'is-disabled': disabled }, { 'is-selected': isSelected }]"
		@click="handleClick"
	>
		<slot>{{ label }}</slot>
	</div>
</template>

<script setup>
import { inject, watchEffect, computed } from "vue";
defineOptions({
	name: "GovSelectOption",
});

const props = defineProps({
	value: {
		type: [String, Number],
		default: undefined, // 绑定在输入框的值
	},
	label: {
		type: [String, Number],
		default: undefined, // 绑定在输入框的值
	},
	disabled: {
		type: Boolean,
		default: false,
	},
});

const govSelect = inject("govSelect", null);

const isSelected = computed(() => {
	return govSelect?.modelValue === props.value;
});

const emitValue = () => {
	const { disabled, value, label } = props;
	if (!disabled) {
		govSelect.updateValue({ value, label });
	}
};

// 监听外层有 modelValue，并且子组件有这个，抛出一个事件，给外层更新值。
watchEffect(() => {
	if (govSelect?.modelValue == props.value) {
		emitValue();
	}
});

const handleClick = () => {
	emitValue();
};
</script>

<style lang="scss">
.gov-select-option {
	background: #fff;
	padding: 5px 20px;
	margin: 2px 0;
	cursor: pointer;
	transition: all 0.2s;
	color: var(--gov-text-color);
	&:hover {
		color: var(--gov-primary);
		background: var(--gov-fill-color-5);
	}
	&.is-selected {
		color: var(--gov-primary);
		background: var(--gov-fill-color-5);
	}
	&.is-disabled {
		color: var(--gov-text-color-5);
		cursor: not-allowed;
		&.is-selected {
			color: var(--gov-primary-5);
		}
	}
}
</style>
