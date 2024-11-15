import { computed } from "vue";

/**
 * 用于管理状态、样式等
 * @param {*} props props 里的状态
 * @param {*} govForm govForm 里的状态
 * @returns {Object} - 计算后的状态
 */

export function useState(props, govForm) {
	// 计算大小
	const size = computed(() => {
		return props?.size || govForm?.size;
	});

	// 是否禁用
	const disabled = computed(() => {
		return props?.disabled || govForm?.disabled;
	});
	return { size, disabled };
}
