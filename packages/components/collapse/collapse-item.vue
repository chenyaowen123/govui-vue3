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
import govIcon from "../icon/icon.vue.vue";
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
});

// 注入父级
const govCollapse = inject("govCollapse", null);

// 是否为手风琴效果
const accordion = computed(() => govCollapse?.accordion);

// 是否禁用
const isDisabled = computed(() => govCollapse?.disabled || props.disabled);

// 打开状态
const opend = ref(false);

// 更新父级
// 如果手风琴效果，因为有且只有一个面板展开折叠，对其关闭则是对所有关闭(null)，对其打开则是对所有打开(props.name)
const updateParentValue = () => {
	if (accordion.value) {
		let value = opend.value ? props.name : null;
		govCollapse?.updateValue(value);
	}
};

// 当检测到禁用时候，立即关闭
watchEffect(() => {
	if (isDisabled.value) {
		opend.value = false;
		updateParentValue();
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
@import "./demo.scss";
</style>
