<template>
	<GovPopper
		v-model="show"
		:height="popperHeight"
		padding="0"
		v-bind="$attrs"
		placement="bottom-start"
		class="gov-input-auto"
	>
		<template #reference>
			<gov-input
				v-model="innerValue"
				v-bind="$attrs"
				@focus="handleFocus"
				@blur="handleBlur"
				@input="handleInput"
				@change="handleChange"
				@clear="handleClear"
				:size="size"
				:triggerForm="false"
			>
				<template v-if="$slots.addonBefore" #addonBefore>
					<slot name="addonBefore" />
				</template>
				<template v-if="$slots.addonAfter" #addonAfter>
					<slot name="addonAfter" />
				</template>
				<template v-if="$slots.prefix" #prefix>
					<slot name="prefix" />
				</template>
				<template v-if="$slots.suffix" #suffix>
					<slot name="suffix" />
				</template>
			</gov-input>
		</template>
		<div class="gov-input-auto__list">
			<div
				class="gov-input-auto__li"
				v-for="(item, index) in list"
				:key="index"
				@click="handleClick(item)"
			>
				<slot :item="item">{{ item }}</slot>
			</div>
		</div>
	</GovPopper>
</template>

<script setup>
import { ref, inject, computed } from "vue";
import GovInput from "./input.vue";
import GovPopper from "../popper/popper.vue";
import { useReset } from "../utils/useReset";

defineOptions({
	name: "GovInputAuto",
});

const props = defineProps({
	modelValue: String, // 绑定在输入框的值
	fetch: Function, // 获取数据的函数，返回一个数组，元素必须是字符串或者对象
	valueKey: {
		type: String,
		default: "value", // 显示在input里的值，当fetch返回为对象时有效。
	},
	popperHeight: {
		type: String,
		default: "200px",
	},
	size: String,
	// 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
	triggerForm: {
		type: Boolean,
		default: true,
	},
});

const show = ref(false);
const list = ref([]);
const emits = defineEmits([
	"update:modelValue",
	"input",
	"change",
	"select",
	"focus",
	"blur",
	"clear",
]);

// 创建一个计算属性来提供默认的 fetch 函数
const fetchWithDefault = computed(() => {
	return props.fetch || (() => Promise.resolve([]));
});

// 绑定
const innerValue = computed({
	get() {
		return props.modelValue;
	},
	set(val) {
		emits("update:modelValue", val);
	},
});

// 获取formItem
const govFormItem = inject("govFormItem", null);

// 监听重置功能
useReset(govFormItem, props, (initialValue) => {
	emits("update:modelValue", initialValue);
});

// 抛出外层
const handleInput = (inputValue) => {
	list.value = fetchWithDefault.value(inputValue);
	show.value = true;
	emits("input", inputValue);
	if (props.triggerForm) {
		govFormItem?.$emit("input");
	}
};

const handleChange = (value) => {
	emits("change", value);
	if (props.triggerForm) {
		govFormItem?.$emit("change");
	}
};

const handleFocus = () => {
	list.value = fetchWithDefault.value(props.modelValue);
	show.value = true;
	emits("focus");
	if (props.triggerForm) {
		govFormItem?.$emit("focus");
	}
};

const handleBlur = () => {
	list.value = fetchWithDefault.value(props.modelValue);
	show.value = false;
	emits("blur");
	if (props.triggerForm) {
		govFormItem?.$emit("blur");
	}
};

const handleClear = () => {
	emits("clear");
	if (props.triggerForm) {
		govFormItem?.$emit("clear");
	}
};

// 点击某个元素
const handleClick = (item) => {
	let inputValue = item;
	if (typeof item !== "string") {
		inputValue = item[props.valueKey];
	}
	show.value = false;
	emits("select", item);
	emits("update:modelValue", inputValue);
	emits("input", inputValue);
	if (props.triggerForm) {
		govFormItem?.$emit(["select", "input"]);
	}
};
</script>

<style lang="scss">
.gov-input-auto {
	position: relative;
	width: 100%;
	.popper {
		width: 100%;
		#arrow {
			// 当popper设置了100%，popper的 placement 不能准确计算
			transform: translate(50px, 0) !important;
		}
	}
	&__list {
		background: #fff;
		box-sizing: border-box;
		max-height: 300px;
		width: 100%;
	}
	&__li {
		background: #fff;
		padding: 5px 20px;
		margin: 2px 0;
		cursor: pointer;
		transition: background-color 0.2s;
		&:hover {
			background: var(--gov-fill-color-5);
		}
	}
}
</style>
