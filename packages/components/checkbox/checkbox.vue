<template>
	<label
		class="gov-checkbox"
		:class="[
			`gov-checkbox--size-${checkboxSize}`,
			{ 'is-border': isBorder },
			{ 'is-button': isButton },
			{ 'is-disabled': isDisabled },
		]"
	>
		<input
			class="gov-checkbox__original"
			type="checkbox"
			:disabled="isDisabled"
			:class="{ 'is-indeterminate': indeterminate }"
			v-bind="$attrs"
			v-model="innerValue"
			@focus="handleFocus"
			@blur="handleBlur"
		/>
		<span class="gov-checkbox__label">
			<slot></slot>
			<template v-if="!$slots.default">{{ label }}</template>
		</span>
	</label>
</template>

<script setup>
import { inject, computed } from "vue";
import { useReset } from "../utils/useReset";

defineOptions({
	name: "GovCheckbox",
});

const props = defineProps({
	modelValue: {
		default: undefined,
	},
	size: String,
	label: String,
	border: Boolean,
	disabled: Boolean,
	indeterminate: Boolean,
	// 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
	triggerForm: {
		type: Boolean,
		default: true,
	},
});

const emits = defineEmits(["update:modelValue", "change", "blur", "focus"]);

const govFormItem = inject("govFormItem", null);
const govCheckboxGroup = inject("govCheckboxGroup", null);

// 计算当前是否要触发给form事件，如果有 group 包裹，就交给 group，否则按照 props.triggerForm
const innerTriggerForm = computed(() => {
	if (govCheckboxGroup) {
		return false;
	}
	return props?.triggerForm;
});

const innerValue = computed({
	get() {
		if (govCheckboxGroup) {
			return govCheckboxGroup.modelValue || [];
		} else {
			return props.modelValue;
		}
	},
	set(val) {
		if (govCheckboxGroup) {
			govCheckboxGroup.updateValue(val);
		} else {
			emits("change", val);
			emits("update:modelValue", val);
			if (innerTriggerForm.value) {
				govFormItem?.$emit("change");
			}
		}
	},
});

// 监听重置功能
useReset(govFormItem, props, (initialValue) => {
	innerValue.value = initialValue;
});

const checkboxSize = computed(() => {
	return (
		props?.size || govCheckboxGroup?.size || govFormItem?.size || "default"
	);
});

const isBorder = computed(() => {
	return props?.border || govCheckboxGroup?.border;
});

const isDisabled = computed(() => {
	return (
		props?.disabled || govCheckboxGroup?.disabled || govFormItem?.disabled
	);
});

const isButton = computed(() => {
	return govCheckboxGroup?.button;
});

// 获得焦点
function handleFocus(e) {
	emits("focus", e);
	if (innerTriggerForm.value) {
		govFormItem?.$emit("focus");
	}
}

// 失去焦点
function handleBlur(e) {
	emits("blur", e);
	if (innerTriggerForm.value) {
		govFormItem?.$emit("blur");
	}
}
</script>

<style lang="scss">
@use "./scss/checkbox.scss";
</style>
