<template>
	<div
		class="gov-input-wrap"
		:style="width ? `width: ${props.width}px;` : ''"
	>
		<span
			v-if="slotsExist.addonBefore"
			class="gov-input-addon gov-input-addon-before"
		>
			<slot name="addonBefore">{{ addonBefore }}</slot>
		</span>
		<div
			class="gov-input"
			:class="[
				`gov-input--size-${innerSize}`,
				{
					'gov-input--before': slotsExist.addonBefore,
					'gov-input--after': slotsExist.addonAfter,
					'is-disabled': innerDisabled,
					'is-error': isError,
				},
			]"
		>
			<span v-if="slotsExist.prefix" class="gov-input-prefix">
				<slot name="prefix">{{ prefix }}</slot>
			</span>
			<input
				ref="inputRef"
				class="gov-input-field"
				:type="password && !showPassword ? 'password' : 'text'"
				v-model="innerValue"
				:placeholder="placeholder"
				:maxlength="maxlength"
				:disabled="innerDisabled"
				:readonly="readonly"
				@input="handleInput"
				@change="handleChange"
				@focus="handleFocus"
				@blur="handleBlur"
			/>
			<span v-if="showInputSuffix" class="gov-input-suffix">
				<span
					v-if="showClear"
					class="gov-input-action gov-input-clear"
					:class="[{ 'has-value': modelValue || modelValue == 0 }]"
					@click.stop="handleClear"
				>
					<GovIcon name="close" />
				</span>
				<span
					v-if="password"
					class="gov-input-action gov-input-password"
					:class="{ 'is-active': showPassword }"
					@click="showPassword = !showPassword"
				>
					<GovIcon name="view" />
				</span>
				<span v-if="count" class="gov-input-count">{{
					showCountNum
				}}</span>
				<span v-if="slotsExist.suffix" class="gov-input-suffix">
					<slot name="suffix">{{ suffix }}</slot>
				</span>
			</span>
		</div>
		<span
			v-if="slotsExist.addonAfter"
			class="gov-input-addon gov-input-addon-after"
		>
			<slot name="addonAfter">{{ addonAfter }}</slot>
		</span>
	</div>
</template>

<script setup>
import { ref, inject, computed, useSlots, nextTick } from "vue";
import GovIcon from "../icon/icon.vue";
import { useReset } from "../utils/useReset";

defineOptions({
	name: "GovInput",
});

const props = defineProps({
	width: {
		type: Number,
		default: null,
	},
	size: String,
	addonBefore: [String, Number],
	addonAfter: [String, Number],
	prefix: [String, Number],
	suffix: [String, Number],
	clearable: {
		type: Boolean,
		default: true,
	},
	password: Boolean,
	disabled: Boolean,
	readonly: Boolean,
	placeholder: {
		type: String,
		default: "请输入",
	},
	maxlength: Number,
	count: Boolean,
	modelValue: [String, Number],
	// 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
	triggerForm: {
		type: Boolean,
		default: true,
	},
});

const inputRef = ref(null);
const showPassword = ref(false);

const emits = defineEmits([
	"update:modelValue",
	"clear",
	"input",
	"change",
	"focus",
	"blur",
]);

// 绑定值
const innerValue = computed({
	get() {
		return props.modelValue;
	},
	set(val) {
		emits("update:modelValue", val);
	},
});

// 获取formItem
const govFormItem = inject("govFormItem", null);

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

// 根据插槽和props判断是否有元素
const slots = useSlots();
const slotsExist = {
	prefix: slots.prefix || props.prefix !== undefined,
	suffix: slots.suffix || props.suffix !== undefined,
	addonBefore: slots.addonBefore || props.addonBefore !== undefined,
	addonAfter: slots.addonAfter || props.addonAfter !== undefined,
};

// 是否显示清空按钮
const showClear = computed(() => {
	return !innerDisabled.value && props.clearable;
});

// 当设置最大长度显示统计数
const showCountNum = computed(() => {
	if (props.maxlength !== undefined) {
		return `${props.modelValue ? props.modelValue.length : 0} / ${props.maxlength}`;
	}
	return props.modelValue ? props.modelValue.length : 0;
});

const showInputSuffix = computed(() => {
	return (
		showClear.value || props.password || props.count || slotsExist.suffix
	);
});

function handleInput(e) {
	emits("input", e.target.value);
	if (props.triggerForm) {
		govFormItem?.$emit("input");
	}
}

function handleChange(e) {
	emits("change", e.target.value);
	if (props.triggerForm) {
		govFormItem?.$emit("change");
	}
	// 以下是解决因为vue缓存问题
	// 正常情况输入内容和value属性的值是一致的，但是会有外层处理数据的情况。
	// 例如输入数字，外层更改为最大值，不同的输入可能导致外层传递的 modelValue 是相同值（即都是最大值），
	// 这时候 dom 是不会更新的，因为 vue 认为没有必要更新，也就意味着 input 框始终是输入值，而不是最大值，两者就出现了脱节。
	nextTick(() => {
		inputRef.value.value = props.modelValue;
	});
}

function handleClear() {
	emits("update:modelValue", "");
	emits("clear");
	emits("input", "");
	emits("change", "");
	if (props.triggerForm) {
		govFormItem?.$emit(["clear", "change", "input"]);
	}
}

function handleBlur(e) {
	emits("blur", e);
	if (props.triggerForm) {
		govFormItem?.$emit("blur");
	}
}

function handleFocus(e) {
	emits("focus", e);
	if (props.triggerForm) {
		govFormItem?.$emit("focus");
	}
}
</script>

<style lang="scss">
@use "./input.scss";
</style>
