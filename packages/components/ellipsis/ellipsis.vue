<template>
	<div
		class="gov-ellipsis"
		:class="[
			fold ? 'is-fold' : 'is-overflow',
			{
				'is-expanded': isExpanded,
				'has-foldup': !hideFoldup,
			},
		]"
	>
		<div
			ref="textRef"
			class="gov-ellipsis__content"
			:style="contentStyle"
			@click="handleClick"
		>
			<slot></slot>
		</div>
		<template v-if="fold && (hideFoldup ? !isExpanded : true)">
			<div class="gov-ellipsis__toggle" @click.stop="toggleExpand">
				<span><GovIcon name="arrow-down" /></span>
			</div>
		</template>
	</div>
</template>

<script setup>
import { ref, computed } from "vue";
import GovIcon from "../icon/icon.vue";

defineOptions({
	name: "GovEllipsis",
});

const props = defineProps({
	maxLines: {
		type: [Number, String],
		default: 1,
	},
	fold: {
		type: Boolean,
		default: false, // 是否为折叠模式
	},
	foldHeight: {
		type: [Number, String],
		default: 100, // 折叠下的高度
	},
	hideFoldup: Boolean, // 隐藏收起按钮
});

const textRef = ref(null);
const isExpanded = ref(false);

const contentStyle = computed(() => {
	if (isExpanded.value) {
		return {};
	}
	if (props.fold) {
		return {
			maxHeight: `${parseFloat(props.foldHeight)}px`,
		};
	} else {
		return {
			display: "-webkit-box",
			"-webkit-box-orient": "vertical",
			"-webkit-line-clamp": props.maxLines,
		};
	}
});

const handleClick = () => {
	if (!props.fold) {
		isExpanded.value = !isExpanded.value;
	}
};

const toggleExpand = () => {
	isExpanded.value = !isExpanded.value;
};
</script>

<style lang="scss">
@import "./ellipsis.scss";
</style>
