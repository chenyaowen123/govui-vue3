// useResponsive.js
import { ref, computed } from "vue";
import { useEventListener } from "../utils/index.js";

// 根据不同窗口尺寸计算 responsive
export function useResponsive(props) {
	const responsiveProperties = computed(() => {
		return [
			{
				width: 1600,
				value: props.xxl,
			},
			{
				width: 1200,
				value: props.xl,
			},
			{
				width: 992,
				value: props.lg,
			},
			{
				width: 768,
				value: props.md,
			},
			{
				width: 576,
				value: props.sm,
			},
			{
				width: 0,
				value: props.xs,
			},
		];
	});

	const viewportWidth = ref(window.innerWidth);
	function getViewportWidth() {
		viewportWidth.value = window.innerWidth;
	}
	useEventListener(window, "resize", getViewportWidth);

	const responsive = computed(() => {
		for (const item of responsiveProperties.value) {
			if (item.value && viewportWidth.value >= item.width) {
				if (typeof item.value === "object") {
					return {
						span: item.value.span || props.span,
						offset: item.value.offset || props.offset,
					};
				} else {
					return {
						span: item.value,
						offset: props.offset,
					};
				}
			}
		}
		return {
			span: props.span,
			offset: props.offset,
		};
	});
	return responsive;
}
