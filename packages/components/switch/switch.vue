<template>
	<div
		class="gov-switch"
		:class="[
			`gov-switch--size-${innerSize}`,
			type ? 'gov-switch--' + type : '',
			{ 'is-disabled': innerDisabled },
		]"
	>
		<label class="gov-switch__layer">
			<input
				type="checkbox"
				v-bind="$attrs"
				v-model="innerValue"
				:disabled="innerDisabled"
				:true-value="trueValue"
				:false-value="falseValue"
			/>
			<span class="gov-switch__point"></span>
		</label>
	</div>
</template>

<script setup>
import { computed, inject } from "vue";

defineOptions({
	name: "GovSwitch",
});

const props = defineProps({
	modelValue: {},
	type: {
		type: String,
		default: "default",
	},
	size: String,
	disabled: Boolean,
	trueValue: {
		default: true,
	},
	falseValue: {
		default: false,
	},
});

const emit = defineEmits(["update:modelValue", "change"]);
const innerValue = computed({
	get() {
		return props.modelValue;
	},
	set(val) {
		emit("change", val);
		emit("update:modelValue", val);
	},
});

// 依赖注入
const govFormItem = inject("govFormItem", null);

// 计算大小
const innerSize = computed(() => {
	return props?.size || govFormItem?.size;
});

// 是否禁用
const innerDisabled = computed(() => {
	return props?.disabled || govFormItem?.disabled;
});
</script>

<style lang="scss">
@use "./switch.scss";
</style>
