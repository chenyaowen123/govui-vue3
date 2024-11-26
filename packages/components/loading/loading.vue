<template>
	<div class="gov-loading" :class="{ 'gov-loading--active': modelValue }">
		<div class="gov-loading__inner">
			<slot></slot>
		</div>
		<transition name="loading-transition">
			<div
				v-show="modelValue"
				class="gov-loading__overlay"
				:style="{ background: loadingBackground }"
			>
				<div class="gov-loading__spinner">
					<slot name="loading">
						<GovIcon name="loading" size="30" />
						<div>{{ loadingText }}</div>
					</slot>
				</div>
			</div>
		</transition>
	</div>
</template>

<script setup>
import GovIcon from "../icon/icon.vue";

defineOptions({
	name: "GovLoading",
});

defineProps({
	modelValue: Boolean,
	loadingText: {
		type: String,
		default: "加载中...",
	},
	loadingBackground: {
		type: String,
		default: "rgba(0, 0, 0, 0.5)",
	},
});
</script>
