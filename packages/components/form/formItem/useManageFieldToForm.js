import { watch, onBeforeUnmount } from "vue";

/**
 * 管理表单项，添加/删除到 form[fileds]
 * @param {*} props 用于获取 formItem 绑定的规则
 * @param {*} govForm 用于获取 form 绑定的规则
 * @returns {Object} - 包含 getTriggerRule 方法的对象。
 */

export function useManageFieldToForm(props, govForm, validate, clearValidate) {
	// 添加表单项，没有 props.prop 将不会收集
	watch(
		() => props.prop,
		(newValue, oldValue) => {
			if (oldValue) {
				govForm?.removeField({ prop: oldValue });
			}
			if (newValue) {
				govForm?.addField({ validate, clearValidate, prop: newValue });
			}
		},
		{
			immediate: true,
		},
	);

	// 卸载前从上层 form[fields] 里删除
	onBeforeUnmount(() => {
		govForm?.removeField({ prop: props.prop });
	});
}
