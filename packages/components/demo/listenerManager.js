// listenerManager.js
import { reactive, onUnmounted } from "vue";

export const listenerManager = reactive({
	listeners: new Map(),
	on(event, callback) {
		if (!this.listeners.has(event)) {
			this.listeners.set(event, new Set());
		}
		this.listeners.get(event).add(callback);
		// 注册 onUnmounted 生命周期钩子来自动清理监听器
		onUnmounted(() => {
			this.off(event, callback);
		});
	},
	off(event, callback) {
		const eventListeners = this.listeners.get(event);
		if (eventListeners) {
			eventListeners.delete(callback);
			if (eventListeners.size === 0) {
				this.listeners.delete(event);
			}
		}
	},
	emit(event, payload) {
		const eventListeners = this.listeners.get(event);
		if (eventListeners) {
			eventListeners.forEach((callback) => callback(payload));
		}
	},
});
