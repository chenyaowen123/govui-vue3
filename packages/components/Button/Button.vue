<template>
	<button
		class="gov-button"
		@click="handleClick"
		:disabled="innerDisabled || loading"
		:autofocus="autofocus"
		:type="nativeType"
		:class="[
			type ? 'gov-button--' + type : '',
			`gov-button--size-${innerSize}`,
			{
				'is-disabled': innerDisabled,
				'is-loading': loading,
				'is-plain': plain,
				'is-round': round,
				'is-circle': circle,
			},
		]"
	>
		<GovIcon name="loading" v-if="loading" />
		<GovIcon :name="icon" v-if="icon && !loading" />
		<span v-if="$slots.default || label">
			<slot>{{ label }}</slot>
		</span>
	</button>
</template>

<script setup>
import { computed, inject } from "vue";
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
	label: String,
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

// 获取formItem
const govFormItem = inject("govFormItem", null);

// 计算大小
const innerSize = computed(() => {
	return props?.size || govFormItem?.size;
});

// 是否禁用
const innerDisabled = computed(() => {
	return props?.disabled || govFormItem?.disabled;
});

const emit = defineEmits(["click"]);
const handleClick = (evt) => {
	emit("click", evt);
};
</script>

<style lang="scss">
@use "./scss/button.scss";
</style>
