<template>
	<label
		class="gov-checkbox"
		:class="[
			`gov-checkbox--${checkboxSize}`,
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
		/>
		<span class="gov-checkbox__label">
			<slot></slot>
			<template v-if="!$slots.default">{{ label }}</template>
		</span>
	</label>
</template>

<script setup>
import { inject, computed } from "vue";

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
});

const emit = defineEmits(["change", "update:modelValue"]);

const govFormItem = inject("govFormItem", null);
const govCheckboxGroup = inject("govCheckboxGroup", null);

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
			emit("change", val);
			emit("update:modelValue", val);
		}
	},
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
</script>

<style lang="scss">
@use "./scss/checkbox.scss";
</style>
