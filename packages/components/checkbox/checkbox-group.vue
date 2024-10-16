<template>
	<div class="gov-checkbox-group" :class="{ 'is-disabled': disabled }">
		<slot></slot>
	</div>
</template>

<script setup>
import { provide, reactive, toRefs } from "vue";

defineOptions({
	name: "GovCheckboxGroup",
});

const props = defineProps({
	modelValue: Array,
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
	"govCheckboxGroup",
	reactive({
		...toRefs(props),
		updateValue,
	}),
);
</script>

<style lang="scss">
.gov-checkbox-group.is-disabled {
	cursor: not-allowed;
}
</style>
