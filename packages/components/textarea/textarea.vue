<template>
	<div class="gov-textarea" :class="[{ 'is-resize': resize }]">
		<textarea
			ref="textarea"
			:rows="rows"
			:placeholder="placeholder"
			v-model="innerValue"
			:maxlength="maxlength"
			v-bind="$attrs"
			class="gov-textarea__input"
			:style="textareaStyle"
		/>
		<div class="gov-textarea__footer" v-if="hasFooter">
			<span v-if="maxlength">{{ currentLength }}/{{ maxlength }}</span>
			<span
				v-if="clearable"
				class="gov-textarea__clear-btn"
				@click="clearText"
			>
				清空
			</span>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from "vue";

defineOptions({
	name: "GovTextarea",
});

const props = defineProps({
	modelValue: String,
	rows: {
		type: [Number, String],
		default: 3,
	},
	maxlength: [Number, String],
	clearable: Boolean,
	placeholder: String,
	resize: {
		type: Boolean,
		default: true,
	},
});

const emits = defineEmits(["update:modelValue", "clear"]);

const innerValue = computed({
	get() {
		return props.modelValue;
	},
	set(val) {
		emits("update:modelValue", val);
	},
});
const textarea = ref(null);
const currentLength = computed(() => innerValue.value.length);
const hasFooter = computed(() => props.maxlength || props.clearable);
const textareaStyle = computed(() => {
	return {
		paddingBottom: hasFooter.value ? "20px" : "10px",
		resize: props.resize ? "both" : "none",
	};
});

const clearText = () => {
	innerValue.value = "";
	emits("update:modelValue", "");
	emits("clear");
};
</script>

<style scoped></style>

<style lang="scss">
@import "./textarea.scss";
</style>
