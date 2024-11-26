<template>
	<div
		class="gov-step"
		:class="[
			`gov-step--size-${size}`,
			`is-${internalStatus}`,
			{ 'is-center': isCenter },
		]"
	>
		<div class="gov-step__head">
			<div class="gov-step__head-line"></div>
			<div class="gov-step__head-icon">
				<slot name="icon" :index="innerNumber" :status="internalStatus">
					<GovIcon v-if="icon" :name="icon" />
					<div v-else class="gov-step__head-icon-inner">
						{{ innerNumber }}
					</div>
				</slot>
			</div>
		</div>
		<div class="gov-step__main">
			<div class="gov-step__main-title">
				<slot
					name="title"
					:index="innerNumber"
					:status="internalStatus"
				>
					{{ title }}
				</slot>
			</div>
			<div
				v-if="description || $slots.description"
				class="gov-step__main-description"
			>
				<slot
					name="description"
					:index="innerNumber"
					:status="internalStatus"
				>
					{{ description }}
				</slot>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, inject } from "vue";
import GovIcon from "../icon/icon.vue";

defineOptions({
	name: "GovStep",
});

defineProps({
	title: String,
	icon: String,
	description: String,
});

const govSteps = inject("govSteps", null);

const stepId = Symbol(); // 唯一id
govSteps?.addSteps?.(stepId); // 加入父级

const isCenter = computed(() => govSteps?.center);
const steps = computed(() => govSteps?.steps || []);
const size = computed(() => govSteps?.size || "default");
const innerNumber = computed(() => steps.value.indexOf(stepId) + 1);

// 判断是否为 当前、完成、等待
const internalStatus = computed(() => {
	let active = govSteps?.active || 0;
	if (innerNumber.value == active) {
		return "active";
	} else if (innerNumber.value < active) {
		return "finish";
	} else {
		return "wait";
	}
});
</script>
