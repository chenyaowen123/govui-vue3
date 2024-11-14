<template>
	<div class="gov-form"><slot /></div>
</template>

<script setup>
import { ref, reactive, toRefs, provide } from "vue";

defineOptions({
	name: "GovForm",
});

const props = defineProps({
	model: Object,
	rules: Object,
	size: String,
	disabled: Boolean,
});

// 管理所有的 formItem
const fields = ref([]);
const addField = (field) => {
	fields.value.push(field);
};
const removeField = (field) => {
	fields.value = fields.value.filter((i) => i != field.prop);
};

// 根据 prop 列表和 rules 匹配
const validate = (callback) => {
	if (!props.model) {
		console.warn("[GovUI]：表单验证需要 <gov-form> 组件绑定 model !");
		return;
	}

	// 记录验证状态和提示语
	// itemState是表单项逐一验证状态，itemInvalidFields是按字段名键值对存储的每个字段的错误数组
	let valid = true;
	let invalidFields = [];
	fields.value.forEach((field) => {
		let trigger = null;
		field.validate(trigger, (itemState, itemInvalidFields) => {
			if (itemState === "error") {
				valid = false;
				invalidFields.push(itemInvalidFields);
			}
		});
	});

	// 两种方式返回，有回调用回调函数，否则返回 promise
	if (typeof callback === "function") {
		callback(valid, invalidFields);
	} else {
		return new Promise((resolve, reject) => {
			valid ? resolve() : reject(invalidFields);
		});
	}
};

// 清除验证整个表单验证结果
const clearValidate = () => {
	fields.value.forEach((field) => {
		field.clearValidate();
	});
};

// 组件暴露的方法
defineExpose({
	validate,
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
