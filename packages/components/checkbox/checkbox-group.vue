<template>
	<div class="gov-checkbox-group"><slot></slot></div>
</template>

<script setup>
import { provide, reactive, toRefs } from "vue";

defineOptions({
	name: "GovCheckboxGroup",
});

const props = defineProps({
	modelValue: Array,
	size: String,
});

const emit = defineEmits(["change", "update:modelValue"]);

const updateValue = (val) => {
	emit("change", val);
	emit("update:modelValue", val);
};

provide(
	"govCheckboxGroup",
	reactive({
		...toRefs(props),
		updateValue,
	}),
);
</script>

<style lang="scss"></style>
