<template>
	<div class="gov-input-number">
		<GovInput
			v-bind="$attrs"
			:prefix="prefix"
			:size="innerSize"
			:disabled="innerDisabled"
			:model-value="innerValue"
			@focus="handleFocus"
			@blur="handleBlur"
			@change="handleChange"
			@input="handleInput"
			@clear="handleClear"
			:triggerForm="false"
			class="gov-input-number__input"
		>
			<template v-if="$slots.addonBefore" #addonBefore>
				<slot name="addonBefore" />
			</template>
			<template v-if="$slots.addonAfter" #addonAfter>
				<slot name="addonAfter" />
			</template>
			<template v-if="$slots.prefix" #prefix>
				<slot name="prefix" />
			</template>
			<template v-if="$slots.suffix" #suffix>
				<slot name="suffix" />
			</template>
		</GovInput>
		<div class="gov-input-number__buttons" v-if="controls">
			<div
				@click="increment"
				:class="[{ 'is-disabled': incrementDisabled }]"
			>
				<GovIcon name="plus" />
			</div>
			<div
				@click="decrement"
				:class="[{ 'is-disabled': decrementDisabled }]"
			>
				<GovIcon name="minus" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject, computed } from "vue";
import GovInput from "./input.vue";
import GovIcon from "../icon/icon.vue";
import numeral from "numeral";
import { useReset } from "../utils/useReset";

defineOptions({
	name: "GovInputNumber",
});

const props = defineProps({
	modelValue: {},
	min: {
		type: Number,
		default: Number.MIN_SAFE_INTEGER,
	},
	max: {
		type: Number,
		default: Number.MAX_SAFE_INTEGER,
	},
	step: {
		type: Number,
		default: 1,
	},
	format: {
		type: String,
		default: "0,0",
	},
	// 双向绑定值是否为格式化后的
	valueFormat: {
		type: Boolean,
		default: false,
	},
	// 是否显示加减按钮
	controls: {
		type: Boolean,
		default: false,
	},
	prefix: {
		type: [String, Number],
		default: undefined,
	},
	size: String,
	disabled: Boolean,
	// 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
	triggerForm: {
		type: Boolean,
		default: true,
	},
});

const emits = defineEmits([
	"update:modelValue",
	"focus",
	"blur",
	"change",
	"input",
	"clear",
	"add",
	"subtract",
]);

// 返回给外层的值，
// 1、需要判断是否设置了forat 和 valueFormat，两者同时满足，则返回给外层的值是一个有格式的，否则给外层的是没有格式的
// 2、需要判断边界
const emitValueFormat = (value) => {
	if (!value && value !== 0) {
		return undefined;
	}
	const numValue = numeral(value).value();
	const boundedValue = Math.min(Math.max(numValue, props.min), props.max);
	if (props.format && props.valueFormat) {
		return numeral(boundedValue).format(props.format);
	} else {
		return numeral(boundedValue).value();
	}
};

// 计算GovInput显示值
const innerValue = computed(() => {
	if (!props.modelValue && props.modelValue !== 0) {
		return undefined;
	} else if (props.format) {
		return numeral(props.modelValue).format(props.format);
	} else {
		return numeral(props.modelValue).value();
	}
});

// 获取formItem
const govFormItem = inject("govFormItem", null);

// 监听重置功能
useReset(govFormItem, props, (initialValue) => {
	const emitValue = emitValueFormat(initialValue);
	emits("update:modelValue", emitValue);
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

// Change事件，格式化
function handleChange(value) {
	const emitValue = emitValueFormat(value);
	emits("update:modelValue", emitValue);
	emits("change", emitValue);
	if (props.triggerForm) {
		govFormItem?.$emit("change");
	}
}

// Input事件，返回value 和 格式化后的值
function handleInput(value) {
	emits("input", value);
	if (props.triggerForm) {
		govFormItem?.$emit("input");
	}
}

// clear事件
const handleClear = () => {
	emits("clear");
	if (props.triggerForm) {
		govFormItem?.$emit("clear");
	}
};

// 加减按钮的disabled
const incrementDisabled = computed(() => {
	if (innerDisabled.value) return true;
	let modelValue = props.modelValue || 0;
	let val = numeral(modelValue).add(props.step).value();
	return innerDisabled.value || val > props.max;
});

const decrementDisabled = computed(() => {
	if (innerDisabled.value) return true;
	let modelValue = props.modelValue || 0;
	let val = numeral(modelValue).subtract(props.step).value();
	return innerDisabled.value || val < props.min;
});

// 加减
function increment() {
	if (incrementDisabled.value) return;
	const newValue = numeral(props.modelValue || 0)
		.add(props.step)
		.value();
	const emitValue = emitValueFormat(newValue);
	emits("update:modelValue", emitValue);
	emits("change", emitValue);
	emits("add", emitValue);
	if (props.triggerForm) {
		govFormItem?.$emit(["change", "add"]);
	}
}

function decrement() {
	if (decrementDisabled.value) return;
	const newValue = numeral(props.modelValue || 0)
		.subtract(props.step)
		.value();
	const emitValue = emitValueFormat(newValue);
	emits("update:modelValue", emitValue);
	emits("change", emitValue);
	emits("subtract", emitValue);
	if (props.triggerForm) {
		govFormItem?.$emit(["change", "subtract"]);
	}
}
</script>
