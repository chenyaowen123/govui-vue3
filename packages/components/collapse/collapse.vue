<template>
	<div class="gov-collapse"></div>
</template>

<script setup>
import { computed, provide, reactive, toRefs } from "vue";
defineOptions({
	name: "GovCollapse",
});
const props = defineProps({
	// 当绑定了 modelValue（v-model），表示启用了手风琴效果。
	// 默认值为 null，意味着如果没有提供值，或者值为 null/undefined 等，所有的 collapseItem 将保持默认的折叠状态，因为无法匹配到相应的 name。
	// 所以业务曾不需要关心初始值，可以初始化一个 ref(null/undefined) 等，因为一旦提供了 modelValue，collapseItem 将根据这个值自动确定哪个面板应该展开。
	// 确保传递给 modelValue 的值、传递给 collapseItem 的 name 是字符串或数字类型，以便正确匹配 collapseItem 的 name 属性。
	modelValue: {
		type: [String, Number],
		default: null,
	},
	disabled: Boolean,
});

const emit = defineEmits(["toggle", "update:modelValue"]);

// 判断是否为手风琴效果
const accordion = computed(() => {
	return ["string", "number"].includes(typeof props.modelValue);
});

const updateValue = (val) => {
	emit("toggle", val);
	emit("update:modelValue", val);
};

provide(
	"govCollapse",
	reactive({
		...toRefs(props),
		accordion,
		updateValue,
	}),
);
</script>

<style lang="scss">
@import "./demo.scss";
</style>
