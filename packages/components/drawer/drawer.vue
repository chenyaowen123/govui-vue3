<template>
	<transition
		name="gov-drawer-fade"
		@after-enter="afterEnter"
		@after-leave="afterLeave"
	>
		<div class="gov-drawer__wrapper" v-show="modelValue">
			<div
				class="gov-drawer__container"
				:class="{ 'gov-drawer__open': modelValue }"
				@click.self="handleWrapperClick"
			>
				<div
					class="gov-drawer"
					:class="[direction, customClass]"
					:style="drawerStyle"
					ref="drawer"
				>
					<section class="gov-drawer__body">
						<slot />
					</section>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";

defineOptions({
	name: "GovDrawer",
});

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
	customClass: {
		type: String,
		default: "",
	},
	direction: {
		type: String,
		default: "rtl",
		validator(val) {
			return ["ltr", "rtl", "ttb", "btt"].includes(val);
		},
	},
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

const innerVisible = ref(props.modelValue);

// 判断方向
const isHorizontal = computed(() => {
	return props.direction === "rtl" || props.direction === "ltr";
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
watch(
	() => props.modelValue,
	(val) => {
		emit(val ? "open" : "close");
	},
);

// 点击遮罩层
const handleWrapperClick = () => {
	if (props.modelValue) {
		emit("update:modelValue", false);
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
