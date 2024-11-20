<template>
	<gov-popper
		v-model="show"
		:height="popperHeight"
		padding="0"
		v-bind="$attrs"
		placement="bottom-start"
		class="gov-select"
		:class="[{ 'is-disabled': innerDisabled }]"
	>
		<template #reference>
			<gov-input
				class="gov-select__input"
				:modelValue="inputValue"
				:size="innerSize"
				:placeholder="placeholder"
				:disabled="innerDisabled"
				@focus="handleFocus"
				@blur="handleBlur"
				@clear="handleClear"
				@click="handleClick"
				readonly
				:clearable="clearable"
				:triggerForm="false"
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
import { useReset } from "../utils/useReset";

defineOptions({
	name: "GovSelect",
});

const props = defineProps({
	modelValue: {
		type: [String, Number],
		default: undefined, // 绑定在输入框的值
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
	popperHeight: {
		type: String,
		default: "200px",
	},
	// 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
	triggerForm: {
		type: Boolean,
		default: true,
	},
});

const show = ref(false);
const emits = defineEmits([
	"update:modelValue",
	"change",
	"focus",
	"blur",
	"clear",
]);

// input展示
const inputValue = ref("");

// 获取formItem
const govFormItem = inject("govFormItem", null);

// 监听重置功能
useReset(govFormItem, props, (initialValue) => {
	emits("update:modelValue", initialValue);
});

// 计算大小
const innerSize = computed(() => {
	return props?.size || govFormItem?.size;
});

// 是否禁用
const innerDisabled = computed(() => {
	return props?.disabled || govFormItem?.disabled;
});

// 更新value
const updateValue = (item) => {
	show.value = false;
	emits("change", item);
	emits("update:modelValue", item.value);
	if (props.triggerForm) {
		govFormItem?.$emit("change");
	}
};

// 更新input的文字
const updateInputText = (label) => {
	inputValue.value = label;
};

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

// 获得焦点
const handleFocus = () => {
	emits("focus");
	if (props.triggerForm) {
		govFormItem?.$emit("focus");
	}
};

// 失去焦点
const handleBlur = () => {
	emits("blur");
	if (props.triggerForm) {
		govFormItem?.$emit("blur");
	}
};

// 清空
const handleClear = () => {
	show.value = false;
	updateInputText(undefined);
	updateValue({ value: undefined, label: undefined });
	emits("clear");
	if (props.triggerForm) {
		govFormItem?.$emit("clear");
	}
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
