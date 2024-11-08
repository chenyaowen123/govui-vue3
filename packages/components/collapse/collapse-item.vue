<template>
	<div
		class="gov-collapse-item"
		:class="{ 'is-open': opend, 'is-disabled': isDisabled }"
	>
		<div class="gov-collapse-item__title" @click="handleClick">
			<div class="gov-collapse-item__title-text">
				<slot name="title">
					{{ title }}
				</slot>
			</div>
			<div class="gov-collapse-item__title-iconbox">
				<slot name="icon" :opend="opend">
					<govIcon
						name="arrow-right"
						class="gov-collapse-item__title-icon"
					/>
				</slot>
			</div>
		</div>
		<govCollapseTransition>
			<div class="gov-collapse-item__content" v-show="opend">
				<div class="gov-collapse-item__content-wrap">
					<slot />
				</div>
			</div>
		</govCollapseTransition>
	</div>
</template>

<script setup>
import { computed, inject, ref, watchEffect } from "vue";
import govIcon from "../icon/icon.vue";
import govCollapseTransition from "./collapse-transition.vue";

defineOptions({
	name: "GovCollapseItem",
});

const props = defineProps({
	title: String,
	name: {
		type: [String, Number],
		default: null,
	},
	disabled: Boolean,
	defaultOpend: Boolean, // 默认展开
});

// 注入父级
const govCollapse = inject("govCollapse", null);

// 是否禁用
const isDisabled = computed(() => props.disabled || govCollapse?.disabled);

// 打开状态
const opend = ref(props.defaultOpend);

// 更新父级
const updateParentValue = () => {
	let value = opend.value ? props.name : null;
	govCollapse?.updateValue(value);
};

// 当检测到禁用时候，立即关闭
watchEffect(() => {
	if (isDisabled.value) {
		opend.value = false;
		updateParentValue();
	}
});

// 打开的value和当前name不相等的情况
watchEffect(() => {
	if (govCollapse?.modelValue) {
		opend.value = govCollapse?.modelValue === props.name;
	}
});

// 展开折叠
const emit = defineEmits(["toggle"]);
const handleClick = () => {
	if (isDisabled.value) {
		return;
	}
	opend.value = !opend.value;
	emit("toggle", opend.value);
	updateParentValue();
};
</script>

<style lang="scss">
@use "@/styles/theme.scss" as *;
.gov-collapse-item {
	color: var(--gov-text-color);
	border-top: 1px solid var(--gov-border-color-5);
	&:last-child {
		border-bottom: 1px solid var(--gov-border-color-5);
	}

	&__title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 12px 0;
		cursor: pointer;
		font-size: 14px;
		font-weight: bold;

		&-text {
			flex-grow: 1;
		}

		&-iconbox {
			display: flex;
			align-items: center;
		}

		&-icon {
			transition: transform 0.3s ease;
		}
	}

	&__content {
		&-wrap {
			padding: 0 0 16px;
			font-size: 14px;
			line-height: 1.5;
		}
	}

	&.is-open {
		.gov-collapse-item__title-icon {
			transform: rotate(90deg);
		}
	}

	&.is-disabled {
		color: var(--gov-text-color-5);
		.gov-collapse-item__title {
			cursor: not-allowed;
		}
	}
}
</style>
