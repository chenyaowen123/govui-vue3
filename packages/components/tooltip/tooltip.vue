<template>
	<Popper
		class="gov-tooltip"
		v-bind="$attrs"
		@open:popper="handleOpen"
		@close:popper="handleClose"
		:placement="placement"
		:content="content"
		:disabled="disabled"
		arrow
		hover
	>
		<div class="gov-tooltip__trigger">
			<slot />
		</div>
		<template #content>
			<div class="gov-tooltip__wrap">
				<div v-if="$slots.content" class="gov-tooltip__slot">
					<slot name="content" />
				</div>
				<div v-else class="gov-tooltip__content">
					{{ content }}
				</div>
			</div>
		</template>
	</Popper>
</template>

<script setup>
import Popper from "vue3-popper";
defineOptions({
	name: "GovTooltip",
});

defineProps({
	content: String,
	disabled: Boolean,
	placement: {
		type: String,
		default: "top",
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

const emit = defineEmits(["toggle", "show", "hide"]);

const handleOpen = () => {
	emit("toggle", true);
	emit("show");
};

const handleClose = () => {
	emit("toggle", false);
	emit("hide");
};
</script>

<style lang="scss">
@use "@/styles/theme.scss" as *;

.gov-tooltip {
	--popper-theme-background-color: #000;
	--popper-theme-background-color-hover: #000;
	--popper-theme-text-color: inherit;
	--popper-theme-border-width: 1px;
	--popper-theme-border-style: solid;
	--popper-theme-border-color: #000;
	--popper-theme-border-radius: 6px;
	--popper-theme-padding: 5px 10px;
	--popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
	&__wrap {
		overflow: auto;
	}
	&__slot {
		color: #fff;
	}
	&__content {
		font-size: 14px;
		color: #fff;
	}
}
</style>
