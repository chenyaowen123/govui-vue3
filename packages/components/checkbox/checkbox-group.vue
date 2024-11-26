<template>
	<div
		class="gov-checkbox-group"
		:class="{ 'is-disabled': disabled }"
		tabindex="0"
		@focus="handleFocus"
		@blur="handleBlur"
	>
		<slot></slot>
	</div>
</template>

<script setup>
import { inject, provide, reactive, toRefs } from "vue";

defineOptions({
	name: "GovCheckboxGroup",
});

const props = defineProps({
	modelValue: {
		type: Array,
		default: () => [],
	},
	border: Boolean,
	size: String,
	button: Boolean,
	disabled: Boolean,
	// 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
	triggerForm: {
		type: Boolean,
		default: true,
	},
});

const govFormItem = inject("govFormItem", null);
const emits = defineEmits(["update:modelValue", "change", "blur", "focus"]);

const updateValue = (val) => {
	emits("change", val);
	emits("update:modelValue", val);
	if (props.triggerForm) {
		govFormItem?.$emit("change");
	}
};

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

provide(
	"govCheckboxGroup",
	reactive({
		...toRefs(props),
		updateValue,
	}),
);
</script>
