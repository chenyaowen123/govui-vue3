<template>
	<div class="gov-cascader-panel">
		<GovCascaderPanelList :level="0" :options="options" />
		<GovCascaderPanelList
			v-for="(nodeObj, index) in cascaderSelected"
			:key="nodeObj.value"
			:level="index + 1"
			:options="nodeObj.children"
		/>
	</div>
</template>

<script setup>
import { ref, provide, reactive } from "vue";
import GovCascaderPanelList from "./cascader-panel-list.vue";

defineOptions({
	name: "GovCascaderPanel",
});

defineProps({
	options: {
		type: Array,
		default: () => [],
	},
});

// 记录选中列表，索引为层级，值为选中的Object
const cascaderSelected = ref([]);

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
