<template>
	<div
		class="gov-form-item"
		:class="[
			`gov-form-item--size-${size}`,
			`gov-form-item--label-${labelPosition}`,
			`is-${validateState}`,
			{ 'is-disabled': disabled },
		]"
	>
		<div class="gov-form-item__label">
			<span class="gov-form-item__label-required">*</span>
			<slot name="label">
				<span class="gov-form-item__label-txt">
					{{ label }}
				</span>
			</slot>
		</div>
		<div class="gov-form-item__body">
			<slot />
			<div class="gov-form-item__validate">
				<transition name="gov-form-validate-fade-in">
					<slot name="validate" v-if="validateState === 'error'">
						{{ validateMessage }}
					</slot>
				</transition>
			</div>
		</div>
	</div>
</template>

<script setup>
import { reactive, provide, inject } from "vue";
import { useManageFieldToForm } from "./useManageFieldToForm";
import { useState } from "./useState";
import { useValidation } from "./useValidation";
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

// 管理表单项管理模块
// 自动添加/删除到 form[fileds]，用于 form 组件批量操作
useManageFieldToForm(props, govForm, validate, clearValidate);

// 状态计算
const { innerSize, innerDisabled } = useState(props, govForm);

// 表单验证模块
const {
	validateState,
	validateMessage,
	validate,
	clearValidate,
	triggerValidateEvents,
} = useValidation(props, govForm);

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
		size: innerSize,
		disabled: innerDisabled,
		validateState,
		validateMessage,
		triggerValidateEvents,
		...provideListener,
	}),
);
</script>

<style lang="scss">
@use "./formItem.scss";
</style>
