<template>
	<div v-if="divided" class="gov-dropdown-divided"></div>
	<div
		class="gov-dropdown-item"
		:class="[
			`gov-dropdown-item--size-${innerSize}`,
			{ 'is-disabled': isDisabled, 'is-center': isCenter },
		]"
		@click.stop="hadleClick"
	>
		<GovIcon v-if="icon" :name="icon" />
		<slot>{{ content }}</slot>
	</div>
</template>

<script setup>
import { inject, computed } from "vue";
import GovIcon from "../icon/icon.vue";
defineOptions({
	name: "GovDropdownItem",
});

const props = defineProps({
	divided: Boolean,
	disabled: Boolean,
	icon: String,
	content: String,
	size: String,
	center: Boolean,
	hideAfterClick: Boolean, // 点击后隐藏
});

const govDropdown = inject("govDropdown", null);
const innerSize = computed(() => {
	return props?.size || govDropdown?.size;
});

const isDisabled = computed(() => {
	return props?.disabled || govDropdown?.disabled;
});

const isCenter = computed(() => {
	return props?.center || govDropdown?.center;
});

// 是否点击后隐藏
const isHideAfterClick = computed(() => {
	return props?.hideAfterClick || govDropdown?.hideAfterClick;
});

const emit = defineEmits(["click"]);
function hadleClick() {
	if (!isDisabled.value) {
		emit("click");
		if (isHideAfterClick.value) {
			govDropdown?.updateVisible(false);
		}
	}
}
</script>
