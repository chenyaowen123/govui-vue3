<template>
	<Popper
		v-bind="$attrs"
		:placement="placement"
		:show="modelValue"
		:arrow="arrow"
		@open:popper="handleOpen"
		@close:popper="handleClose"
		class="gov-popper"
	>
		<div ref="govPopperTriggerNode" class="gov-popper__trigger">
			<slot name="reference" />
		</div>
		<template #content>
			<div
				class="gov-popper__wrap"
				:style="styleObject"
				ref="govPopperWrapNode"
			>
				<div v-if="title" class="gov-popper__title">
					{{ title }}
				</div>
				<div v-if="content" class="gov-popper__content">
					{{ content }}
				</div>
				<div v-else class="gov-popper__slot">
					<slot />
				</div>
			</div>
		</template>
	</Popper>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
import Popper from "vue3-popper";
import useClickAway from "./useClickAway";

defineOptions({
	name: "GovPopper",
});

const props = defineProps({
	title: [String, Number],
	modelValue: Boolean,
	content: [String, Number],
	arrow: {
		type: Boolean,
		default: true,
	},
	width: String,
	height: String,
	padding: {
		type: String,
		default: "16px",
	},
	clickAwayClose: {
		type: Boolean,
		default: true,
	},
	placement: {
		type: String,
		default: "bottom-start",
		validator: (value) => {
			return [
				"top",
				"top-start",
				"top-end",
				"bottom",
				"bottom-start",
				"bottom-end",
				"left",
				"left-start",
				"left-end",
				"right",
				"right-start",
				"right-end",
			].includes(value);
		},
	},
});

const emit = defineEmits(["update:modelValue", "toggle", "show", "hide"]);

const handleOpen = () => {
	emit("update:modelValue", true);
	emit("toggle", true);
	emit("show");
};

const handleClose = () => {
	emit("update:modelValue", false);
	emit("toggle", false);
	emit("hide");
};

const govPopperWrapNode = ref(null);
const govPopperTriggerNode = ref(null);

// 点击远处关闭
watchEffect(() => {
	if (props.clickAwayClose) {
		useClickAway([govPopperWrapNode, govPopperTriggerNode], handleClose);
	}
});

const styleObject = computed(() => {
	return {
		width: props.width ? props.width : undefined,
		height: props.height ? props.height : undefined,
		padding: props.padding ? props.padding : undefined,
	};
});
</script>

<style lang="scss" scoped>
@use "@/styles/theme.scss" as *;

.gov-popper {
	--popper-theme-background-color: #ffffff;
	--popper-theme-background-color-hover: #ffffff;
	--popper-theme-text-color: inherit;
	--popper-theme-border-width: 1px;
	--popper-theme-border-style: solid;
	--popper-theme-border-color: #eeeeee;
	--popper-theme-border-radius: 6px;
	--popper-theme-padding: 10px 0;
	--popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);

	&__title {
		font-size: 16px;
		padding-bottom: 5px;
		color: var(--gov-text-color);
	}
	&__content {
		font-size: 14px;
		color: var(--gov-text-color);
	}
	&__wrap {
		overflow: auto;
	}
}
</style>
