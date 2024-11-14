<template>
	<div class="gov-form-item">
		<slot />
	</div>
</template>

<script setup>
import {
	ref,
	reactive,
	provide,
	inject,
	computed,
	watch,
	onBeforeUnmount,
} from "vue";
import AsyncValidator from "async-validator";

defineOptions({
	name: "govFormItem",
});

const props = defineProps({
	prop: String, // 表单域 model 字段
	label: String,
	rules: Object, // 表单验证规则，可以是 Object，也可以是 Array
	labelWidth: String,
	size: String,
	disabled: Boolean,
});

// 获取到 form
const govForm = inject("govForm", null);

// 最终规则，优先自身绑定规则
const innerRules = computed(() => {
	let fromFormRules = govForm?.rules[props.prop];
	let propsRules = props.rules;
	let rules = propsRules || fromFormRules || [];
	rules = Array.isArray(rules) ? rules : [rules];
	rules = rules.map((rule) => Object.assign({}, rule)); // 做一次浅层复制，数据更安全
	return rules;
});

// 获取特定规则，适应于不同触发场景，例如 blur change
const getTriggerRule = (trigger) => {
	let rules = innerRules.value.filter((rule) => {
		if (!rule.trigger || trigger === "") return true;
		if (Array.isArray(rule.trigger)) {
			return rule.trigger.indexOf(trigger) > -1;
		} else {
			return rule.trigger === trigger;
		}
	});
	return rules;
};

// Value、状态、提示语
const validateState = ref(true); // validating  success error
const validateMessage = ref("");
const fieldValue = computed(() => {
	let model = govForm?.model;
	if (!model || !props.prop) {
		return;
	} else {
		return model[props.prop];
	}
});

// 表单验证
const validate = (trigger, callback) => {
	let rules = getTriggerRule(trigger);
	if (!rules || rules.length === 0) {
		callback(validateState.value);
		return true;
	}
	validateState.value = "validating";

	// 组装 AsyncValidator 必要的 model， descriptor
	const model = {};
	const descriptor = {};
	model[props.prop] = fieldValue.value;
	descriptor[props.prop] = rules.map((rule) => {
		delete rule.trigger;
		return rule;
	});

	// 实例化一个 AsyncValidator 对象进行验证
	// errors是所有错误的数组，fields是按字段名键值对存储的每个字段的错误数组
	const validator = new AsyncValidator(descriptor);
	validator.validate(
		model,
		{ firstFields: true },
		(errors, invalidFields) => {
			let state = errors && errors.length == 0;
			validateState.value = state ? "error" : "success";
			validateMessage.value = state ? errors[0].message : "";
			callback(validateState.value, invalidFields);
		},
	);
};

// 清空表单验证
const clearValidate = () => {
	// 清除验证整个表单验证结果
};

// 管理上层 form[fields] 添加表单项
watch(
	() => props.prop,
	(newValue, oldValue) => {
		let field = { validate, clearValidate };
		govForm?.removeField({ prop: oldValue });
		govForm?.addField({ ...field, prop: newValue });
	},
);

// 卸载前从上层 form[fields] 里删除
onBeforeUnmount(() => {
	govForm?.removeField({ prop: props.prop });
});

// 计算大小
const size = computed(() => {
	return props?.size || govForm?.size;
});

// 是否禁用
const disabled = computed(() => {
	return props?.disabled || govForm?.disabled;
});

// 组件暴露的方法
defineExpose({
	validate,
	clearValidate,
});

// 提供给具体控件
provide(
	"govFormItem",
	reactive({
		size,
		disabled,
	}),
);
</script>

<style lang="scss"></style>
