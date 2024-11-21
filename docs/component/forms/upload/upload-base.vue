<template>
	<demo-container>
		<gov-upload
			:uploadRequest="simulateUpload"
			v-model="value"
			buttonType="success"
			append="上传文件最大 500KB"
		/>
		<template #console>{{ value }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
// import uploadFile from "./js/axiosUpload.js";
import uploadFile from "./js/simulateUpload.js";

const value = ref([
	{
		name: "GovUi",
		url: "/logo.png",
	},
]);

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

<style lang="scss"></style>
