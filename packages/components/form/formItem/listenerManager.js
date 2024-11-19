import { reactive, onUnmounted } from "vue";

/**
 * 创建一个响应式的事件管理器。
 * @returns {Object} - 包含 on, off, 和 emit 方法的对象。
 */
export function useListenerManager() {
	const listeners = reactive(new Map());

	// event 可以是数组或者字符串
	const on = (event, callback) => {
		const events = Array.isArray(event) ? event : [event];
		events.forEach((singleEvent) => {
			if (!listeners.has(singleEvent)) {
				listeners.set(singleEvent, new Set());
			}
			listeners.get(singleEvent).add(callback);

			// 注册 onUnmounted 生命周期钩子来自动清理监听器
			onUnmounted(() => {
				off(singleEvent, callback);
			});
		});
	};

	// event 可以是数组或者字符串
	const off = (event, callback) => {
		const events = Array.isArray(event) ? event : [event];
		events.forEach((singleEvent) => {
			const eventListeners = listeners.get(singleEvent);
			if (eventListeners) {
				eventListeners.delete(callback);
				if (eventListeners.size === 0) {
					listeners.delete(singleEvent);
				}
			}
		});
	};

	// event 可以是数组或者字符串
	const emit = (event, payload) => {
		const events = Array.isArray(event) ? event : [event];
		events.forEach((singleEvent) => {
			const eventListeners = listeners.get(singleEvent);
			if (eventListeners) {
				eventListeners.forEach((callback) => callback(payload));
			}
		});
		// 触发通用事件处理，任意事件都会触发 * 事件
		const generalListeners = listeners.get("*");
		if (generalListeners) {
			events.forEach((singleEvent) => {
				generalListeners.forEach((callback) =>
					callback(singleEvent, payload),
				);
			});
		}
	};

	return { on, off, emit };
}
