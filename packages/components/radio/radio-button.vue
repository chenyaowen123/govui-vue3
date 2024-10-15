<template>
	<label
		class="gov-radio-button"
		:class="[
			'gov-radio-button--size-' + radioSize,
			{ 'is-active': model === value },
			{ 'is-disabled': isDisabled },
			{ 'is-focus': focus },
		]"
		role="radio"
	>
		<input
			class="gov-radio-button__orig-radio"
			:value="value"
			type="radio"
			v-model="model"
			:name="name"
			:disabled="isDisabled"
			tabindex="-1"
			@focus="focus = true"
			@blur="focus = false"
			autocomplete="off"
		/>
		<span
			class="gov-radio-button__inner"
			:class="{ 'is-checked': model === value }"
			@keydown.stop
		>
			<slot></slot>
			<template v-if="!$slots.default">{{ label }}</template>
		</span>
	</label>
</template>

<script setup>
import { ref, computed, inject } from "vue";

defineOptions({
	name: "GovRadioButton",
});

const props = defineProps({
	value: [String, Number, Boolean],
	label: [String, Number],
	disabled: Boolean,
	name: String,
});

const govFormItem = inject("govFormItem", null);
const govRadioGroup = inject("govRadioGroup", null);

const focus = ref(false);

const model = computed({
	get() {
		return govRadioGroup.modelValue;
	},
	set(val) {
		govRadioGroup.updateValue(val);
	},
});

const radioSize = computed(() => {
	return govRadioGroup?.size || govFormItem?.size || "default";
});

const isDisabled = computed(() => {
	return props?.disabled || govRadioGroup?.disabled || govFormItem?.disabled;
});
</script>

<style lang="scss">
@import "./scss/radio-button.scss";
</style>
