<template>
	<demo-container>
		<gov-form ref="ruleFormRef" :model="formData" :rules="formRules">
			<gov-form-item label="姓名">
				<gov-input v-model="formData.name" />
			</gov-form-item>
			<gov-form-item label="性别">
				<gov-radio-group v-model="formData.sex">
					<gov-radio value="1">男生</gov-radio>
					<gov-radio value="2">女生</gov-radio>
				</gov-radio-group>
			</gov-form-item>
			<gov-form-item>
				<gov-button @click="handleSubmit">提交</gov-button>
			</gov-form-item>
		</gov-form>
		<template #console>
			validState: {{ validState }}<br />
			callbackFields: {{ callbackFields }}
		</template>
	</demo-container>
</template>

<script setup>
import { ref, reactive } from "vue";
const formData = reactive({
	name: "",
	sex: "1",
});
const formRules = reactive({
	name: [
		{
			required: true,
			message: "请输入姓名！",
			trigger: "blur",
		},
		{ min: 3, max: 5, message: "限制3-5个字符！", trigger: "blur" },
	],
	sex: [
		{
			required: true,
			message: "请选择性别！",
			trigger: "change",
		},
	],
});
const ruleFormRef = ref();
const validState = ref(null);
const callbackFields = ref(null);

const handleSubmit = () => {
	ruleFormRef.value.validate((valid, fields) => {
		validState.value = valid;
		callbackFields.value = fields;
	});
};
</script>

<style lang="scss"></style>
