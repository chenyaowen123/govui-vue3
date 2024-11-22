<template>
	<GovCol
		v-bind="$attrs"
		:span="span"
		class="gov-form-item"
		:class="[
			innerSize && `gov-form-item--size-${innerSize}`,
			innerLabelPosition && `gov-form-item--label-${innerLabelPosition}`,
			`is-${validateState}`,
			{ 'is-disabled': innerDisabled },
		]"
	>
		<div
			class="gov-form-item__label"
			:class="{ 'is-empty': !label && !$slots.label }"
			:style="{ width: innerLabelWidth }"
		>
			<span class="gov-form-item__label-required" v-if="isRequired">
				*
			</span>
			<slot name="label">
				<span class="gov-form-item__label-txt">
					{{ label }}
				</span>
			</slot>
		</div>
		<div class="gov-form-item__content">
			<div class="gov-form-item__body">
				<slot />
			</div>
			<div class="gov-form-item__validate">
				<transition name="gov-form-validate-fade">
					<div
						v-if="validateState === 'error'"
						class="gov-form-item__validate-body"
					>
						<slot name="validate">
							{{ validateMessage }}
						</slot>
					</div>
				</transition>
			</div>
		</div>
	</GovCol>
</template>

<script setup>
import { reactive, provide, inject } from "vue";
import { useManageFieldToForm } from "./useManageFieldToForm";
import { useState } from "./useState";
import { useValidation } from "./useValidation";
import { useListenerManager } from "./listenerManager";
import GovCol from "../../grid/col/index.vue";

defineOptions({
	name: "govFormItem",
});

const props = defineProps({
	prop: String, // 表单域 model 字段
	label: String,
	rules: Object, // 表单验证规则，可以是 Object，也可以是 Array
	labelPosition: String,
	labelWidth: [String, Number],
	size: String,
	disabled: Boolean,
	// 提供给col的 span，默认是24
	span: {
		type: Number,
		default: 24,
		validator: (value) => {
			return value === undefined || (value >= 0 && value <= 24);
		},
	},
});

// 获取到 form
const govForm = inject("govForm", null);

// 状态计算
const { innerSize, innerDisabled, innerLabelPosition, innerLabelWidth } =
	useState(props, govForm);

// 创建事件管理器
const listenerManager = useListenerManager();

// 表单验证模块
const {
	isRequired,
	validateState,
	validateMessage,
	validate,
	clearValidate,
	resetField,
} = useValidation(props, govForm, listenerManager);

// 管理表单项管理模块
// 自动添加/删除到 form[fileds]，用于 form 组件批量操作
useManageFieldToForm(props, govForm, {
	validate,
	clearValidate,
	resetField,
});

// 监听表单控件，触发任意事件都会触发表单验证
// 表单验证会根据 trigger 来获取相应规则，没有规则是不会验证的
listenerManager.on("*", (triggerEventNames) => {
	validate(triggerEventNames, () => {});
});

// 组件暴露的方法，可以让 FormItem 利用ref的方式触发。
defineExpose({
	validate,
	clearValidate,
	resetField,
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
		...provideListener,
	}),
);
</script>

<style lang="scss">
@use "./formItem.scss";
</style>
