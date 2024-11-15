// useStyle.js
import { computed } from "vue";
import { useGap } from "./useGap.js";

export function useStyle(props) {
	const { xGap, yGap } = useGap(props);

	const rowWidth = computed(() => {
		if (typeof props.width === "number") {
			return `${props.width}px`;
		}
		return props.width;
	});

	const style = computed(() => {
		return {
			"--xGap": `${xGap.value / 2}px`,
			"--justify": props.justify,
			"--align": props.align,
			width: rowWidth.value,
			"margin-left": `-${xGap.value / 2}px`,
			"margin-right": `-${xGap.value / 2}px`,
			"row-gap": `${yGap.value}px`,
		};
	});

	return style;
}
