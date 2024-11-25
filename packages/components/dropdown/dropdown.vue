<template>
	<GovPopper
		v-model="innerValue"
		:disabled="disabled"
		padding="0"
		v-bind="$attrs"
		class="gov-dropdown"
		:class="[{ 'is-disabled': disabled }]"
	>
		<template #reference>
			<slot />
		</template>
		<div class="gov-dropdown__box">
			<slot name="dropdown" />
		</div>
	</GovPopper>
</template>

<script setup>
import { computed, watch, provide, reactive, toRefs } from "vue";
import GovPopper from "../popper/popper.vue";

defineOptions({
	name: "GovDropdown",
});

const props = defineProps({
	modelValue: Boolean,
	disabled: Boolean,
	center: Boolean,
	hideAfterClick: Boolean, // 点击后隐藏
	size: String,
});

const emits = defineEmits(["update:modelValue", "toggle"]);

// innerValeu
const innerValue = computed({
	get() {
		return props.modelValue;
	},
	set(val) {
		emits("toggle", val);
		emits("update:modelValue", val);
	},
});

// 禁用的时候关闭下来
watch(
	() => props.disabled,
	() => {
		innerValue.value = false;
	},
);

const updateVisible = (val) => {
	innerValue.value = val;
};

provide(
	"govDropdown",
	reactive({
		...toRefs(props),
		updateVisible,
	}),
);
</script>

<style lang="scss"></style>
