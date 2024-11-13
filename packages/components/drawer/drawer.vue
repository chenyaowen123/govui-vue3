<template>
	<div class="gov-drawer" ref="drawer">
		<transition name="gov-drawer-modal-fade">
			<div
				v-if="modal && modelValue"
				class="gov-drawer__modal"
				@click.stop="handleWrapperClick"
			/>
		</transition>
		<transition
			name="gov-drawer-easing"
			@after-enter="afterEnter"
			@after-leave="afterLeave"
		>
			<div
				v-show="modelValue"
				class="gov-drawer__container"
				:class="[`at-${at}`]"
				:style="drawerStyle"
			>
				<div class="gov-drawer__body" :class="[customClass]">
					<slot />
				</div>
				<div
					v-if="hasClose"
					class="gov-drawer__close"
					:class="[`at-${at}`]"
					@click="close"
				>
					<govIcon name="close" />
				</div>
			</div>
		</transition>
	</div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, watchEffect } from "vue";
import govIcon from "../icon/icon.vue";

defineOptions({
	name: "GovDrawer",
});

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
	// 是否有关闭按钮
	hasClose: {
		type: Boolean,
		default: true,
	},
	// 是否显示遮罩层
	modal: {
		type: Boolean,
		default: true,
	},
	// 点击遮罩层是否关闭
	modalClosable: {
		type: Boolean,
		default: true,
	},
	// 自定义class
	customClass: {
		type: String,
		default: "",
	},
	// 方向
	at: {
		type: String,
		default: "right",
		validator(val) {
			return ["left", "right", "top", "bottom"].includes(val);
		},
	},
	// 抽屉大小
	size: {
		type: [Number, String],
		default: "30%",
	},
});

const emit = defineEmits([
	"update:modelValue",
	"open",
	"opened",
	"close",
	"closed",
]);

const drawer = ref(null);

// 是否水平方向的
const isHorizontal = computed(() => {
	return ["right", "left"].includes(props.at);
});

// 判断尺寸
const drawerSize = computed(() => {
	return typeof props.size === "number" ? `${props.size}px` : props.size;
});

// 判断宽高
const drawerStyle = computed(() => {
	if (isHorizontal.value) {
		return { width: drawerSize.value };
	} else {
		return { height: drawerSize.value };
	}
});

// 打开后
const afterEnter = () => {
	emit("opened");
};

// 关闭后
const afterLeave = () => {
	emit("closed");
};

// 打开关闭事件
watchEffect(() => {
	emit(props.modelValue ? "open" : "close");
});

// 关闭
const close = () => {
	emit("update:modelValue", false);
};

// 点击遮罩层
const handleWrapperClick = () => {
	if (props.modalClosable) {
		close();
	}
};

// 添加至body
onMounted(() => {
	if (drawer.value) {
		document.body.appendChild(drawer.value);
	}
});

// 移除body
onBeforeUnmount(() => {
	if (drawer.value) {
		drawer.value.parentNode.removeChild(drawer.value);
	}
});
</script>

<style lang="scss">
@import "./drawer.scss";
</style>
