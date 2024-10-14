<template>
	<div class="gov-form-item">
		<slot />
	</div>
</template>

<script setup>
import { provide, inject, computed } from "vue";
defineOptions({
	name: "govFormItem",
});
const govForm = inject("govForm", null);

const props = defineProps({
	size: String,
	disabled: Boolean,
});

const validate = (value, callback) => {
	// 触发表单整个验证
	// callback(true / false);
};

const clearValidate = () => {
	// 清除验证整个表单验证结果
};

const size = computed(() => {
	return props?.size || govForm?.size;
});

const disabled = computed(() => {
	return props?.disabled || govForm?.disabled;
});

provide("govFormItem", {
	size,
	disabled,
	validate,
	clearValidate,
});
</script>

<style lang="scss"></style>
