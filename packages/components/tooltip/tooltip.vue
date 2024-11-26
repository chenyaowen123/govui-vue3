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
