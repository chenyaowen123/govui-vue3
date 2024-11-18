<template>
	<demo-container class="gov-demo-upload">
		<gov-upload
			v-model="value"
			multiple
			:uploadRequest="simulateUpload"
			buttonType="success"
			append="上传文件最大 500KB"
		/>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";

const value = ref([]);

// 模拟上传请求
function simulateUpload(file, fileId, onProgress) {
	const uploader = new Promise((resolve, reject) => {
		// 模拟上传进度
		let total = 0;
		const interval = setInterval(() => {
			if (total < 100) {
				total += 10;
				onProgress(total);
			} else {
				clearInterval(interval);
				// 模拟随机的成功或失败
				const success = Math.random() > 0.5 ? true : false;
				if (success) {
					resolve({
						url: "/logo.png",
					});
				} else {
					reject(new Error("Upload failed"));
				}
			}
		}, 500);
	});
	return uploader;
}
</script>

<style lang="scss"></style>
