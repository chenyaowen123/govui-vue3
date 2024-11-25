<template>
	<div
		class="gov-textarea"
		:class="[
			{
				'is-resize': resize,
				'is-disabled': innerDisabled,
				'is-error': isError,
			},
		]"
	>
		<textarea
			:rows="rows"
			:placeholder="placeholder"
			v-model="innerValue"
			:maxlength="maxlength"
			v-bind="$attrs"
			class="gov-textarea__input"
			:style="textareaStyle"
			:disabled="innerDisabled"
			@focus="handleFocus"
			@blur="handleBlur"
			@change="handleChange"
		/>
		<div class="gov-textarea__footer" v-if="hasFooter">
			<span v-if="maxlength">{{ currentLength }}/{{ maxlength }}</span>
			<span
				v-if="clearable"
				class="gov-textarea__clear-btn"
				@click="clearText"
			>
				清空
			</span>
		</div>
	</div>
</template>

<script setup>
import { inject, computed } from "vue";
import { useReset } from "../utils/useReset";

defineOptions({
	name: "GovTextarea",
});

const props = defineProps({
	modelValue: String,
	rows: {
		type: [Number, String],
		default: 3,
	},
	maxlength: [Number, String],
	clearable: Boolean,
	placeholder: String,
	resize: {
		type: Boolean,
		default: true,
	},
	disabled: Boolean,
	// 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
	triggerForm: {
		type: Boolean,
		default: true,
	},
});

const emits = defineEmits([
	"update:modelValue",
	"input",
	"change",
	"focus",
	"blur",
	"clear",
]);

// 获取formItem
const govFormItem = inject("govFormItem", null);

// 绑定Value
const innerValue = computed({
	get() {
		return props.modelValue;
	},
	set(val) {
		emits("update:modelValue", val);
		emits("input");
		if (props.triggerForm) {
			govFormItem?.$emit("input");
		}
	},
});

// 监听重置功能
useReset(govFormItem, props, (initialValue) => {
	emits("update:modelValue", initialValue);
});

// 是否禁用
const innerDisabled = computed(() => {
	return props?.disabled || govFormItem?.disabled;
});

// 表单验证是否为错误状态
const isError = computed(() => {
	return govFormItem?.validateState === "error";
});

// 统计相关
const currentLength = computed(() => innerValue.value.length);
const hasFooter = computed(() => props.maxlength || props.clearable);
const textareaStyle = computed(() => {
	return {
		paddingBottom: hasFooter.value ? "20px" : "10px",
		resize: props.resize ? "both" : "none",
	};
});

// change事件
const handleChange = () => {
	emits("change", props.modelValue);
	if (props.triggerForm) {
		govFormItem?.$emit("change");
	}
};

// 获得焦点
const handleFocus = () => {
	emits("focus");
	if (props.triggerForm) {
		govFormItem?.$emit("focus");
	}
};

// 失去焦点
const handleBlur = () => {
	emits("blur");
	if (props.triggerForm) {
		govFormItem?.$emit("blur");
	}
};

// 清空
const clearText = () => {
	innerValue.value = "";
	emits("update:modelValue", "");
	emits("clear");
};
</script>

<style lang="scss">
@use "./textarea.scss";
</style>
