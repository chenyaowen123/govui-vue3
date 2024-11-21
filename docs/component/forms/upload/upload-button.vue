<template>
	<demo-container>
		<gov-upload
			v-model="value"
			buttonType="default"
			:uploadRequest="simulateUpload"
			append="上传文件最大 500KB"
		/>
		<hr />
		<gov-upload
			v-model="value"
			buttonType="primary"
			:uploadRequest="simulateUpload"
			append="上传文件最大 500KB"
		/>
		<hr />
		<gov-upload
			v-model="value"
			buttonType="success"
			:uploadRequest="simulateUpload"
			append="上传文件最大 500KB"
		/>
		<hr />
		<gov-upload
			v-model="value"
			buttonType="warning"
			:uploadRequest="simulateUpload"
			append="上传文件最大 500KB"
		/>
		<hr />
		<gov-upload
			v-model="value"
			buttonType="danger"
			:uploadRequest="simulateUpload"
			append="上传文件最大 500KB"
		/>
		<hr />
		<gov-upload
			v-model="value"
			buttonType="info"
			:uploadRequest="simulateUpload"
			append="上传文件最大 500KB"
		/>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
// import uploadFile from "./js/axiosUpload.js";
import uploadFile from "./js/simulateUpload.js";

const value = ref([]);

function simulateUpload(file, fileId, onProgress) {
	return uploadFile({ myfile: file }, onProgress).then((response) => {
		// 返回 url 预览图片；返回 response 后端数据。
		return {
			url: "/logo.png",
			response,
		};
	});
}
</script>
