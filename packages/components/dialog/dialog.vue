<template>
	<transition
		name="dialog-fade"
		@after-enter="afterEnter"
		@after-leave="afterLeave"
	>
		<div
			v-show="modelValue"
			class="gov-dialog__wrapper"
			@click.self="handleWrapperClick"
			ref="dialogWrapper"
		>
			<div
				:class="[
					'gov-dialog',
					{
						'is-fullscreen': fullscreen,
					},
					customClass,
				]"
				:style="dialogStyle"
			>
				<div class="gov-dialog__header">
					<slot name="title">
						<span class="gov-dialog__title">{{ title }}</span>
					</slot>
					<button
						class="gov-dialog__headerbtn"
						v-if="showClose"
						@click="handleClose"
					>
						<GovIcon name="close" />
					</button>
				</div>
				<div class="gov-dialog__body" v-if="rendered">
					<slot />
				</div>
				<div class="gov-dialog__footer" v-if="$slots.footer">
					<slot name="footer" />
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import GovIcon from "../icon/icon.vue";

defineOptions({
	name: "GovDialog",
});

// Props 定义
const props = defineProps({
	modelValue: Boolean,
	title: {
		type: String,
		default: "提示",
	},
	closeOnClickModal: {
		type: Boolean,
		default: true,
	},
	showClose: {
		type: Boolean,
		default: true,
	},
	width: {
		type: String,
		default: "800px",
	},
	top: {
		type: String,
		default: "15vh",
	},
	fullscreen: Boolean,
	customClass: String,
	beforeClose: Function,
});

// 要加入body里的内容
const dialogWrapper = ref(null);

// dialog是否加载完毕
const rendered = ref(false);

// 加载完毕添加至body
onMounted(() => {
	rendered.value = true;
	document.body.appendChild(dialogWrapper.value);
});
onUnmounted(() => {
	if (dialogWrapper.value && document.body.contains(dialogWrapper.value)) {
		document.body.removeChild(dialogWrapper.value);
	}
});

// 计算弹窗宽高，全屏时候不加入样式，根据css来控制
const dialogStyle = computed(() => {
	let style = {};
	if (!props.fullscreen) {
		style.marginTop = props.top;
		if (props.width) {
			style.width = props.width;
		}
	}
	return style;
});

// 抛出对应节点的事件
const emit = defineEmits([
	"change",
	"open",
	"opened",
	"close",
	"closed",
	"update:modelValue",
]);
const afterEnter = () => {
	emit("opened");
};
const afterLeave = () => {
	emit("closed");
};
watch(
	() => props.modelValue,
	(val) => {
		if (val === true) {
			emit("open");
		}
		if (val === false) {
			emit("close");
		}
	},
);

// 点击遮罩层
const handleWrapperClick = () => {
	if (props.closeOnClickModal) {
		emit("update:modelValue", false);
	}
};

// 响应关闭，
// 这里 beforeClose 是用户利用回调函数，返回一个是否取消 cancel 参数，如果用户没有明显的设置返回 false，则认为是继续关闭
const handleClose = () => {
	if (props.beforeClose) {
		props.beforeClose((cancel) => {
			if (cancel !== false) {
				emit("update:modelValue", false);
			}
		});
	} else {
		emit("update:modelValue", false);
	}
};
</script>

<style lang="scss">
@use "./scss/dialog.scss";
</style>
