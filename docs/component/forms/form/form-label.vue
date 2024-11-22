<template>
	<demo-container>
		<gov-form>
			<gov-form-item label="对齐方式">
				<gov-radio-group button v-model="labelPosition">
					<gov-radio value="left">左对齐</gov-radio>
					<gov-radio value="right">右对齐</gov-radio>
					<gov-radio value="top">顶部对齐</gov-radio>
				</gov-radio-group>
			</gov-form-item>
		</gov-form>
		<hr />
		<gov-form :labelPosition="labelPosition">
			<gov-form-item label="姓名">
				<gov-input v-model="formData.name" />
			</gov-form-item>
			<gov-form-item label="详细地址">
				<gov-textarea
					v-model="formData.addressInfo"
					placeholder="请输入"
				/>
			</gov-form-item>
			<gov-form-item>
				<gov-button type="primary"> 提交 </gov-button>
			</gov-form-item>
		</gov-form>
		<template #console> labelPosition:{{ labelPosition }} </template>
	</demo-container>
</template>

<script setup>
import { ref, reactive } from "vue";

const labelPosition = ref("right");
const formData = reactive({
	name: null,
	addressInfo: null,
});
</script>
