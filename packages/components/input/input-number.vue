<template>
	<div class="gov-input-number">
		<gov-input
			:model-value="innerValue"
			v-bind="$attrs"
			type="text"
			@change="handleChange"
			@input="handleInput"
			class="gov-input-number__input"
		/>
		<div class="gov-input-number__buttons">
			<div @click="decrement">-</div>
			<div @click="increment">+</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from "vue";
import govInput from "./input.vue";
import numeral from "numeral";

defineOptions({
	name: "GovInputNumber",
});

const props = defineProps({
	modelValue: {
		type: Number,
	},
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
	valueFormat: {
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
	if (!value & (value !== 0)) {
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
	if (!props.modelValue & (props.modelValue !== 0)) {
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

// 加减
function increment() {
	const newValue = numeral(props.modelValue).add(props.step).value();
	const emitValue = emitValueFormat(newValue);
	emits("update:modelValue", emitValue);
	emits("change", emitValue);
	emits("add", emitValue);
}

function decrement() {
	const newValue = numeral(props.modelValue).subtract(props.step).value();
	const emitValue = emitValueFormat(newValue);
	emits("update:modelValue", emitValue);
	emits("change", emitValue);
	emits("subtract", emitValue);
}
</script>

<style lang="scss">
.gov-input-number {
	display: flex;
	flex-direction: column;
	align-items: center;
	&__buttons {
		display: flex;
		width: 100%;
		justify-content: space-between;
		button {
			flex: 1;
			margin: 2px;
		}
	}
}
</style>
