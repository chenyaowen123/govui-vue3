<template>
	<demo-container>
		<gov-form ref="ruleFormRef" :model="formData" :rules="formRules">
			<gov-form-item label="禁用富文本">
				<gov-switch v-model="disabled" />
			</gov-form-item>
			<gov-form-item prop="html" label="姓名">
				<customEditor v-model="formData.html" :disabled="disabled" />
			</gov-form-item>
			<gov-form-item>
				<gov-button @click="handleSubmit" type="primary">
					提交
				</gov-button>
				<gov-button @click="handleReset"> 重置 </gov-button>
				<gov-button @click="handleClearValidate"> 清除验证 </gov-button>
			</gov-form-item>
		</gov-form>
		<hr />
		<template #console>
			validState: {{ validState }}<br />
			invalidFields: {{ invalidFields }}<br />
			html:{{ formData.html }}
		</template>
	</demo-container>
</template>

<script setup>
import { ref, reactive } from "vue";
import customEditor from "./editor.vue";

const ruleFormRef = ref();
const disabled = ref(true);
const validState = ref(null);
const invalidFields = ref(null);

// 表单数据
const formData = reactive({
	html: "",
});

// 表单验证
const formRules = reactive({
	html: [
		{
			required: true,
			validator: (rule, value = "", callback) => {
				const text = value.trim();
				if (!text || text === "<p><br></p>") {
					return callback(new Error("该项为必填项！"));
				}
				return callback();
			},
			trigger: ["focus", "blur", "change"],
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
