<template>
	<aside class="gov-aside" :style="asideStyle">
		<slot />
	</aside>
</template>

<script setup>
import { computed } from "vue";

defineOptions({
	name: "GovAside",
});

const props = defineProps({
	width: {
		type: [String, Number],
		default: "250px",
	},
});

// 定义一个函数来添加单位
// 如果是字符串且没有单位，则添加'px'单位（这里你可以根据需要调整默认单位）
// 注意：这个正则表达式检查字符串是否以%、px、em、rem、vw、vh等常见单位结尾
function addUnitIfNeeded(value) {
	if (typeof value === "number") {
		return `${value}px`;
	} else if (typeof value === "string" && !/[%pxemremvwvh]$/.test(value)) {
		return `${value}px`;
	}
	return value;
}

// 计算aside的样式
const asideStyle = computed(() => {
	return {
		width: addUnitIfNeeded(props.width),
	};
});
</script>
