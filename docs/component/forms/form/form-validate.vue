<template>
	<demo-container>
		<gov-form ref="ruleFormRef" :model="formData" :rules="formRules">
			<gov-form-item prop="name" label="姓名">
				<gov-input v-model="formData.name" />
			</gov-form-item>
			<gov-form-item prop="address" label="详细地址">
				<gov-textarea v-model="formData.address" placeholder="请输入" />
			</gov-form-item>
			<gov-form-item>
				<gov-button @click="handleSubmit" type="primary">
					提交
				</gov-button>
				<gov-button @click="handleReset"> 重置 </gov-button>
				<gov-button @click="handleClearValidate"> 清除验证 </gov-button>
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

const ruleFormRef = ref();
const validState = ref(null);
const invalidFields = ref(null);

// 表单数据
const formData = reactive({
	name: null,
	address: null,
});

// 表单验证
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
	address: [
		{
			required: true,
			message: "该项为必填项！",
			trigger: ["blur", "input", "change"],
		},
	],
});

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

// 清除表单验证
const handleClearValidate = () => {
	validState.value = null;
	invalidFields.value = null;
	ruleFormRef.value.clearValidate();
};
</script>
