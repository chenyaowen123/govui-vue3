import { ref, computed } from "vue";
import { useRules } from "./useRules";
import { getPropByPath } from "./utils.js";
import AsyncValidator from "async-validator";

/**
 * 处理表单项的验证逻辑。
 * @param {*} props 传入的表单项属性，包括验证规则等。
 * @param {*} govForm 表单的上下文，包含整个表单的状态和方法。
 * @param {*} listenerManager 表单的上下文事件队列，用于重置表单。
 * @returns {Object} 提供验证、清空验证和触发验证事件的方法。
 */

export function useValidation(props, govForm, listenerManager) {
	const { isRequired, getTriggerRule } = useRules(props, govForm);

	// 定义当前表单项的：状态、提示语、Value
	const validateState = ref(true); // validating  success error
	const validateMessage = ref("");
	const fieldValue = computed(() => {
		let model = govForm?.model;
		if (model && props.prop) {
			let path = props.prop;
			let value = getPropByPath(model, path, true).value;
			return value;
		} else {
			return undefined;
		}
	});

	// 当前表单项的验证
	const validate = (trigger, callback = () => {}) => {
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
				let isError = errors && errors.length !== 0;
				validateState.value = isError ? "error" : "success";
				validateMessage.value = isError ? errors[0].message : "";
				callback(validateState.value, invalidFields);
			},
		);
	};

	// 清空表单验证
	const clearValidate = () => {
		validateState.value = "";
		validateMessage.value = "";
	};

	// 重置表单
	const resetField = () => {
		listenerManager.emit("reset");
		clearValidate();
	};

	return {
		isRequired,
		validateState,
		validateMessage,
		validate,
		clearValidate,
		resetField,
	};
}
