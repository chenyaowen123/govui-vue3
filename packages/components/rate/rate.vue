<template>
	<div class="gov-rate" :class="{ 'is-disabled': innerDisabled }">
		<span
			v-for="i in max"
			:key="i"
			class="gov-rate__item"
			@click="setRating(i)"
			@mouseover="!innerDisabled && (hoverRating = i)"
			@mouseleave="hoverRating = null"
		>
			<span
				class="gov-rate__icon"
				:class="{ 'is-active': i <= currentRatingValue }"
				:style="{ color: iconColor }"
			>
				<!-- 使用插槽让用户自定义图标 -->
				<slot
					name="icon"
					:index="i"
					:isActive="i <= currentRatingValue"
				>
					<GovIcon v-if="i <= currentRatingValue" name="star-on" />
					<GovIcon v-else name="star-off" />
				</slot>
			</span>
		</span>
	</div>
</template>

<script setup>
import { ref, inject, computed } from "vue";
import GovIcon from "../icon/icon.vue";

defineOptions({
	name: "GovRate",
});

const props = defineProps({
	modelValue: Number,
	max: {
		type: Number,
		default: 5,
	},
	disabled: Boolean,
	iconColor: {
		type: String,
		default: "#f5a623",
	},
});

const emits = defineEmits(["update:modelValue"]);

// 获取formItem
const govFormItem = inject("govFormItem", null);

// 是否禁用
const innerDisabled = computed(() => {
	return props?.disabled || govFormItem?.disabled;
});

// 跟踪鼠标悬停的评分等级
const hoverRating = ref(null);

// 计算属性，返回当前应该显示的评分值
// 判断是否禁用，如果禁用使用的是modelValue，否则需要比较 hoverRating 和 modelValue 谁大谁小
const currentRatingValue = computed(() => {
	if (innerDisabled.value) {
		return props.modelValue;
	}
	return hoverRating.value !== null ? hoverRating.value : props.modelValue;
});

const setRating = (value) => {
	if (!innerDisabled.value) {
		emits("update:modelValue", value);
	}
};
</script>

<style lang="scss">
.gov-rate {
	display: flex;
	align-items: center;
	user-select: none;

	&__item {
		padding-left: 4px;
		cursor: pointer;
	}

	&__icon {
		font-size: 24px;
	}

	.is-active {
		color: var(--gov-warning);
	}

	&.is-disabled &__item {
		cursor: not-allowed;
	}
}
</style>
