<template>
	<gov-popper
		v-model="show"
		padding="0"
		v-bind="$attrs"
		class="gov-cascader"
		placement="bottom-start"
		:class="[{ 'is-disabled': innerDisabled }]"
	>
		<template #reference>
			<gov-input
				class="gov-cascader__input"
				:modelValue="inputText"
				:size="innerSize"
				:placeholder="placeholder"
				:disabled="innerDisabled"
				@focus="handleFocus"
				@blur="handleBlur"
				@clear="handleClear"
				@click="handleClick"
				readonly
				:triggerForm="false"
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
import { ref, inject, watch, computed } from "vue";
import GovInput from "../input/input.vue";
import GovPopper from "../popper/popper.vue";
import GovIcon from "../icon/icon.vue";
import GovCascaderPanel from "./cascader-panel.vue";
import { useReset } from "../utils/useReset";

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
	size: String,
	placeholder: {
		type: String,
		default: "请输入",
	},
	disabled: Boolean,
	clear: {
		type: Boolean,
		default: true,
	},
	// 是否显示完整的路径，将其赋值为false则仅显示最后一级
	showAllLevels: {
		type: Boolean,
		default: true,
	},
	// 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
	triggerForm: {
		type: Boolean,
		default: true,
	},
});

const show = ref(false);
const emits = defineEmits([
	"change",
	"focus",
	"blur",
	"clear",
	"update:modelValue",
]);

// 获取formItem
const govFormItem = inject("govFormItem", null);

// innerValue
const innerValue = computed({
	get() {
		return props.modelValue;
	},
	set(val) {
		emits("change", val);
		emits("update:modelValue", val);
		if (props.triggerForm) {
			govFormItem?.$emit("change");
		}
	},
});

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
	emits("clear");
	emits("change", []);
	emits("update:modelValue", []);
	if (props.triggerForm) {
		govFormItem?.$emit(["clear", "change"]);
	}
};
</script>
