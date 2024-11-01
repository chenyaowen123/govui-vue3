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

<style lang="scss">
.gov-loading {
	position: relative;
	&__inner {
		position: relative;
	}
	&__overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 998;
		transition: opacity 0.3s ease;
		.gov-loading__spinner {
			text-align: center;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 14px;
			color: #fff;
		}
	}
}

// 定义过渡效果
.loading-transition-enter-active,
.loading-transition-leave-active {
	transition: opacity 0.5s;
}
.loading-transition-enter-from,
.loading-transition-leave-to {
	opacity: 0;
}
</style>
