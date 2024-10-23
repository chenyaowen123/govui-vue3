<template>
	<div class="gov-cascader-panel-list">
		<div
			class="gov-cascader-panel-list__li"
			v-for="item in options"
			:key="item.value"
			@click="handleClick(item)"
			:class="[
				{ 'is-active': selectedValues.includes(item.value) },
				{ 'is-expand': item.children?.length > 0 },
				{ 'is-disabled': item.disabled },
			]"
		>
			<div class="gov-cascader-panel-list__left">
				<GovIcon name="check" />
			</div>
			<div class="gov-cascader-panel-list__text">{{ item.label }}</div>
			<div class="gov-cascader-panel-list__right">
				<GovIcon name="arrow-right" />
			</div>
		</div>
	</div>
</template>

<script setup>
import { inject, computed } from "vue";
import GovIcon from "../icon/icon.vue";

defineOptions({
	name: "GovCascaderPanelList",
});

const props = defineProps({
	options: {
		type: {},
		default: () => [],
	},
	level: {
		type: Number,
		required: true,
	},
});

// 获取面板
const govCascaderPanel = inject("govCascaderPanel", null);

// 选中的values
const selectedValues = computed(() => {
	return govCascaderPanel.cascaderSelected.map((i) => i.value);
});

// 点击更新
const handleClick = (nodeObj) => {
	if (!nodeObj.disabled) {
		govCascaderPanel.updateCascaderPanelValue(props.level, nodeObj);
	}
};
</script>
