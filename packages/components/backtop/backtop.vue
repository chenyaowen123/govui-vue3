<template>
	<transition name="gov-backtop-fade-in">
		<div
			v-show="visible"
			:style="backTopStyle"
			class="gov-backtop"
			@click.stop="handleClick"
			ref="govBacktopRef"
		>
			<slot>
				<div class="gov-backtop__default">
					<GovIcon name="arrow-up" />
				</div>
			</slot>
		</div>
	</transition>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import GovIcon from "../icon/icon.vue";

defineOptions({
	name: "GovBacktop",
});

const props = defineProps({
	visibilityHeight: {
		type: Number,
		default: 200,
	},
	target: {
		type: String,
		default: "",
	},
	right: {
		type: [Number, String],
		default: 40,
	},
	bottom: {
		type: [Number, String],
		default: 40,
	},
	zIndex: {
		type: Number,
		default: 2000,
	},
	appendToBody: {
		type: Boolean,
		default: true,
	},
});

const visible = ref(false);
const scrollContainer = ref(null);
const govBacktopRef = ref(null);

const emit = defineEmits(["backtop"]);

// 更新显示隐藏
const handleScroll = () => {
	if (scrollContainer.value === window) {
		visible.value = window.scrollY >= props.visibilityHeight;
	} else {
		visible.value =
			scrollContainer.value.scrollTop >= props.visibilityHeight;
	}
};

// 点击回到顶部
const handleClick = () => {
	if (scrollContainer.value === window) {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	} else {
		scrollContainer.value.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}
	emit("backtop");
};

// 提高性能
const throttledHandleScroll = () => {
	if (typeof window.requestAnimationFrame === "function") {
		requestAnimationFrame(handleScroll);
	}
};

// 获取最近一个滚动对象
function getScrollParentElement(el) {
	if (el && el.tagName !== "BODY" && el.tagName !== "HTML") {
		if (el.scrollHeight > el.clientHeight) {
			return el;
		} else {
			return getScrollParentElement(el.parentElement);
		}
	}
	return null;
}

// 查找触发元素，判断是否触发一次
onMounted(() => {
	const targetElement = props.target
		? document.querySelector(props.target)
		: getScrollParentElement(govBacktopRef.value?.parentElement);

	if (targetElement) {
		scrollContainer.value = targetElement;
		targetElement.addEventListener("scroll", throttledHandleScroll);
	} else {
		scrollContainer.value = window;
		window.addEventListener("scroll", throttledHandleScroll);
	}
	handleScroll();
	// 当查找完毕父元素，判断如果 govBacktopRef 存在，则将其插入到 body
	if (props.appendToBody && govBacktopRef.value) {
		document.body.appendChild(govBacktopRef.value);
	}
});

onBeforeUnmount(() => {
	if (scrollContainer.value === window) {
		window.removeEventListener("scroll", throttledHandleScroll);
	} else {
		scrollContainer.value.removeEventListener(
			"scroll",
			throttledHandleScroll,
		);
	}
	// 如果appendToBody为true，从body中移除govBacktopRef元素
	if (props.appendToBody && govBacktopRef.value) {
		document.body.removeChild(govBacktopRef.value);
	}
});

const backTopStyle = computed(() => ({
	right: `${parseInt(props.right)}px`,
	bottom: `${parseInt(props.bottom)}px`,
	zIndex: props.zIndex,
}));
</script>

<style lang="scss">
@use "./backtop.scss";
</style>
