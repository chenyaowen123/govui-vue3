/**
 * 点击target以外的元素触发事件，
 * target可以单个ref也可以是多个ref
 */
import { onMounted, onBeforeUnmount, unref } from "vue";
export default function useClickAway(target, handler) {
	const handleClickOutside = (event) => {
		// 确保 target 总是一个数组
		const targets = Array.isArray(target)
			? target.map(unref)
			: [unref(target)];

		// 检查事件目标是否在任何一个元素内部
		const isInsideTarget = targets.some((el) => {
			return (
				el &&
				(el === event.target ||
					(el instanceof Element && el.contains(event.target)))
			);
		});

		// 如果事件目标不在任何一个元素内部，执行 handler 函数
		if (!isInsideTarget) {
			handler(event);
		}
	};

	onMounted(() => {
		document.addEventListener("click", handleClickOutside);
	});

	onBeforeUnmount(() => {
		document.removeEventListener("click", handleClickOutside);
	});
}
