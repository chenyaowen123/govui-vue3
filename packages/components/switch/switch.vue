<template>
	<div
		class="gov-switch"
		:class="[
			`gov-switch--size-${innerSize}`,
			type ? 'gov-switch--' + type : '',
			{ 'is-disabled': innerDisabled },
		]"
		tabindex="0"
		@focus="handleFocus"
		@blur="handleBlur"
	>
		<label class="gov-switch__layer">
			<input
				type="checkbox"
				v-bind="$attrs"
				v-model="innerValue"
				:disabled="innerDisabled"
				:true-value="trueValue"
				:false-value="falseValue"
			/>
			<span class="gov-switch__point"></span>
		</label>
	</div>
</template>

<script setup>
import { computed, inject } from "vue";

defineOptions({
	name: "GovSwitch",
});

const props = defineProps({
	modelValue: {},
	type: {
		type: String,
		default: "default",
	},
	size: String,
	disabled: Boolean,
	trueValue: {
		default: true,
	},
	falseValue: {
		default: false,
	},
	// 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
	triggerForm: {
		type: Boolean,
		default: true,
	},
});

// 依赖注入
const govFormItem = inject("govFormItem", null);
const emits = defineEmits(["update:modelValue", "change", "focus", "blur"]);

const innerValue = computed({
	get() {
		return props.modelValue;
	},
	set(val) {
		emits("change", val);
		emits("update:modelValue", val);
		if (props.triggerForm) {
			govFormItem?.$emit("change");
		}
	},
});

// 计算大小
const innerSize = computed(() => {
	return props?.size || govFormItem?.size;
});

// 是否禁用
const innerDisabled = computed(() => {
	return props?.disabled || govFormItem?.disabled;
});

// 获得焦点
function handleFocus() {
	emits("focus");
	if (props.triggerForm) {
		govFormItem?.$emit("focus");
	}
}

// 失去焦点
function handleBlur() {
	emits("blur");
	if (props.triggerForm) {
		govFormItem?.$emit("blur");
	}
}
</script>

<style lang="scss">
@use "./switch.scss";
</style>
