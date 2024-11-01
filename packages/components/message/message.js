import { createVNode, render } from "vue";
import GovMessageComponent from "./message.vue";

let instances = []; // 存储所有消息提示实例的数组

// 计算下一个消息的顶部偏移量
function calculateOffsetTop(index) {
	return instances.slice(0, index).reduce((acc, instance) => {
		if (instance && instance.vnode) {
			return acc + instance.vnode.el.offsetHeight + 20; // 20px 是消息之间的间距
		}
	}, 20);
}

// 更新所有实例顶部偏移量
function updateInstanceTop() {
	instances.forEach((instance, index) => {
		if (instance && instance.vnode) {
			instance.vnode.el.style["top"] = calculateOffsetTop(index) + "px";
		}
	});
}

// 创建消息提示实例
function createInstance(options) {
	// 创建容器
	const container = document.createElement("div");

	// 创建 VNode
	const vnode = createVNode(GovMessageComponent, {
		...options,
		onBeforeOpen: () => {
			updateInstanceTop();
		},
		onClosed: () => {
			instances = instances.filter((item) => item !== componentInstance);
			document.body.removeChild(el);
			render(null, container); // 卸载组件
			updateInstanceTop();
		},
	});

	// 渲染 VNode 到 container
	// 注意这里只需要将容器里的内容添加到body，并不需要容器也加入到body下。
	render(vnode, container);
	const el = container.firstChild;
	document.body.appendChild(el);

	// 返回组件
	const componentInstance = vnode.component;
	instances.push(componentInstance);
	return componentInstance;
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
			onOpen: () => {
				resolve();
			},
			onClose: () => {
				reject();
			},
		});

		// 处理关闭逻辑
		const close = () => {
			instance?.exposed?.close?.();
			reject();
		};

		// 返回关闭方法，以便可以外部调用关闭
		return { close };
	});
}

// 关闭所有消息提示
export function closeAll() {
	instances.forEach((instance) => {
		instance?.exposed?.close?.();
	});
	instances.length = 0; // 清空实例数组
}

GovMessage.closeAll = closeAll;
