/**
 * 确保CSS值有单位
 * 如果值是数字且没有单位，则添加'px'单位
 * @param {string|number} value - CSS值
 * @return {string} 确保有单位的CSS值
 */
export const ensureCssUnit = (value) => {
	if (typeof value === "number") {
		return `${value}px`;
	} else if (typeof value === "string" && !/[%pxemremvwvh]$/.test(value)) {
		return `${value}px`;
	}
	return value;
};
