<template>
	<div class="gov-collapse">
		<slot />
	</div>
</template>

<script setup>
import { provide, ref, reactive, toRefs, watchEffect } from "vue";
defineOptions({
	name: "GovCollapse",
});
const props = defineProps({
	modelValue: {
		type: [String, Number],
		default: null,
	},
	disabled: Boolean,
});

const emit = defineEmits(["toggle", "update:modelValue"]);

const updateValue = (val) => {
	emit("toggle", val);
	emit("update:modelValue", val);
};

// 是否为手风琴效果，
// 思路：根据调用者是否设置了 v-model，
// 注意：因为未设置 v-model 和设置了 v-model，modelValue 的值都可以是 null 或者 undefined，所以需要一个技巧做区分。
// 1、没有设置v-model 时 modelValue 不会更新的（即一直不会有值），这时候不需要开启手风琴。
// 2、当外层设置了 v-model 就代表着 props.modelValue 会更新（即未来会有值），当打开某个折叠，就了更新 modelValue，这时候开启手风琴。
let accordion = ref(false);
watchEffect(() => {
	if (props.modelValue) {
		accordion.value = true;
	}
});

provide(
	"govCollapse",
	reactive({
		...toRefs(props),
		accordion,
		updateValue,
	}),
);
</script>

<style lang="scss"></style>
