<template>
	<button
		class="gov-button"
		@click="handleClick"
		:disabled="buttonDisabled || loading"
		:autofocus="autofocus"
		:type="nativeType"
		:class="[
			type ? 'gov-button--' + type : '',
			buttonSize ? 'gov-button--size-' + buttonSize : '',
			{
				'is-disabled': buttonDisabled,
				'is-loading': loading,
				'is-plain': plain,
				'is-round': round,
				'is-circle': circle,
			},
		]"
	>
		<GovIcon name="loading" v-if="loading" />
		<GovIcon :name="icon" v-if="icon && !loading" />
		<span v-if="hasDefaultSlotContent"><slot></slot></span>
	</button>
</template>

<script setup>
import { computed, inject, useSlots } from "vue";
import GovIcon from "../icon/icon.vue";

defineOptions({
	name: "GovButton",
});

// 定义组件的属性
const props = defineProps({
	type: {
		type: String,
		default: "default",
	},
	size: String,
	icon: {
		type: String,
		default: "",
	},
	nativeType: {
		type: String,
		default: "button",
	},
	loading: Boolean,
	disabled: Boolean,
	plain: Boolean,
	autofocus: Boolean,
	round: Boolean,
	circle: Boolean,
});

// 依赖注入
const govForm = inject("govForm", "");
const govFormItem = inject("govFormItem", "");

// 是否有默认插入内容
const slots = useSlots();
const hasDefaultSlotContent = computed(() => {
	return slots.default && slots.default().length > 0;
});

// 计算按钮大小
const buttonSize = computed(() => {
	return props.size || (govFormItem || {}).govFormItemSize || "default";
});

// 计算按钮是否禁用
const buttonDisabled = computed(() => {
	return props.disabled != null ? props.disabled : (govForm || {}).disabled;
});

const emit = defineEmits(["click"]);
const handleClick = (evt) => {
	emit("click", evt);
};
</script>

<style lang="scss">
@use "./scss/button.scss";
</style>
