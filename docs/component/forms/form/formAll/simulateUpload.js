/**
 * 模拟上传文件的函数
 * @param {Object} files - 文件对象，键为字段名，值为文件（File）对象
 * @param {Function} onProgress - 进度回调函数
 * @returns {Promise}
 */
function uploadFile(files, onProgress) {
	const formData = new FormData();

	// 循环遍历文件对象，并将文件添加到FormData中
	Object.keys(files).forEach((key) => {
		formData.append(key, files[key]);
	});

	return new Promise((resolve, reject) => {
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
					// 设置预览地址 url；服务器数据 response
					resolve({
						message: "这是后端返回来的数据",
					});
				} else {
					reject(new Error("Upload failed"));
				}
			}
		}, 500);
	});
}

export default uploadFile;
