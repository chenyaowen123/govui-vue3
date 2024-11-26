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

// 是否选中
const isSelected = computed(() => {
	return govSelect?.modelValue === props.value;
});

// 监听外层有 modelValue，更新input显示，因为input的显示来自于label。
watchEffect(() => {
	const val = govSelect?.modelValue;
	if (val == props.value) {
		govSelect?.updateInputText(props.label);
	} else if (!val && val !== 0) {
		govSelect?.updateInputText(undefined);
	}
});

// 抛出事件更新外层
const handleClick = () => {
	const { disabled, value, label } = props;
	if (!disabled) {
		govSelect?.updateInputText(label);
		govSelect?.updateValue({ value, label });
	}
};
</script>
