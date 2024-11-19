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
});

const emits = defineEmits(["update:modelValue", "clear"]);

// 绑定Value
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

const clearText = () => {
	innerValue.value = "";
	emits("update:modelValue", "");
	emits("clear");
};
</script>

<style scoped></style>

<style lang="scss">
@use "./textarea.scss";
</style>
