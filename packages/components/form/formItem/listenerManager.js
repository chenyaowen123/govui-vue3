import { reactive, onUnmounted } from "vue";

/**
 * 创建一个响应式的事件管理器。
 * @returns {Object} - 包含 on, off, 和 emit 方法的对象。
 */
export function useListenerManager() {
	const listeners = reactive(new Map());

	const on = (event, callback) => {
		if (!listeners.has(event)) {
			listeners.set(event, new Set());
		}
		listeners.get(event).add(callback);

		// 注册 onUnmounted 生命周期钩子来自动清理监听器
		// 谁调用了监听，谁清理监听，这样不必主动显示的清理事件队列
		onUnmounted(() => {
			off(event, callback);
		});
	};

	const off = (event, callback) => {
		const eventListeners = listeners.get(event);
		if (eventListeners) {
			eventListeners.delete(callback);
			if (eventListeners.size === 0) {
				listeners.delete(event);
			}
		}
	};

	const emit = (event, payload) => {
		const eventListeners = listeners.get(event);
		if (eventListeners) {
			eventListeners.forEach((callback) => callback(payload));
		}
	};

	return { on, off, emit };
}
