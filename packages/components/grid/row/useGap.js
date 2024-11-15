import { ref, computed } from "vue";
import { useEventListener } from "../utils/index.js";

/**
 * 计算Gap
 * @returns {xGap,yGap}
 */

export function useGap(props) {
	const viewportWidth = ref(window.innerWidth);
	function getViewportWidth() {
		viewportWidth.value = window.innerWidth;
	}
	useEventListener(window, "resize", getViewportWidth);

	function getResponsiveGap(gutter) {
		if (viewportWidth.value >= 1600 && gutter.xxl) {
			return gutter.xxl;
		}
		if (viewportWidth.value >= 1200 && gutter.xl) {
			return gutter.xl;
		}
		if (viewportWidth.value >= 992 && gutter.lg) {
			return gutter.lg;
		}
		if (viewportWidth.value >= 768 && gutter.md) {
			return gutter.md;
		}
		if (viewportWidth.value >= 576 && gutter.sm) {
			return gutter.sm;
		}
		if (viewportWidth.value < 576 && gutter.xs) {
			return gutter.xs;
		}
		return 0;
	}

	const xGap = computed(() => {
		if (typeof props.gutter === "number") {
			return props.gutter;
		}
		if (Array.isArray(props.gutter)) {
			if (typeof props.gutter[0] === "object") {
				return getResponsiveGap(props.gutter[0]);
			}
			return props.gutter[0];
		}
		if (typeof props.gutter === "object") {
			return getResponsiveGap(props.gutter);
		}
		return 0;
	});

	const yGap = computed(() => {
		if (Array.isArray(props.gutter)) {
			if (typeof props.gutter[1] === "object") {
				return getResponsiveGap(props.gutter[1]);
			}
			return props.gutter[1];
		}
		return 0;
	});
	return { xGap, yGap };
}
