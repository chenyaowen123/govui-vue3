import { computed } from "vue";

/**
 * 用于管理状态、样式等
 * @param {*} props props 里的状态
 * @param {*} govForm govForm 里的状态
 * @returns {Object} - 计算后的状态
 */

export function useState(props, govForm) {
	// 计算大小
	const innerSize = computed(() => {
		return props?.size || govForm?.size || "default";
	});

	// 是否禁用
	const innerDisabled = computed(() => {
		return props?.disabled || govForm?.disabled;
	});

	// label位置
	const innerLabelPosition = computed(() => {
		return props?.labelPosition || govForm?.labelPosition;
	});

	// label宽度
	const innerLabelWidth = computed(() => {
		let width = props?.labelWidth || govForm?.labelWidth;
		return typeof width === "string" ? width : width + "px";
	});
	return { innerSize, innerDisabled, innerLabelPosition, innerLabelWidth };
}
