<template>
	<div class="gov-form-item">
		{{ validateState }}
		{{ validateMessage }}
		<slot />
	</div>
</template>

<script setup>
import { reactive, provide, inject } from "vue";
import { useValidation } from "./useValidation";
import { useManageFieldToForm } from "./useManageFieldToForm";
import { useState } from "./useState";
import { useListenerManager } from "./listenerManager";

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

// 状态计算
const { size, disabled } = useState(props, govForm);

// 表单验证模块
const {
	validateState,
	validateMessage,
	validate,
	clearValidate,
	triggerValidateEvents,
} = useValidation(props, govForm);

// 管理表单项管理模块
// 自动添加/删除到 form[fileds]，用于 form 组件批量操作
useManageFieldToForm(props, govForm, validate, clearValidate);

// 创建事件管理器
const listenerManager = useListenerManager();

// 组件暴露的方法
defineExpose({
	validate,
	clearValidate,
	resetField: () => {
		clearValidate();
		listenerManager.emit("reset");
	},
});

// 提供给具体表单控件的事件bus
const provideListener = {
	$on(event, callback) {
		listenerManager.on(event, callback);
	},
	$off(event, callback) {
		listenerManager.off(event, callback);
	},
	$emit(event, payload) {
		listenerManager.emit(event, payload);
	},
};

// 提供给具体表单控件
provide(
	"govFormItem",
	reactive({
		size,
		disabled,
		validateState,
		validateMessage,
		triggerValidateEvents,
		...provideListener,
	}),
);
</script>

<style lang="scss"></style>
