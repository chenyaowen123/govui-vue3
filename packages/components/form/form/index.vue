<template>
	<GovRow
		v-bind="$attrs"
		class="gov-form"
		:class="[
			size && `gov-form--size-${size}`,
			labelPosition && `gov-form--label-${labelPosition}`,
			{ 'is-disabled': disabled },
		]"
	>
		<slot />
	</GovRow>
</template>

<script setup>
import { reactive, toRefs, provide } from "vue";
import { useFields } from "./useFields";
import { useValidation } from "./useValidation";
import GovRow from "../../grid/row/index.vue";

defineOptions({
	name: "GovForm",
});

const props = defineProps({
	model: {},
	rules: {},
	size: String,
	labelPosition: String,
	labelWidth: {
		type: [String, Number],
		default: "100px",
	},
	disabled: Boolean,
});

// 管理 fields
const { fields, addField, removeField } = useFields();

// 表单验证模块
const validationFunctions = useValidation(props, fields);

// 组件暴露给组件使用者的方法 validate, validateFields, clearValidate, resetFields,
defineExpose(validationFunctions);

// 提供给 formItem 的状态和方法
provide(
	"govForm",
	reactive({
		...toRefs(props),
		addField,
		removeField,
	}),
);
</script>

<style lang="scss"></style>
