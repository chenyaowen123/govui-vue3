<template>
	<div
		class="gov-datepicker"
		:style="width ? `width: ${props.width}px;` : ''"
		:class="[
			`gov-datepicker--size-${innerSize}`,
			{ 'is-error': isError, 'is-disabled': innerDisabled },
		]"
	>
		<VueDatePicker
			locale="zh-CN"
			:month-change-on-scroll="false"
			:enable-time-picker="props.showTime"
			:time-picker="time"
			:week-picker="week"
			:month-picker="month"
			:year-picker="year"
			now-button-label="今天"
			:show-now-button="props.showToday"
			auto-apply
			text-input
			:model-type="props.modelType"
			:day-names="['一', '二', '三', '四', '五', '六', '日']"
			:disabled="innerDisabled"
			v-bind="$attrs"
			v-model="innerValue"
			@focus="handleFocus"
			@blur="handleBlur"
			@cleared="handleClear"
		/>
	</div>
</template>
<script setup>
import { computed, inject } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import { useReset } from "../utils/useReset";

defineOptions({
	name: "GovDatepicker",
});

const props = defineProps({
	modelValue: {},
	width: {
		type: Number,
		default: null, // 日期选择器宽度
	},
	mode: {
		type: String,
		default: "date", // 选择器模式，默认 'date'
	},
	showTime: {
		type: Boolean,
		default: false, // 是否增加时间选择
	},
	showToday: {
		type: Boolean,
		default: false, // 是否展示“今天”按钮
	},
	modelType: {
		type: String,
		default: "format", // v-model 值类型，默认 'format'
	},
	size: String,
	disabled: Boolean,
	// 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
	triggerForm: {
		type: Boolean,
		default: true,
	},
});

const time = computed(() => props.mode === "time");
const week = computed(() => props.mode === "week");
const month = computed(() => props.mode === "month");
const year = computed(() => props.mode === "year");

// 获取formItem
const govFormItem = inject("govFormItem", null);

const emits = defineEmits([
	"update:modelValue",
	"change",
	"focus",
	"blur",
	"clear",
]);

// 绑定Value
const innerValue = computed({
	get() {
		return props.modelValue;
	},
	set(val) {
		emits("update:modelValue", val);
		emits("change");
		if (props.triggerForm) {
			govFormItem?.$emit("change");
		}
	},
});

// 监听重置功能
useReset(govFormItem, props, (initialValue) => {
	emits("update:modelValue", initialValue);
});

// 计算大小
const innerSize = computed(() => {
	return props?.size || govFormItem?.size;
});

// 是否禁用
const innerDisabled = computed(() => {
	return props?.disabled || govFormItem?.disabled;
});

// 表单验证是否为错误状态
const isError = computed(() => {
	return govFormItem?.validateState === "error";
});

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

// clear
const handleClear = () => {
	emits("clear");
	if (props.triggerForm) {
		govFormItem?.$emit("clear");
	}
};
</script>
