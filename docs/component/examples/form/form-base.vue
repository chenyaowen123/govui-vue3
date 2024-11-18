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
			<gov-form-item prop="fruit" label="喜欢水果" :span="spanNum">
				<gov-input-auto
					v-model="formData.fruit"
					:fetch="querySearch"
					placeholder="请选择喜欢的水果"
				/>
			</gov-form-item>
			<gov-form-item prop="orderTotal" label="订购" :span="spanNum">
				<gov-input-number
					v-model="formData.orderTotal"
					controls
					:step="500"
					suffix="件"
					placeholder="请填写"
				/>
			</gov-form-item>
			<gov-form-item prop="deliveryType" label="配送" :span="spanNum">
				<gov-select v-model="formData.deliveryType">
					<gov-select-option label="货到付款" value="1" />
					<gov-select-option label="先买后付" value="2" />
					<gov-select-option label="在线支付" value="3" />
				</gov-select>
			</gov-form-item>
			<gov-form-item prop="address" label="地址" :span="spanNum">
				<gov-cascader
					v-model="formData.address"
					:options="locationTree"
				/>
			</gov-form-item>
			<gov-form-item prop="addressInfo" label="详细地址" :span="spanNum">
				<gov-textarea
					v-model="formData.addressInfo"
					placeholder="请输入"
				/>
			</gov-form-item>
			<gov-form-item
				prop="immediateDelivery"
				label="立即配送"
				:span="spanNum"
			>
				<gov-switch v-model="formData.immediateDelivery" />
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
import { fruits } from "./fruits.js";
import locationTree from "./locationTree.js";

const ruleFormRef = ref();
const spanNum = ref(24);
const validState = ref(null);
const invalidFields = ref(null);

const formData = reactive({
	name: null,
	sex: null,
	hobby: null,
	fruit: null,
	orderTotal: null,
	deliveryType: null,
	address: [],
	addressInfo: null,
	immediateDelivery: true,
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
	fruit: [
		{
			required: true,
			message: "请选择喜欢的水果！",
			trigger: "change",
		},
	],
	orderTotal: [
		{
			required: true,
			message: "请选择订购数！",
			trigger: "change",
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
	immediateDelivery: [
		{
			required: true,
			message: "请选择配送方式！",
			trigger: "change",
		},
	],
});

const querySearch = (str) => {
	return fruits.filter((el) => el.toLowerCase().includes(str.toLowerCase()));
};

const handleSubmit = () => {
	ruleFormRef.value.validate((valid, fields) => {
		validState.value = valid;
		invalidFields.value = fields;
	});
};
</script>

<style lang="scss"></style>
