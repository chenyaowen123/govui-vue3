<template>
	<div class="gov-radio-group"><slot /></div>
</template>

<script setup>
import { provide, reactive, toRefs } from "vue";
defineOptions({
	name: "GovRadioGroup",
});

const props = defineProps({
	modelValue: [String, Number, Boolean],
	size: String,
	disabled: Boolean,
	border: Boolean,
});

const emit = defineEmits(["input", "change", "update:modelValue"]);

const updateValue = (val) => {
	emit("input", val);
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

<style lang="scss"></style>
