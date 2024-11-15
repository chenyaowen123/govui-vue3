/**
 * 处理表单项的验证逻辑。
 * @param {*} props 状态。
 * @param {*} fields 所有表单项
 * @returns {Object} 提供验证、清空验证和触发验证事件的方法。
 */

export function useValidation(props, fields) {
	// 通用验证函数，用于处理验证逻辑
	const commonvalidateFieldss = (fieldsToValidate = [], callback) => {
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
		return commonvalidateFieldss(fields.value, callback);
	};

	// 验证指定的表单项：循环指定 field 里的验证并收集起来。
	const validateFields = (modelProps, callback) => {
		modelProps = [].concat(modelProps);
		const newFields = fields.value.filter(
			(field) => modelProps.indexOf(field.prop) !== -1,
		);
		if (!newFields.length) {
			console.warn(
				`[GovUI]：传递给 validateFields 的 modelProps 不匹配！传入值为：${modelProps}`,
			);
			return;
		}
		return commonvalidateFieldss(newFields, callback);
	};

	// 清除验证表单验证结果，指定或者全部
	// Function(modelProps: array | string)
	const clearValidate = (modelProps = []) => {
		let arr = [];
		if (modelProps.length) {
			if (typeof modelProps === "string") {
				arr = fields.value.filter((field) => modelProps === field.prop);
			} else {
				arr = fields.value.filter(
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

	// 重置表单：逐一触发表单项的重置
	const resetFields = () => {
		fields.value.forEach((field) => {
			field.resetField();
		});
	};

	return {
		validate,
		validateFields,
		clearValidate,
		resetFields,
	};
}
