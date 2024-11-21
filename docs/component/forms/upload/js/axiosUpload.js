/**
 * axios 插件上传文件的函数示例
 * @param {Object} files - 文件对象，键为字段名，值为文件（File）对象
 * @param {Function} onProgress - 进度回调函数
 * @returns {Promise}
 */

import axios from "axios";

function uploadFile(files, onProgress) {
	const formData = new FormData();

	// 循环遍历文件对象，并将文件添加到FormData中
	Object.keys(files).forEach((key) => {
		formData.append(key, files[key]);
	});

	return axios({
		method: "post",
		url: "你的上传接口URL", // 注意替换成你的上传接口URL
		data: formData,
		headers: { "Content-Type": "multipart/form-data" },
		onUploadProgress: ({ loaded, total }) => {
			const percentCompleted = Math.round((loaded * 100) / total);
			onProgress(percentCompleted);
		},
	})
		.then((response) => {
			if (response && response.data) {
				return response.data;
			} else {
				throw new Error("Upload failed");
			}
		})
		.catch((error) => {
			throw error;
		});
}

export default uploadFile;
