<template>
	<gov-popper
		v-model="show"
		:padding="0"
		v-bind="$attrs"
		class="gov-cascader"
		:class="[{ 'is-disabled': disabled }]"
	>
		<template #reference>
			<gov-input
				class="gov-cascader__input"
				:modelValue="inputText"
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
						class="gov-cascader__icon"
						:class="[{ 'is-open': show }]"
					/>
				</template>
			</gov-input>
		</template>
		<div class="gov-cascader__box">
			<gov-cascader-panel
				v-model="innerValue"
				:options="options"
				@select="show = false"
			/>
		</div>
	</gov-popper>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import GovInput from "../input/input.vue";
import GovPopper from "../popper/popper.vue";
import GovIcon from "../icon/icon.vue";
import GovCascaderPanel from "./cascader-panel.vue";

defineOptions({
	name: "GovCascader",
});

const props = defineProps({
	modelValue: {
		type: Array,
		default: () => [], // 绑定在输入框的值
	},
	options: {
		type: Array,
		default: () => [],
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
	// 是否显示完整的路径，将其赋值为false则仅显示最后一级
	showAllLevels: {
		type: Boolean,
		default: true,
	},
});

const show = ref(false);
const emits = defineEmits(["change", "clear", "update:modelValue"]);

// innerValeu
const innerValue = computed({
	get() {
		return props.modelValue;
	},
	set(val) {
		emits("change", val);
		emits("update:modelValue", val);
	},
});

// 使用 computed 属性来创建一个根据 values 数组查找对应的 label 的函数
const findLabels = (options, values) => {
	return values.map((value) => {
		const findLabel = (opt, val) => {
			for (const item of opt) {
				if (item.value === val) {
					return item.label;
				}
				if (item.children) {
					const label = findLabel(item.children, val);
					if (label) return label;
				}
			}
			return null;
		};
		return findLabel(options, value);
	});
};

// input展示
const inputText = computed(() => {
	let labels = findLabels(props.options, innerValue.value);
	if (props.showAllLevels) {
		return labels.join(" / ");
	} else if (labels.length > 0) {
		return labels[labels.length - 1];
	} else {
		return "";
	}
});

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
	emits("clear");
	emits("change", []);
	emits("update:modelValue", []);
};
</script>

<style lang="scss">
@import "./scss/cascader.scss";
</style>
