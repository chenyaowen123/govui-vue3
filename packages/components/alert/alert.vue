<template>
	<transition name="gov-alert-fade">
		<div
			v-show="visible"
			class="gov-alert"
			:class="[
				`gov-alert--${type}`,
				center ? 'is-center' : '',
				plain ? 'is-plain' : '',
			]"
		>
			<GovIcon
				v-if="showIcon"
				:name="type"
				class="gov-alert__icon"
				:class="['gov-icon-' + type, isBig ? 'is-big' : '']"
			/>
			<div class="gov-alert__content">
				<span
					class="gov-alert__title"
					:class="{ 'is-bold': isBig }"
					v-if="title || $slots.title"
				>
					<slot name="title">{{ title }}</slot>
				</span>
				<div
					v-if="description"
					v-html="description"
					class="gov-alert__description"
				></div>
				<div
					v-if="$slots.default && !description"
					class="gov-alert__description"
				>
					<slot />
				</div>
				<span class="gov-alert__closebtn" @click="handleClose">
					<GovIcon name="close" v-if="!closeText" />
					{{ closeText }}
				</span>
			</div>
		</div>
	</transition>
</template>

<script setup>
import { ref, computed, useSlots } from "vue";
import GovIcon from "../icon/icon.vue";
defineOptions({
	name: "GovAlert",
});
const props = defineProps({
	title: String,
	description: String,
	type: {
		type: String,
		default: "info",
		validator: (value) =>
			["info", "success", "warning", "danger"].includes(value),
	},
	plain: Boolean,
	closable: {
		type: Boolean,
		default: true,
	},
	closeText: String,
	showIcon: Boolean,
	center: Boolean,
});

const visible = ref(true);

const emit = defineEmits(["close"]);

const slots = useSlots();
const hasDefaultSlotContent = computed(() => {
	return slots.default && slots.default().length > 0;
});

const isBig = computed(() =>
	props.description || hasDefaultSlotContent.value ? "is-big" : "",
);

const handleClose = () => {
	visible.value = false;
	emit("close");
};
</script>

<style lang="scss">
@use "./alert.scss";
</style>
