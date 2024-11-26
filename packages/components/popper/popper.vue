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
