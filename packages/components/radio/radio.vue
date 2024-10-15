<template>
	<label
		class="gov-radio"
		:class="[
			isBordered && radioSize ? 'gov-radio--' + radioSize : '',
			{ 'is-disabled': isDisabled },
			{ 'is-focus': focus },
			{ 'is-bordered': isBordered },
			{ 'is-checked': model === value },
		]"
		role="radio"
		:aria-checked="model === value"
		:aria-disabled="isDisabled"
	>
		<span
			class="gov-radio__input"
			:class="{
				'is-disabled': isDisabled,
				'is-checked': model === value,
			}"
		>
			<span class="gov-radio__inner"></span>
			<input
				ref="radio"
				class="gov-radio__original"
				:value="value"
				type="radio"
				v-model="model"
				@focus="focus = true"
				@blur="focus = false"
				@change="handleChange"
				:name="name"
				:disabled="isDisabled"
				tabindex="-1"
			/>
		</span>
		<span class="gov-radio__label">
			<slot></slot>
			<template v-if="!$slots.default">{{ label }}</template>
		</span>
	</label>
</template>

<script setup>
import { ref, computed, inject, nextTick, watch } from "vue";
defineOptions({
	name: "GovRadio",
});
const props = defineProps({
	modelValue: [String, Number, Boolean],
	value: [String, Number, Boolean],
	disabled: Boolean,
	name: String,
	border: Boolean,
	size: String,
});

const emit = defineEmits(["input", "change", "update:modelValue"]);

const focus = ref(false);
const radio = ref(null);

const govFormItem = inject("govFormItem", null);
const govRadioGroup = inject("govRadioGroup", null);


const model = computed({
	get() {
		return govRadioGroup?.modelValue || props.modelValue;
	},
	set(val) {
		if (govRadioGroup) {
			govRadioGroup.updateValue(val);
		} else {
			emit("input", val);
			emit("update:modelValue", val);
		}
		radio.value.checked = model.value === props.value;
	},
});

const radioSize = computed(() => {
	return props?.size || govRadioGroup?.size || govFormItem?.size || "default";
});

const isDisabled = computed(() => {
	return props?.disabled || govRadioGroup?.disabled || govFormItem?.disabled;
});

const isBordered = computed(() => {
	return props?.border || govRadioGroup?.border;
});

// change事件
function handleChange() {
	nextTick(() => {
		emit("change", model.value);
	});
}
</script>

<style lang="scss">
@import "./scss/radio.scss";
</style>
