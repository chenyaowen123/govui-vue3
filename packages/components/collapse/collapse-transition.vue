<template>
	<transition name="gov-collapse-transition" v-on="on">
		<slot />
	</transition>
</template>
<script setup>
// 无固定高度的收缩折叠动画。
defineOptions({
	name: "ElCollapseTransition",
});

const reset = (el) => {
	el.style.maxHeight = "";
	el.style.overflow = el.dataset.oldOverflow;
	el.style.paddingTop = el.dataset.oldPaddingTop;
	el.style.paddingBottom = el.dataset.oldPaddingBottom;
};

const on = {
	beforeEnter(el) {
		if (!el.dataset) el.dataset = {};

		el.dataset.oldPaddingTop = el.style.paddingTop;
		el.dataset.oldPaddingBottom = el.style.paddingBottom;
		if (el.style.height) el.dataset.elExistsHeight = el.style.height;

		el.style.maxHeight = 0;
		el.style.paddingTop = 0;
		el.style.paddingBottom = 0;
	},

	enter(el) {
		requestAnimationFrame(() => {
			el.dataset.oldOverflow = el.style.overflow;
			if (el.dataset.elExistsHeight) {
				el.style.maxHeight = el.dataset.elExistsHeight;
			} else if (el.scrollHeight !== 0) {
				el.style.maxHeight = `${el.scrollHeight}px`;
			} else {
				el.style.maxHeight = 0;
			}

			el.style.paddingTop = el.dataset.oldPaddingTop;
			el.style.paddingBottom = el.dataset.oldPaddingBottom;
			el.style.overflow = "hidden";
		});
	},

	afterEnter(el) {
		el.style.maxHeight = "";
		el.style.overflow = el.dataset.oldOverflow;
	},

	enterCancelled(el) {
		reset(el);
	},

	beforeLeave(el) {
		if (!el.dataset) el.dataset = {};
		el.dataset.oldPaddingTop = el.style.paddingTop;
		el.dataset.oldPaddingBottom = el.style.paddingBottom;
		el.dataset.oldOverflow = el.style.overflow;

		el.style.maxHeight = `${el.scrollHeight}px`;
		el.style.overflow = "hidden";
	},

	leave(el) {
		if (el.scrollHeight !== 0) {
			el.style.maxHeight = 0;
			el.style.paddingTop = 0;
			el.style.paddingBottom = 0;
		}
	},

	afterLeave(el) {
		reset(el);
	},

	leaveCancelled(el) {
		reset(el);
	},
};
</script>

<style scoped>
.gov-collapse-transition-enter-active,
.gov-collapse-transition-leave-active {
	transition: max-height 0.3s ease-in-out;
	overflow: hidden;
}

.gov-collapse-transition-enter-from,
.gov-collapse-transition-leave-to {
	max-height: 0;
}

.gov-collapse-transition-enter-to,
.gov-collapse-transition-leave-from {
	max-height: 2000px;
}
</style>
