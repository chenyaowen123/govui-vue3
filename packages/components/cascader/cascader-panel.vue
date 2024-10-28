<template>
	<div class="gov-cascader-panel">
		<GovCascaderPanelList :level="0" :options="options" />
		<template
			v-for="(nodeObj, index) in cascaderSelected"
			:key="nodeObj.value"
		>
			<GovCascaderPanelList
				v-if="nodeObj.children && nodeObj.children.length"
				:level="index + 1"
				:options="nodeObj.children"
			/>
		</template>
	</div>
</template>

<script setup>
import { ref, computed, watchEffect, provide, reactive } from "vue";
import GovCascaderPanelList from "./cascader-panel-list.vue";

defineOptions({
	name: "GovCascaderPanel",
});

const props = defineProps({
	options: {
		type: Array,
		default: () => [],
	},
	modelValue: {
		type: Array,
		default: () => [],
	},
});

const emits = defineEmits(["change", "update:modelValue", "expand", "select"]);

// 记录选中列表，索引为层级，值为选中的Object
const cascaderSelected = ref([]);

// 计算选中列表的values
const cascaderSelectedValues = computed(() => {
	return cascaderSelected.value.map((i) => i.value);
});

// 回显：监听 options 和 modelValue 的变化，并更新 cascaderSelected
watchEffect(() => {
	let selectedArr = [];
	let nodeOptions = props.options;
	let remainingModelValues = [...props.modelValue];
	while (remainingModelValues.length > 0) {
		const currentVal = remainingModelValues.shift();
		const node = nodeOptions.find((n) => n.value === currentVal);
		if (node) {
			selectedArr.push(node);
			if (node.children && node.children.length) {
				nodeOptions = node.children;
			} else {
				break; // 如果没有子节点，结束循环
			}
		} else {
			break; // 如果没有找到节点，结束循环
		}
	}
	cascaderSelected.value = selectedArr;
});

// 不同层级更新选中值
const updateCascaderPanelValue = (level, nodeObj) => {
	let updatedSelected = [];
	for (let i = 0; i < level; i++) {
		if (cascaderSelected.value[i] !== undefined) {
			updatedSelected.push(cascaderSelected.value[i]);
		}
	}
	updatedSelected.push(nodeObj);
	cascaderSelected.value = updatedSelected;
	emits("change", cascaderSelectedValues.value, updatedSelected);
	emits("update:modelValue", cascaderSelectedValues.value);
	// 判断是否为展开项，或者最后一项。
	let last = updatedSelected[updatedSelected.length - 1];
	if (last?.children?.length) {
		emits("expand", cascaderSelectedValues.value, updatedSelected);
	} else {
		emits("select", cascaderSelectedValues.value, updatedSelected);
	}
};

// 给下层
provide(
	"govCascaderPanel",
	reactive({
		cascaderSelected,
		updateCascaderPanelValue,
	}),
);
</script>

<style lang="scss">
@import "./scss/cascader-panel.scss";
</style>
