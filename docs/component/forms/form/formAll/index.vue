<template>
	<demo-container>
		<!-- 控制器 -->
		<div>
			<gov-radio-group button v-model="formSize">
				<gov-radio value="large">大尺寸</gov-radio>
				<gov-radio value="default">默认尺寸</gov-radio>
				<gov-radio value="small">小尺寸</gov-radio>
			</gov-radio-group>
			&nbsp; 是否禁用：<gov-switch v-model="formDisabled" />
		</div>
		<hr />
		<!-- 表单内容 -->
		<gov-form
			ref="ruleFormRef"
			:model="formData"
			:rules="formRules"
			:size="formSize"
			:disabled="formDisabled"
		>
			<gov-form-item prop="name" label="姓名">
				<gov-input v-model="formData.name" />
			</gov-form-item>
			<gov-form-item prop="sex" label="性别">
				<gov-radio-group v-model="formData.sex">
					<gov-radio value="1">男生</gov-radio>
					<gov-radio value="2">女生</gov-radio>
				</gov-radio-group>
			</gov-form-item>
			<gov-form-item prop="hobby" label="爱好">
				<gov-checkbox-group v-model="formData.hobby">
					<gov-checkbox value="1">篮球</gov-checkbox>
					<gov-checkbox value="2">唱歌</gov-checkbox>
					<gov-checkbox value="3">跳舞</gov-checkbox>
				</gov-checkbox-group>
			</gov-form-item>
			<gov-form-item prop="fruit" label="喜欢水果">
				<gov-input-auto
					v-model="formData.fruit"
					:fetch="querySearch"
					placeholder="请选择喜欢的水果"
				/>
			</gov-form-item>
			<gov-form-item prop="orderTotal" label="订购">
				<gov-input-number
					v-model="formData.orderTotal"
					controls
					:step="500"
					suffix="件"
					placeholder="请填写"
				/>
			</gov-form-item>
			<gov-form-item prop="deliveryType" label="配送">
				<gov-select v-model="formData.deliveryType">
					<gov-select-option label="货到付款" value="1" />
					<gov-select-option label="先买后付" value="2" />
					<gov-select-option label="在线支付" value="3" />
				</gov-select>
			</gov-form-item>
			<gov-form-item prop="address" label="地址">
				<gov-cascader
					v-model="formData.address"
					:options="locationTree"
				/>
			</gov-form-item>
			<gov-form-item prop="addressInfo" label="详细地址">
				<gov-textarea
					v-model="formData.addressInfo"
					placeholder="请输入"
				/>
			</gov-form-item>
			<gov-form-item prop="deliveryDate" label="配送日期">
				<gov-datepicker
					v-model="formData.deliveryDate"
					format="yyyy-MM-dd"
					placeholder="请选择日期"
				/>
			</gov-form-item>
			<gov-form-item prop="immediateDelivery" label="立即配送">
				<gov-switch v-model="formData.immediateDelivery" />
			</gov-form-item>
			<gov-form-item prop="rateNum" label="评分">
				<gov-rate v-model="formData.rateNum" />
			</gov-form-item>
			<gov-form-item prop="files" label="附件">
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
				<gov-button @click="handleReset"> 重置 </gov-button>
				<gov-button @click="handleValidateFields">
					验证部分表单
				</gov-button>
				<gov-button @click="handleClearValidate">
					清除表单验证
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
import rules from "./rules.js";
import { fruits } from "./fruits.js";
import locationTree from "./locationTree.js";
// import uploadFile from "./axiosUpload.js";
import uploadFile from "./simulateUpload.js";

const ruleFormRef = ref();
const formSize = ref("default");
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

// 表单验证规则
const formRules = reactive(rules);

// 自动补全 fetch
const querySearch = (str = "") => {
	return fruits.filter((el) => el.toLowerCase().includes(str.toLowerCase()));
};

// 上传请求
function simulateUpload(file, fileId, onProgress) {
	return uploadFile({ myfile: file }, onProgress).then((response) => {
		// 返回 url 预览图片；返回 response 后端数据。
		return {
			url: "/logo.png",
			response,
		};
	});
}

// 提交并验证
const handleSubmit = () => {
	ruleFormRef.value.validate((valid, fields) => {
		validState.value = valid;
		invalidFields.value = fields;
	});
};

// 重置
const handleReset = () => {
	validState.value = null;
	invalidFields.value = null;
	ruleFormRef.value.resetFields();
};

// 验证部分表单
const handleValidateFields = () => {
	ruleFormRef.value.validateFields(["name", "sex"], (valid, fields) => {
		validState.value = valid;
		invalidFields.value = fields;
	});
};

// 清除表单验证
const handleClearValidate = () => {
	validState.value = null;
	invalidFields.value = null;
	ruleFormRef.value.clearValidate();
};
</script>
