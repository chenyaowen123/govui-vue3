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
				`gov-input--size-${size}`,
				{
					'gov-input--before': slotsExist.addonBefore,
					'gov-input--after': slotsExist.addonAfter,
					'gov-input--disabled': disabled,
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
				:disabled="disabled"
				:readonly="readonly"
				@input="onInput"
				@change="onChange"
				@focus="onFocus"
				@blur="onBlur"
			/>
			<span v-if="showInputSuffix" class="gov-input-suffix">
				<span
					v-if="showClear"
					class="gov-input-action gov-input-clear"
					:class="[{ 'has-value': modelValue && modelValue != 0 }]"
					@click.stop="onClear"
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
import { ref, computed, useSlots, nextTick } from "vue";
import GovIcon from "../icon/icon.vue";

defineOptions({
	name: "GovInput",
});

const props = defineProps({
	width: {
		type: Number,
		default: null, // 日期选择器宽度
	},
	size: {
		type: String,
		default: "default",
	},
	addonBefore: {
		type: [String, Number],
		default: undefined,
	},
	addonAfter: {
		type: [String, Number],
		default: undefined,
	},
	prefix: {
		type: [String, Number],
		default: undefined,
	},
	suffix: {
		type: [String, Number],
		default: undefined,
	},
	clearable: {
		type: Boolean,
		default: true,
	},
	password: {
		type: Boolean,
		default: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	readonly: {
		type: Boolean,
		default: false,
	},
	placeholder: {
		type: String,
		default: "请输入",
	},
	maxlength: {
		type: Number,
		default: undefined,
	},
	count: {
		type: Boolean,
		default: false,
	},
	modelValue: {
		type: [String, Number],
		default: undefined,
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

// 根据插槽和props判断是否有元素
const slots = useSlots();
const slotsExist = {
	prefix: slots.prefix || props.prefix !== undefined,
	suffix: slots.suffix || props.suffix !== undefined,
	addonBefore: slots.addonBefore || props.addonBefore !== undefined,
	addonAfter: slots.addonAfter || props.addonAfter !== undefined,
};

const showClear = computed(() => {
	return !props.disabled && props.clearable;
});

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

function onInput(e) {
	emits("input", e.target.value);
}

function onChange(e) {
	emits("change", e.target.value);
	// 以下是解决因为vue缓存问题
	// 正常情况输入内容和value属性的值是一致的，但是会有外层处理数据的情况。
	// 例如输入数字，外层更改为最大值，不同的输入可能导致外层传递的 modelValue 是相同值（即都是最大值），
	// 这时候 dom 是不会更新的，因为 vue 认为没有必要更新，也就意味着 input 框始终是输入值，而不是最大值，两者就出现了脱节。
	nextTick(() => {
		inputRef.value.value = props.modelValue;
	});
}

function onClear() {
	emits("update:modelValue", "");
	emits("clear");
	emits("input", "");
	emits("change", "");
}

function onBlur(e) {
	emits("blur", e);
}

function onFocus(e) {
	emits("focus", e);
}
</script>

<style lang="scss">
@import "./input.scss";
</style>
