export default {
	name: [
		{
			required: true,
			message: "请输入姓名！",
			trigger: ["blur", "input", "change"],
		},
		{
			min: 3,
			max: 5,
			message: "限制3-5个字符！",
			trigger: ["blur", "input", "change"],
		},
	],
	sex: [
		{
			required: true,
			message: "请选择性别！",
			trigger: ["blur", "change"],
		},
	],
	hobby: [
		{
			required: true,
			message: "请选择爱好！",
			trigger: ["blur", "change"],
		},
	],
	fruit: [
		{
			required: true,
			message: "请选择喜欢的水果！",
			trigger: ["blur", "input", "change"],
		},
	],
	orderTotal: [
		{
			required: true,
			message: "请选择订购数！",
			trigger: ["blur", "input", "change"],
		},
	],
	deliveryType: [
		{
			required: true,
			message: "请选择配送方式！",
			trigger: ["blur", "input", "change"],
		},
	],
	address: [
		{
			required: true,
			message: "请选择配送方式！",
			trigger: ["blur", "input", "change"],
		},
	],
	addressInfo: [
		{
			required: true,
			message: "该项为必填项！",
			trigger: ["blur", "input", "change"],
		},
	],
	deliveryDate: [
		{
			required: true,
			message: "该项为必填项！",
			trigger: ["blur", "input", "change"],
		},
	],
	immediateDelivery: [
		{
			required: true,
			type: "boolean",
			// 自定义校验函数，确保值必须是 true
			validator: (rule, value, callback) => {
				if (value !== true) {
					return callback(new Error("你必须打开此项！"));
				}
				callback();
			},
			trigger: ["blur", "change"],
		},
	],
	rateNum: [
		{
			required: true,
			message: "该项为必填项！",
			trigger: "change",
		},
	],
	files: [
		{
			required: true,
			message: "该项为必填项！",
			trigger: "change",
		},
	],
};
