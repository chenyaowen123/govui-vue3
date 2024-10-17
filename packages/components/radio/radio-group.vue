<template>
	<div class="gov-radio-group" :class="{ 'is-disabled': disabled }">
		<slot></slot>
	</div>
</template>

<script setup>
import { provide, reactive, toRefs } from "vue";

defineOptions({
	name: "GovRadioGroup",
});

const props = defineProps({
	modelValue: [String, Number],
	border: Boolean,
	size: String,
	button: Boolean,
	disabled: Boolean,
});

const emit = defineEmits(["change", "update:modelValue"]);

const updateValue = (val) => {
	emit("change", val);
	emit("update:modelValue", val);
};

provide(
	"govRadioGroup",
	reactive({
		...toRefs(props),
		updateValue,
	}),
);
</script>

<style lang="scss">
.gov-radio-group.is-disabled {
	cursor: not-allowed;
}
</style>
