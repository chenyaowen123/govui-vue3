<template>
	<div class="gov-form"><slot /></div>
</template>

<script setup>
import { reactive, toRefs, provide } from "vue";
import { useFields } from "./useFields";
import { useValidation } from "./useValidation";

defineOptions({
	name: "GovForm",
});

const props = defineProps({
	model: Object,
	rules: Object,
	size: String,
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
