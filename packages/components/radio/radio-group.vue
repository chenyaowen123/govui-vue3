<template>
	<div class="gov-radio-group"><slot /></div>
</template>

<script setup>
import { provide } from "vue";
defineOptions({
	name: "GovRadioGroup",
});

const props = defineProps({
	value: {},
	size: String,
	disabled: Boolean,
	border: Boolean,
});

const updateValue = (value) => {
	// 触发更改
};

provide("govRadioGroup", {
	size: props.size,
	value: props.value,
	disabled: props.disabled,
	border: props.border,
	updateValue,
});
</script>

<style lang="scss"></style>
