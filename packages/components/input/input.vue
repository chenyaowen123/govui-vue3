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
					'gov-input-before': slotsExist.addonBefore,
					'gov-input-after': slotsExist.addonAfter,
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
				:value="modelValue"
				:placeholder="placeholder"
				:maxlength="maxlength"
				:disabled="disabled"
				@input="onInput"
				@change="onChange"
				@focus="emits('focus', $event)"
				@blur="emits('blur', $event)"
			/>
			<span v-if="showInputSuffix" class="gov-input-suffix">
				<span
					v-if="showClear"
					class="gov-input-action gov-input-clear"
					:class="[{ 'has-value': modelValue && modelValue != 0 }]"
					@click="onClear"
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
import { ref, computed, useSlots } from "vue";
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
		type: [String, Object],
		default: undefined,
	},
	addonAfter: {
		type: [String, Object],
		default: undefined,
	},
	prefix: {
		type: [String, Object],
		default: undefined,
	},
	suffix: {
		type: [String, Object],
		default: undefined,
	},
	clear: {
		type: Boolean,
		default: false,
	},
	password: {
		type: Boolean,
		default: false,
	},
	disabled: {
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
		type: String,
		default: undefined,
	},
	modelValueModifiers: {
		type: Object,
		default: () => ({}),
	},
});

const inputRef = ref(null);
const showPassword = ref(false);

const emits = defineEmits([
	"update:modelValue",
	"input",
	"change",
	"focus",
	"blur",
]);

// 根据插槽和props判断是否有元素
const slots = useSlots();
const slotsExist = {
	prefix: slots.prefix || props.prefix !== undefined,
	suffix: slots.suffix || props.suffix !== undefined,
	addonBefore: slots.addonBefore || props.addonBefore !== undefined,
	addonAfter: slots.addonAfter || props.addonAfter !== undefined,
};

const showClear = computed(() => {
	return !props.disabled && props.clear;
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
	emits("update:modelValue", e.target.value);
	emits("input", e.target.value);
}

function onChange(e) {
	emits("update:modelValue", e.target.value);
	emits("change", e.target.value);
}

function onClear() {
	emits("update:modelValue", "");
	emits("input", "");
}
</script>

<style lang="scss">
@import "./input.scss";
</style>
