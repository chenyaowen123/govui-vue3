<template>
	<demo-container>
		<gov-form ref="ruleFormRef" :model="formData" :rules="formRules">
			<gov-form-item prop="name" label="姓名" :span="spanNum">
				<gov-input v-model="formData.name" />
			</gov-form-item>
			<gov-form-item prop="sex" label="性别" :span="spanNum">
				<gov-radio-group v-model="formData.sex">
					<gov-radio value="1">男生</gov-radio>
					<gov-radio value="2">女生</gov-radio>
				</gov-radio-group>
			</gov-form-item>
			<gov-form-item prop="hobby" label="爱好" :span="spanNum">
				<gov-checkbox-group v-model="formData.hobby">
					<gov-checkbox value="1">篮球</gov-checkbox>
					<gov-checkbox value="2">唱歌</gov-checkbox>
					<gov-checkbox value="3">跳舞</gov-checkbox>
				</gov-checkbox-group>
			</gov-form-item>
			<gov-form-item>
				<gov-button @click="handleSubmit">提交</gov-button>
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
const formData = reactive({
	name: null,
	sex: null,
	hobby: null,
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
	hobby: [
		{
			required: true,
			message: "请选择爱好！",
			trigger: "change",
		},
	],
});
const ruleFormRef = ref();
const spanNum = ref(24);
const validState = ref(null);
const invalidFields = ref(null);

const handleSubmit = () => {
	ruleFormRef.value.validate((valid, fields) => {
		validState.value = valid;
		invalidFields.value = fields;
	});
};
</script>

<style lang="scss"></style>
