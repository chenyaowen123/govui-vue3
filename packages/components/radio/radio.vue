<template>
	<label
		class="gov-radio"
		:class="[
			`gov-radio--size-${radioSize}`,
			{ 'is-border': isBorder },
			{ 'is-button': isButton },
			{ 'is-disabled': isDisabled },
		]"
	>
		<input
			class="gov-radio__original"
			type="radio"
			:disabled="isDisabled"
			v-bind="$attrs"
			v-model="innerValue"
			@focus="handleFocus"
			@blur="handleBlur"
		/>
		<span class="gov-radio__label">
			<slot></slot>
			<template v-if="!$slots.default">{{ label }}</template>
		</span>
	</label>
</template>

<script setup>
import { inject, computed } from "vue";
import { useReset } from "../utils/useReset";

defineOptions({
	name: "GovRadio",
});

const props = defineProps({
	modelValue: [String, Number],
	size: String,
	label: String,
	border: Boolean,
	disabled: Boolean,
	// 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
	triggerForm: {
		type: Boolean,
		default: true,
	},
});

const emits = defineEmits(["update:modelValue", "change", "blur", "focus"]);

const govFormItem = inject("govFormItem", null);
const govRadioGroup = inject("govRadioGroup", null);

// 计算当前是否要触发给form事件，如果有 group 包裹，就交给 group，否则按照 props.triggerForm
const innerTriggerForm = computed(() => {
	if (govRadioGroup) {
		return false;
	}
	return props?.triggerForm;
});

const innerValue = computed({
	get() {
		return govRadioGroup?.modelValue || props.modelValue;
	},
	set(val) {
		if (govRadioGroup) {
			govRadioGroup.updateValue(val);
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

const radioSize = computed(() => {
	return props?.size || govRadioGroup?.size || govFormItem?.size || "default";
});

const isBorder = computed(() => {
	return props?.border || govRadioGroup?.border;
});

const isDisabled = computed(() => {
	return props?.disabled || govRadioGroup?.disabled || govFormItem?.disabled;
});

const isButton = computed(() => {
	return govRadioGroup?.button;
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
@use "./scss/radio.scss";
</style>
