import { onMounted, ref } from "vue";

/**
 * 表单控件，监听 FormItem 的重置事件，用于记录初始值，reset的时候重新赋值给控件。
 * 1、初始化记录 initialValue
 * 2、监听 reset 事件把 initialValue 返回给回调函数
 */

export function useReset(govFormItem, props, callback) {
	const initialValue = ref();
	onMounted(() => {
		initialValue.value = props.modelValue;
	});
	govFormItem?.$on("reset", () => {
		if (props.triggerForm) {
			callback(initialValue.value);
		}
	});
}
