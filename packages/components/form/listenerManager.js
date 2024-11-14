// listenerManager.js
import { reactive, onUnmounted } from "vue";

export const listenerManager = reactive({
	listeners: new Map(),
	on(event, callback) {
		if (!this.listeners.has(event)) {
			this.listeners.set(event, new Set());
		}
		this.listeners.get(event).add(callback);
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

// 自动清理监听器
export function useListenerManager() {
	onUnmounted(() => {
		for (const [event, listeners] of listenerManager.listeners) {
			listeners.forEach((callback) => {
				listenerManager.off(event, callback);
			});
		}
	});
}
