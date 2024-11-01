import { createApp } from "vue";
import GovMessageComponent from "./message.vue";

let instances = []; // 存储所有消息提示实例的数组

// 计算下一个消息的顶部偏移量
function calculateOffsetTop(index) {
	return instances.slice(0, index).reduce((acc, instance) => {
		if (instance && instance.$el) {
			return acc + instance.$el.offsetHeight + 20; // 20px 是消息之间的间距
		}
	}, 20);
}

// 更新所有实例顶部偏移量
function updateInstanceTop() {
	instances.forEach((instance, index) => {
		instance.$el.style["top"] = calculateOffsetTop(index) + "px";
	});
}

// 创建消息提示实例
function createInstance(options) {
	const app = createApp(GovMessageComponent, {
		...options,
		onBeforeOpen: () => {
			updateInstanceTop();
		},
		onClose: () => {
			instances = instances.filter(
				(instance) => instance !== componentInstance,
			);
			updateInstanceTop();
		},
	});

	const mountNode = document.createElement("div");
	document.body.appendChild(mountNode);
	const componentInstance = app.mount(mountNode);
	instances.push(componentInstance);
	return app;
}

// GovMessage 函数
export default function GovMessage(options) {
	return new Promise((resolve, reject) => {
		if (typeof options === "string") {
			options = { message: options };
		}

		// 创建实例
		const instance = createInstance({
			...options,
			visible: true,
			onOpen: () => {
				resolve();
			},
			onClose: () => {
				reject();
			},
		});

		// 处理关闭逻辑
		const close = () => {
			instance.visible = false;
			reject();
		};

		// 返回关闭方法，以便可以外部调用关闭
		return { close };
	});
}

// 关闭所有消息提示
export function closeAll() {
	instances.forEach((instance) => {
		instance.visible = false;
	});
	instances.length = 0; // 清空实例数组
}

// 例子

// import GovMessage from './GovMessage.js';

// // 打开消息提示
// GovMessage("这是一条消息")
//   .then(() => {
//     console.log('消息提示已显示');
//   })
//   .catch(() => {
//     console.log('消息提示已关闭');
//   });

// // 以配置对象方式打开消息提示
// GovMessage({
//   message: "这是一条配置消息",
//   type: "success",
//   closable: true,
// })
// .then(() => {
//   console.log('消息提示已显示');
// })
// .catch(() => {
//   console.log('消息提示已关闭');
// });

// // 关闭所有消息提示
// GovMessage.closeAll();
