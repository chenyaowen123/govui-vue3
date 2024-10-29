<template>
	<div
		class="gov-switch"
		:class="[
			type ? 'gov-switch--' + type : '',
			{ 'is-disabled': isDisabled },
		]"
	>
		<label class="gov-switch__layer">
			<input
				type="checkbox"
				v-bind="$attrs"
				v-model="innerValue"
				:disabled="isDisabled"
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
	disabled: Boolean,
	trueValue: {
		default: true,
	},
	falseValue: {
		default: false,
	},
});
// 依赖注入
const govForm = inject("govForm", "");

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

// 计算是否禁用
const isDisabled = computed(() => {
	return props.disabled != null ? props.disabled : (govForm || {}).disabled;
});
</script>

<style lang="scss">
@import "./switch.scss";
</style>
