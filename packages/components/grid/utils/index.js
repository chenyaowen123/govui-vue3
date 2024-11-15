import { onUnmounted, onMounted } from "vue";

// 监听
export function useEventListener(target, event, callback) {
	onMounted(() => target.addEventListener(event, callback));
	onUnmounted(() => target.removeEventListener(event, callback));
}
