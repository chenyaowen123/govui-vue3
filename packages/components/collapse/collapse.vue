<template>
	<div class="gov-collapse">
		<slot />
	</div>
</template>

<script setup>
import { provide, reactive, toRefs } from "vue";
defineOptions({
	name: "GovCollapse",
});
const props = defineProps({
	modelValue: {
		type: [String, Number],
		default: null,
	},
	disabled: Boolean,
});

const emit = defineEmits(["toggle", "update:modelValue"]);

const updateValue = (val) => {
	emit("toggle", val);
	emit("update:modelValue", val);
};

provide(
	"govCollapse",
	reactive({
		...toRefs(props),
		updateValue,
	}),
);
</script>
