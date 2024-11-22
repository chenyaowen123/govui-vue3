// 根据字符串路径查找对象内的值
// 此函数用于根据 prop 属性在 govForm.model 中查找对应的值
// 例如，'domains.0.value' 用于查找 model 中形如 { domains: [{ value: '123' }] } 的第一个元素的 value 属性值
export const getPropByPath = (obj, path, strict) => {
	let tempObj = obj; // 临时对象，用于追踪当前遍历到的对象

	// 如果路径中包含冒号（:），则将其替换为点（.）
	if (path.indexOf(":") !== -1) {
		path = path.replace(/:/g, ".");
	}

	// 将路径中的数组访问语法（如[key]）转换为点访问语法（如.key）
	path = path.replace(/\[(\w+)\]/g, ".$1");

	// 如果路径以点开头，将其移除
	path = path.replace(/^\./, "");

	// 将路径字符串转换为数组，以便进行循环遍历
	let keyArr = path.split(".");

	// 遍历路径数组，直到倒数第二个元素，因为最后一个元素是最终要获取的属性
	let i = 0;
	for (let len = keyArr.length; i < len - 1; ++i) {
		// 如果 tempObj 已经不存在，并且 strict 模式为 false，则退出循环
		if (!tempObj && !strict) break;

		let key = keyArr[i]; // 当前路径中的键
		// 如果当前键存在于 tempObj 中，则更新 tempObj 为该键对应的值
		if (key in tempObj) {
			tempObj = tempObj[key];
		} else {
			// 如果严格模式（strict）为 true，且路径无效，则抛出错误
			if (strict) {
				throw new Error("formItem[prop] 路径无效 !");
			}
			break;
		}
	}

	// 返回一个对象，包含最终的对象（obj）、键（key）和值（value）
	// 例如，对于路径 'domains.0.value'，返回 { obj: { value: '123' }, key: 'value', value: '123' }
	return {
		obj: tempObj,
		key: keyArr[i],
		value: tempObj ? tempObj[keyArr[i]] : null,
	};
};
