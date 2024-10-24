<template>
	<gov-popper
		v-model="show"
		:width="popperWidth"
		:height="popperHeight"
		:padding="0"
		v-bind="$attrs"
		class="gov-input-auto"
	>
		<template #reference>
			<gov-input
				:modelValue="modelValue"
				v-bind="$attrs"
				@focus="handleFocus"
				@blur="handleBlur"
				@input="handleInput"
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
				<slot name="item" :item="item">{{ item }}</slot>
			</div>
		</div>
	</gov-popper>
</template>

<script setup>
import { ref, computed } from "vue";
import GovInput from "./input.vue";
import GovPopper from "../popper/popper.vue";

defineOptions({
	name: "GovInputAuto",
});

const props = defineProps({
	modelValue: {
		type: String,
		default: undefined, // 绑定在输入框的值
	},
	fetch: Function, // 获取数据的函数，返回一个数组，元素必须是字符串或者对象
	valueKey: {
		type: String,
		default: "value", // 显示在input里的值，当fetch返回为对象时有效。
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
const list = ref([]);
const emits = defineEmits(["update:modelValue", "input"]);

// 创建一个计算属性来提供默认的 fetch 函数
const fetchWithDefault = computed(() => {
	return props.fetch || (() => Promise.resolve([]));
});

// 抛出外层
const handleInput = (inputValue) => {
	list.value = fetchWithDefault.value(inputValue);
	emits("update:modelValue", inputValue);
	emits("input", inputValue);
};

const handleFocus = () => {
	list.value = fetchWithDefault.value(props.modelValue);
	show.value = true;
	emits("focus");
};

const handleBlur = () => {
	list.value = fetchWithDefault.value(props.modelValue);
	show.value = false;
	emits("blur");
};

// 点击某个元素
const handleClick = (item) => {
	let inputValue = item;
	if (typeof item !== "string") {
		inputValue = item[props.valueKey];
	}
	emits("update:modelValue", inputValue);
	emits("input", inputValue);
};
</script>

<style lang="scss">
.gov-input-auto {
	&__list {
		background: #fff;
		box-sizing: border-box;
		min-width: 200px;
		max-height: 300px;
	}
	&__li {
		background: #fff;
		padding: 5px 20px;
		cursor: pointer;
		transition: background-color 0.2s;
		&:hover {
			background: var(--gov-fill-color-5);
		}
	}
}
</style>
