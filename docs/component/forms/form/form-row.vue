<template>
	<demo-container>
		<gov-form>
			<gov-form-item label="显示几列">
				<gov-radio-group button v-model="formItemSpan">
					<gov-radio :value="24">一列</gov-radio>
					<gov-radio :value="12">两列</gov-radio>
					<gov-radio :value="8">三列</gov-radio>
					<gov-radio :value="6">四列</gov-radio>
				</gov-radio-group>
			</gov-form-item>
		</gov-form>
		<hr />
		<gov-form labelWidth="50px">
			<gov-form-item label="标题" :span="formItemSpan">
				<gov-input v-model="formData.title" />
			</gov-form-item>
			<gov-form-item label="地址" :span="formItemSpan">
				<gov-input v-model="formData.address" />
			</gov-form-item>
			<gov-form-item label="产品" :span="formItemSpan">
				<gov-input v-model="formData.product" />
			</gov-form-item>
			<gov-form-item label="其它" :span="formItemSpan">
				<gov-input v-model="formData.other" />
			</gov-form-item>
		</gov-form>
		<template>formItemSpan:{{ formItemSpan }}</template>
	</demo-container>
</template>

<script setup>
import { ref, reactive } from "vue";

const formItemSpan = ref(12);
const formData = reactive({
	title: null,
	address: null,
	product: null,
	other: null,
});
</script>
