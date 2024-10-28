<template>
	<gov-popper
		v-model="show"
		:width="popperWidth"
		:height="popperHeight"
		:padding="0"
		v-bind="$attrs"
		class="gov-select"
		:class="[{ 'is-disabled': disabled }]"
	>
		<template #reference>
			<gov-input
				class="gov-select__input"
				:modelValue="inputValue"
				:width="width"
				:size="size"
				:placeholder="placeholder"
				:disabled="disabled"
				@clear="handleClear"
				@click="handleClick"
				readonly
				:clear="clear"
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
import { ref, provide, reactive, watch, toRefs } from "vue";
import GovInput from "../input/input.vue";
import GovPopper from "../popper/popper.vue";
import GovIcon from "../icon/icon.vue";

defineOptions({
	name: "GovSelect",
});

const props = defineProps({
	modelValue: {
		type: String,
		default: undefined, // 绑定在输入框的值
	},
	width: {
		type: Number,
		default: null, // 日期选择器宽度
	},
	size: {
		type: String,
		default: "default",
	},
	placeholder: {
		type: String,
		default: "请输入",
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	clear: {
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

// 禁用的时候关闭下来
watch(
	() => props.disabled,
	() => {
		show.value = false;
	},
);

// 点击
const handleClick = () => {
	if (!props.disabled) {
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
@import "./scss/select.scss";
</style>
