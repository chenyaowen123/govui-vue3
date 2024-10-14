<template>
	<label
		class="gov-radio"
		:class="[
			border && radioSize ? 'gov-radio--' + radioSize : '',
			{ 'is-disabled': isDisabled },
			{ 'is-focus': focus },
			{ 'is-bordered': border },
			{ 'is-checked': model === label },
		]"
		role="radio"
		:aria-checked="model === label"
		:aria-disabled="isDisabled"
	>
		<span
			class="gov-radio__input"
			:class="{
				'is-disabled': isDisabled,
				'is-checked': model === label,
			}"
		>
			<span class="gov-radio__inner"></span>
			<input
				ref="radio"
				class="gov-radio__original"
				:value="label"
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
import { ref, computed, inject, nextTick } from "vue";
defineOptions({
	name: "GovRadio",
});
const props = defineProps({
	value: {},
	label: [String, Number],
	disabled: Boolean,
	name: String,
	border: Boolean,
	size: String,
});

const emit = defineEmits(["input", "change"]);

const focus = ref(false);
const radio = ref(null);

const govFormItem = inject("govFormItem", null);
const govRadioGroup = inject("govRadioGroup", null);

const model = computed({
	get() {
		return govRadioGroup?.value || props.value;
	},
	set(val) {
		if (govRadioGroup) {
			govRadioGroup.updateValue(val);
		} else {
			emit("input", val);
		}
		nextTick(() => {
			radio.value.checked = model.value === props.label;
		});
	},
});

const radioSize = computed(() => {
	return (
		props?.size ||
		govRadioGroup?.size ||
		govFormItem?.size ||
		"default"
	);
});

const isDisabled = computed(() => {
	return (
		props?.disabled ||
		govRadioGroup?.disabled ||
		govFormItem?.disabled
	);
});

// change事件
function handleChange() {
	nextTick(() => {
		emit("change", model.value);
		govRadioGroup && govRadioGroup.updateValue(model.value);
	});
}
</script>


<style lang="scss">
@import "./scss/radio.scss";
</style>
