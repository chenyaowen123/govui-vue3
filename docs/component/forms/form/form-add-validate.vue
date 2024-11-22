<template>
	<demo-container>
		<gov-form ref="ruleFormRef" :model="formData" :rules="formRules">
			<gov-form-item prop="name" label="姓名">
				<gov-input v-model="formData.name" />
			</gov-form-item>
			<gov-form-item
				v-for="(domain, index) in formData.domains"
				:label="'域名' + index"
				:key="index"
				:prop="'domains.' + index + '.value'"
				:rules="{
					required: true,
					message: `域名${index}不能为空！`,
					trigger: ['blur', 'input', 'change'],
				}"
			>
				<div style="display: flex; justify-content: space-between">
					<gov-input v-model="domain.value" />&nbsp;&nbsp;
					<gov-button @click.prevent="removeDomain(domain)">
						删除
					</gov-button>
				</div>
			</gov-form-item>
			<gov-form-item>
				<gov-button @click="addDomain">新增域名</gov-button>
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
	domains: [
		{
			value: "",
		},
	],
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
});

// 新增域名
const addDomain = () => {
	formData.domains.push({
		value: "",
		key: Date.now(),
	});
};

// 删除域名
const removeDomain = (item) => {
	var index = formData.domains.indexOf(item);
	if (index !== -1) {
		formData.domains.splice(index, 1);
	}
};

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
