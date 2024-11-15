<template>
	<label
		class="gov-radio"
		:class="[
			`gov-radio--${radioSize}`,
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
		/>
		<span class="gov-radio__label">
			<slot></slot>
			<template v-if="!$slots.default">{{ label }}</template>
		</span>
	</label>
</template>

<script setup>
import { inject, computed } from "vue";

defineOptions({
	name: "GovRadio",
});

const props = defineProps({
	modelValue: [String, Number],
	size: String,
	label: String,
	border: Boolean,
	disabled: Boolean,
});

const emit = defineEmits(["change", "update:modelValue"]);

const govFormItem = inject("govFormItem", null);
const govRadioGroup = inject("govRadioGroup", null);

const innerValue = computed({
	get() {
		return govRadioGroup?.modelValue || props.modelValue;
	},
	set(val) {
		if (govRadioGroup) {
			govRadioGroup.updateValue(val);
		} else {
			emit("change", val);
			emit("update:modelValue", val);
		}
	},
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
</script>

<style lang="scss">
@use "./scss/radio.scss";
</style>
