// GovMessageBox.js
import { createApp } from "vue";
import GovMessageBox from "./message-box.vue";

function createDialog(options) {
	return new Promise((resolve, reject) => {
		// 应用实例
		let app = null;

		// 创建dom
		const mountNode = document.createElement("div");
		mountNode.className = "gov-messagebox__app";
		document.body.appendChild(mountNode);

		// 事件
		const confirmCallback = () => {
			resolve();
		};
		const cancelCallback = () => {
			reject();
		};
		const closeCallback = () => {
			reject();
		};
		const closedCallback = () => {
			if (app && app.unmount) {
				app.unmount();
			}
			document.body.removeChild(mountNode);
		};

		// 创建一个临时 app
		app = createApp(GovMessageBox, {
			...options,
			cancelCallback,
			confirmCallback,
			closeCallback,
			closedCallback,
		});
		app.mount(mountNode);
	});
}

export default {
	alert(options) {
		const opts =
			typeof options === "string" ? { content: options } : options;
		return createDialog({
			...opts,
			showCancelButton: false,
		});
	},
	confirm(options) {
		const opts =
			typeof options === "string" ? { content: options } : options;
		return createDialog(opts);
	},
};
