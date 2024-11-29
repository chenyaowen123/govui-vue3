<template>
	<div
		class="costom-editor"
		:class="[
			`size-${innerSize}`,
			{
				'is-disabled': innerDisabled,
				'is-error': isError,
			},
		]"
	>
		<QuillEditor
			theme="snow"
			v-model:content="innerValue"
			contentType="html"
			style="height: 200px"
			placeholder="请输入"
			@focus="handleFocus"
			@blur="handleBlur"
			ref="editorRef"
		/>
	</div>
</template>

<script setup>
import { ref, computed, inject, onMounted, watchEffect } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

defineOptions({
	name: "GovEditor",
});

const props = defineProps({
	modelValue: String,
	size: String,
	disabled: Boolean,
});

const editorRef = ref();
const govFormItem = inject("govFormItem", null);
const emits = defineEmits(["update:modelValue", "change", "focus", "blur"]);

// 绑定值
const innerValue = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emits("update:modelValue", value);
		emits("change", value);
		govFormItem?.$emit("change");
	},
});

// 重置功能
// 参见 VueQuill 的 setHTML
// 文档：https://vueup.github.io/vue-quill/api/methods.html#sethtml-html
const initialValue = ref();
onMounted(() => {
	initialValue.value = props.modelValue;
});
govFormItem?.$on("reset", () => {
	editorRef.value?.setHTML(initialValue.value || "");
});

// 获得焦点
const handleFocus = () => {
	emits("focus");
	govFormItem?.$emit("focus");
};

// 失去焦点
const handleBlur = () => {
	emits("blur");
	govFormItem?.$emit("blur");
};

// 计算大小
const innerSize = computed(() => {
	return props?.size || govFormItem?.size || "default";
});

// 是否禁用
const innerDisabled = computed(() => {
	return props?.disabled || govFormItem?.disabled;
});

// 表单验证是否为错误状态
const isError = computed(() => {
	return govFormItem?.validateState === "error";
});

// 设置禁用，quill 文档：https://quilljs.com/docs/api/#disable
watchEffect(() => {
	const quill = editorRef.value?.getQuill();
	quill?.enable(!innerDisabled.value);
});
</script>

<style lang="scss">
.costom-editor {
	&.is-disabled {
		.ql-toolbar {
			background: #f9f9f9;
		}
		.ql-container {
			background: #f9f9f9;
		}
	}
	&.is-error {
		.ql-toolbar {
			border-color: red;
		}
		.ql-container {
			border-color: red;
		}
	}
}
</style>
