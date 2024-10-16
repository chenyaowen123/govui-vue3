<template>
	<label
		class="gov-checkbox"
		:class="[border ? `gov-checkbox--${checkboxSize}` : '']"
	>
		<input
			class="gov-checkbox__original"
			type="checkbox"
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
});

const emit = defineEmits(["change", "update:modelValue"]);

const govFormItem = inject("govFormItem", null);
const govCheckboxGroup = inject("govCheckboxGroup", null);

const innerValue = computed({
	get() {
		return govCheckboxGroup?.modelValue || props.modelValue;
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
</script>

<style lang="scss">
@import "./scss/checkbox.scss";
</style>
