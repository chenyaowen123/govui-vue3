<template>
	<demo-container>
		<!-- 控制器 -->
		<gov-form>
			<gov-form-item label="Label宽度">
				<gov-radio-group button v-model="labelWidth">
					<gov-radio :value="80">80px</gov-radio>
					<gov-radio :value="100">100px</gov-radio>
					<gov-radio :value="120">120px</gov-radio>
				</gov-radio-group>
			</gov-form-item>
		</gov-form>
		<hr />
		<!-- 表单内容 -->
		<gov-form :labelWidth="labelWidth">
			<gov-form-item label="姓名">
				<gov-input v-model="formData.name" />
			</gov-form-item>
			<gov-form-item label="详细地址">
				<gov-textarea v-model="formData.address" placeholder="请输入" />
			</gov-form-item>
			<gov-form-item>
				<gov-button type="primary"> 提交 </gov-button>
			</gov-form-item>
		</gov-form>
	</demo-container>
</template>

<script setup>
import { ref, reactive } from "vue";

const labelWidth = ref(80);
const formData = reactive({
	name: null,
	address: null,
});
</script>
