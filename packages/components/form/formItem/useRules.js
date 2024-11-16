import { computed } from "vue";

/**
 * 用于管理和计算表单项的验证规则。
 * @param {*} props 用于获取 formItem 绑定的规则
 * @param {*} govForm 用于获取 form 绑定的规则
 * @returns {Object} - 包含 getTriggerRule 方法的对象。
 */

export function useRules(props, govForm) {
	// 规则选取，优先级：formItem > form
	const innerRules = computed(() => {
		let fromFormRules = govForm?.rules[props.prop];
		let propsRules = props.rules;
		let rules = propsRules || fromFormRules || [];
		rules = Array.isArray(rules) ? rules : [rules];
		rules = rules.map((rule) => Object.assign({}, rule)); // 做一次浅层复制，数据更安全
		return rules;
	});

	// 是否必填项
	const isRequired = computed(() =>
		innerRules.value.some((rule) => rule.required),
	);

	// 获取特定时间的规则
	// 适应于不同触发场景，例如 blur change
	const getTriggerRule = (trigger) => {
		let rules = innerRules.value.filter((rule) => {
			if (!rule.trigger || !trigger) return true;
			if (Array.isArray(rule.trigger)) {
				return rule.trigger.indexOf(trigger) > -1;
			} else {
				return rule.trigger === trigger;
			}
		});
		return rules;
	};
	return { isRequired, innerRules, getTriggerRule };
}
