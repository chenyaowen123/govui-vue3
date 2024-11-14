<template>
	<div class="gov-form"><slot /></div>
</template>

<script setup>
import { ref,reactive, toRefs, provide } from "vue";

defineOptions({
	name: "GovForm",
});

const props = defineProps({
	model: Object,
	rules: Object,
	size: String,
	disabled: Boolean,
});

// 管理所有的 formItem，[{ validate, clearValidate, prop }]
const fields = ref([]);
const addField = (field) => {
	fields.value.push(field);
};
const removeField = (field) => {
	fields.value = fields.value.filter((i) => i != field.prop);
};

// 通用验证函数，用于处理验证逻辑
// Function(callback: Function(boolean, object))
const validateFields = (fieldsToValidate, callback) => {
	let valid = true;
	let invalidFields = [];

	// 逐一验证指定的字段
	fieldsToValidate.forEach((field) => {
		field.validate(null, (itemState, itemInvalidFields) => {
			if (itemState === "error") {
				valid = false;
				invalidFields = invalidFields.concat(itemInvalidFields);
			}
		});
	});

	// 处理回调和 Promise 返回
	if (typeof callback === "function") {
		callback(valid, invalidFields);
	} else {
		return new Promise((resolve, reject) => {
			valid ? resolve() : reject(invalidFields);
		});
	}
};

// 表单整体验证：循环每个 field 里的验证并收集起来。
const validate = (callback) => {
	if (!props.model) {
		console.warn("[GovUI]：表单验证需要 <gov-form> 组件绑定 model !");
		return;
	}
	return validateFields(fields.value, callback);
};

// 验证指定的表单项
const validateField = (modelProps, callback) => {
	modelProps = [].concat(modelProps);
	const newFields = fields.value.filter(
		(field) => modelProps.indexOf(field.prop) !== -1,
	);
	if (!newFields.length) {
		console.warn(
			`[GovUI]：传递给 validateField 的 modelProps 不匹配！传入值为：${modelProps}`,
		);
		return;
	}
	return validateFields(newFields, callback);
};

// 清除验证表单验证结果，指定或者全部
// Function(modelProps: array | string)
const clearValidate = (modelProps = []) => {
	let arr = [];
	if (modelProps.length) {
		if (typeof modelProps === "string") {
			arr = fields.value.filter((field) => modelProps === field.prop);
		} else {
			arr = files.value.filter(
				(field) => modelProps.indexOf(field.prop) > -1,
			);
		}
	} else {
		arr = fields.value;
	}
	arr.forEach((field) => {
		field.clearValidate();
	});
};

// 组件暴露的方法
defineExpose({
	validate,
	validateField,
	clearValidate,
});

// 提供给 formItem
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
