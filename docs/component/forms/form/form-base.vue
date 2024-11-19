<template>
	<demo-container>
		<div style="font-size: 14px">
			<gov-radio-group button v-model="formSize">
				<gov-radio value="large">大尺寸</gov-radio>
				<gov-radio value="default">默认尺寸</gov-radio>
				<gov-radio value="small">小尺寸</gov-radio>
			</gov-radio-group>
			&nbsp;
			<gov-radio-group button v-model="formItemSpan">
				<gov-radio :value="24">一列显示</gov-radio>
				<gov-radio :value="12">两列显示</gov-radio>
			</gov-radio-group>
			&nbsp; 是否禁用：<gov-switch v-model="formDisabled" />
		</div>
		<hr />
		<gov-form
			ref="ruleFormRef"
			:model="formData"
			:rules="formRules"
			:size="formSize"
			:disabled="formDisabled"
		>
			<gov-form-item prop="name" label="姓名" :span="formItemSpan">
				<gov-input v-model="formData.name" />
			</gov-form-item>
			<gov-form-item prop="sex" label="性别" :span="formItemSpan">
				<gov-radio-group v-model="formData.sex">
					<gov-radio value="1">男生</gov-radio>
					<gov-radio value="2">女生</gov-radio>
				</gov-radio-group>
			</gov-form-item>
			<gov-form-item prop="hobby" label="爱好" :span="formItemSpan">
				<gov-checkbox-group v-model="formData.hobby">
					<gov-checkbox value="1">篮球</gov-checkbox>
					<gov-checkbox value="2">唱歌</gov-checkbox>
					<gov-checkbox value="3">跳舞</gov-checkbox>
				</gov-checkbox-group>
			</gov-form-item>
			<gov-form-item prop="fruit" label="喜欢水果" :span="formItemSpan">
				<gov-input-auto
					v-model="formData.fruit"
					:fetch="querySearch"
					placeholder="请选择喜欢的水果"
				/>
			</gov-form-item>
			<gov-form-item prop="orderTotal" label="订购" :span="formItemSpan">
				<gov-input-number
					v-model="formData.orderTotal"
					controls
					:step="500"
					suffix="件"
					placeholder="请填写"
				/>
			</gov-form-item>
			<gov-form-item
				prop="deliveryType"
				label="配送"
				:span="formItemSpan"
			>
				<gov-select v-model="formData.deliveryType">
					<gov-select-option label="货到付款" value="1" />
					<gov-select-option label="先买后付" value="2" />
					<gov-select-option label="在线支付" value="3" />
				</gov-select>
			</gov-form-item>
			<gov-form-item prop="address" label="地址" :span="formItemSpan">
				<gov-cascader
					v-model="formData.address"
					:options="locationTree"
				/>
			</gov-form-item>
			<gov-form-item
				prop="addressInfo"
				label="详细地址"
				:span="formItemSpan"
			>
				<gov-textarea
					v-model="formData.addressInfo"
					placeholder="请输入"
				/>
			</gov-form-item>
			<gov-form-item
				prop="deliveryDate"
				label="配送日期"
				:span="formItemSpan"
			>
				<gov-datepicker
					v-model="formData.deliveryDate"
					format="yyyy-MM-dd"
					placeholder="请选择日期"
				/>
			</gov-form-item>
			<gov-form-item
				prop="immediateDelivery"
				label="立即配送"
				:span="formItemSpan"
			>
				<gov-switch v-model="formData.immediateDelivery" />
			</gov-form-item>
			<gov-form-item prop="rateNum" label="评分" :span="formItemSpan">
				<gov-rate v-model="formData.rateNum" />
			</gov-form-item>
			<gov-form-item prop="files" label="附件" :span="formItemSpan">
				<gov-upload
					v-model="formData.files"
					:uploadRequest="simulateUpload"
					append="上传文件最大 500KB"
				/>
			</gov-form-item>
			<gov-form-item>
				<gov-button @click="handleSubmit" type="primary">
					提交
				</gov-button>
			</gov-form-item>
		</gov-form>
		<template #console>
			validState: {{ validState }}<br />
			invalidFields: {{ invalidFields }}
		</template>
	</demo-container>
</template>

<script setup>
import { ref, reactive } from "vue";
import { fruits } from "./fruits.js";
import locationTree from "./locationTree.js";

const ruleFormRef = ref();
const formSize = ref("default");
const formItemSpan = ref(24);
const formDisabled = ref(false);
const validState = ref(null);
const invalidFields = ref(null);

const formData = reactive({
	name: null,
	sex: null,
	hobby: null,
	fruit: "",
	orderTotal: null,
	deliveryType: null,
	address: [],
	addressInfo: null,
	deliveryDate: null,
	immediateDelivery: true,
	rateNum: null,
	files: [],
});

const formRules = reactive({
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
			trigger: "change",
		},
	],
	hobby: [
		{
			required: true,
			message: "请选择爱好！",
			trigger: "change",
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
			trigger: "change",
		},
	],
	address: [
		{
			required: true,
			message: "请选择配送方式！",
			trigger: "change",
		},
	],
	addressInfo: [
		{
			required: true,
			message: "该项为必填项！",
			trigger: "change",
		},
	],
	deliveryDate: [
		{
			required: true,
			message: "该项为必填项！",
			trigger: "change",
		},
	],
	immediateDelivery: [
		{
			required: true,
			message: "请选择配送方式！",
			trigger: "change",
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
});

// 自动补全
const querySearch = (str = "") => {
	return fruits.filter((el) => el.toLowerCase().includes(str.toLowerCase()));
};

// 模拟上传请求
function simulateUpload(file, fileId, onProgress) {
	const uploader = new Promise((resolve, reject) => {
		// 模拟上传进度
		let total = 0;
		const interval = setInterval(() => {
			if (total < 100) {
				total += 10;
				onProgress(total);
			} else {
				clearInterval(interval);
				// 模拟随机的成功或失败
				const success = Math.random() > 0.5 ? true : false;
				if (success) {
					const url = URL.createObjectURL(file._file); // 实际项目换成真实地址
					resolve({
						url,
					});
				} else {
					reject(new Error("Upload failed"));
				}
			}
		}, 500);
	});
	return uploader;
}

const handleSubmit = () => {
	ruleFormRef.value.validate((valid, fields) => {
		validState.value = valid;
		invalidFields.value = fields;
	});
};
</script>

<style lang="scss"></style>
