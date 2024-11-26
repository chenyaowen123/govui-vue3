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

// 手风琴效果实现
// collapse 组件外层可能绑定 ref()  ref(null)  ref(stringName) 三种可能，
// 因为有默认值等情况，理论上来说无法判断调用组件的人是否设置了 v-model，也就无法知道是否有手风琴效果
// 折中方案是，当点开一个面板，那么理论上，govCollapse.modelValue 就会有值同步，就代表需要开启手风琴，需要对比 modelValue 和 name来实现手风琴
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
