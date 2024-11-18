<template>
	<div class="gov-input-number">
		<GovInput
			v-bind="$attrs"
			:prefix="prefix"
			:size="innerSize"
			:disabled="innerDisabled"
			:model-value="innerValue"
			@change="handleChange"
			@input="handleInput"
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
	disabled: {
		type: Boolean,
		default: false,
	},
});

const emits = defineEmits([
	"update:modelValue",
	"change",
	"input",
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

// Change事件，格式化
function handleChange(value) {
	const emitValue = emitValueFormat(value);
	emits("update:modelValue", emitValue);
	emits("change", emitValue);
}

// Input事件，返回value 和 格式化后的值
function handleInput(value) {
	emits("input", value);
}

// 获取formItem
const govFormItem = inject("govFormItem", null);

// 计算大小
const innerSize = computed(() => {
	return props?.size || govFormItem?.size;
});

// 是否禁用
const innerDisabled = computed(() => {
	return props?.disabled || govFormItem?.disabled;
});

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
}
</script>

<style lang="scss">
.gov-input-number {
	display: inline-flex;
	align-items: stretch;
	justify-content: space-between;
	&__input {
		flex-grow: 1;
	}
	&__buttons {
		display: flex;
		align-items: stretch;
		justify-content: space-between;

		div {
			cursor: pointer;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 40px;
			margin-left: 5px;
			border-radius: var(--gov-border-radius-base);
			border: 1px solid var(--gov-border-color);
			color: var(--gov-text-color);
			font-size: 12px;
			transition: all 0.2s;
			&:hover {
				background-color: var(--gov-primary);
				border-color: var(--gov-primary);
				color: #fff;
			}
			&.is-disabled {
				cursor: not-allowed;
				background: var(--gov-fill-color-5);
				border-color: var(--gov-border-color-5);
				color: var(--gov-text-color-5);
				&:hover {
					border-color: var(--gov-border-color);
				}
			}
		}
	}
}
</style>
