<template>
	<div class="gov-form"><slot /></div>
</template>

<script setup>
import { reactive, toRefs, provide } from "vue";

defineOptions({
	name: "GovForm",
});

const props = defineProps({
	size: String,
	disabled: Boolean,
});

const validate = (callback) => {
	// 触发表单整个验证
	// callback(true / false);
};

const clearValidate = () => {
	// 清除验证整个表单验证结果
};

provide(
	"govForm",
	reactive({
		...toRefs(props),
		validate,
		clearValidate,
	}),
);
</script>

<style lang="scss"></style>
