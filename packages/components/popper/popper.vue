<template>
	<Popper
		v-bind="$attrs"
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
				:style="{ width: width + 'px' }"
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
import { ref, watchEffect } from "vue";
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
	width: {},
	clickAwayClose: {
		type: Boolean,
		default: true,
	},
});

const emit = defineEmits(["update:modelValue", "change", "show", "hide"]);

const handleOpen = () => {
	emit("update:modelValue", true);
	emit("change", true);
	emit("show");
};

const handleClose = () => {
	emit("update:modelValue", false);
	emit("change", false);
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
</script>

<style lang="scss" scoped>
.gov-popper {
	&__title {
		font-size: 16px;
		padding-bottom: 5px;
		color: var(--gov-text-color);
	}
	&__content {
		font-size: 14px;
		color: var(--gov-text-color);
	}
}
</style>
