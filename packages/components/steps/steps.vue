<template>
	<div class="gov-steps">
		<slot></slot>
	</div>
</template>

<script setup>
import { provide, ref, reactive, toRefs } from "vue";

defineOptions({
	name: "GovSteps",
});

const props = defineProps({
	active: Number, // 在第几个 1 开始
	center: Boolean, // 是否居中
	size: String,
});

const steps = ref([]); // stepid列表

function addSteps(item) {
	steps.value.push(item);
}

provide(
	"govSteps",
	reactive({
		...toRefs(props),
		steps,
		addSteps,
	}),
);
</script>
