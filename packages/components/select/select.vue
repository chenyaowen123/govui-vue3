<template>
	<gov-popper
		v-model="show"
		:width="popperWidth"
		:height="popperHeight"
		:padding="0"
		v-bind="$attrs"
		class="gov-select"
		:class="[{ 'is-disabled': innerDisabled }]"
	>
		<template #reference>
			<gov-input
				class="gov-select__input"
				:modelValue="inputValue"
				:width="width"
				:size="innerSize"
				:placeholder="placeholder"
				:disabled="innerDisabled"
				@clear="handleClear"
				@click="handleClick"
				readonly
				:clearable="clearable"
			>
				<template #suffix>
					<gov-icon
						name="arrow-down"
						class="gov-select__icon"
						:class="[{ 'is-open': show }]"
					/>
				</template>
			</gov-input>
		</template>
		<div class="gov-select__box">
			<slot />
		</div>
	</gov-popper>
</template>

<script setup>
import { inject, ref, computed, provide, reactive, watch, toRefs } from "vue";
import GovInput from "../input/input.vue";
import GovPopper from "../popper/popper.vue";
import GovIcon from "../icon/icon.vue";

defineOptions({
	name: "GovSelect",
});

const props = defineProps({
	modelValue: {
		type: [String, Number],
		default: undefined, // 绑定在输入框的值
	},
	width: {
		type: Number,
		default: null, // 日期选择器宽度
	},
	size: String,
	placeholder: {
		type: String,
		default: "请输入",
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	clearable: {
		type: Boolean,
		default: true,
	},
	popperWidth: {
		type: Number,
		default: null,
	},
	popperHeight: {
		type: Number,
		default: 200,
	},
});

const show = ref(false);
const emits = defineEmits(["change", "update:modelValue"]);

// input展示
const inputValue = ref("");

// 更新value
const updateValue = (item) => {
	show.value = false;
	emits("change", item);
	emits("update:modelValue", item.value);
};

// 更新input的文字
const updateInputText = (label) => {
	inputValue.value = label;
};

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

// 禁用的时候关闭下来
watch(
	() => innerDisabled.value,
	() => {
		show.value = false;
	},
);

// 点击
const handleClick = () => {
	if (!innerDisabled.value) {
		show.value = !show.value;
	}
};

// 清空
const handleClear = () => {
	show.value = false;
	updateInputText(undefined);
	updateValue({ value: undefined, label: undefined });
};

provide(
	"govSelect",
	reactive({
		...toRefs(props),
		updateInputText,
		updateValue,
	}),
);
</script>

<style lang="scss">
@use "./scss/select.scss";
</style>
