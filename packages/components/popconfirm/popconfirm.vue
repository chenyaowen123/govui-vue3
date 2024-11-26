<template>
	<GovPopper
		:modelValue="show"
		v-bind="$attrs"
		class="gov-popconfirm"
		@change="(val) => (show = val)"
	>
		<template #reference>
			<div @click="show = true" class="gov-popconfirm__reference">
				<slot name="reference" />
			</div>
		</template>
		<div class="gov-popconfirm__text" v-if="!$slots.default">
			<span v-if="icon" class="gov-popconfirm__icon">
				<GovIcon :name="icon" :style="{ color: iconColor }" />
			</span>
			<span v-if="title" class="gov-popconfirm__title">{{ title }}</span>
		</div>
		<div v-else>
			<slot />
		</div>
		<div class="gov-popconfirm__buttons">
			<GovButton
				size="small"
				@click="handleCancel"
				:type="cancelButtonType"
			>
				{{ cancelButtonText }}
			</GovButton>
			<GovButton
				size="small"
				@click="handleConfirm"
				:type="confirmButtonType"
			>
				{{ confirmButtonText }}
			</GovButton>
		</div>
	</GovPopper>
</template>

<script setup>
import { ref } from "vue";
import GovPopper from "../popper/popper.vue";
import GovIcon from "../icon/icon.vue";
import GovButton from "../button/button.vue";

defineOptions({
	name: "GovPopconfirm",
});

defineProps({
	title: String,
	icon: String,
	iconColor: String,
	confirmButtonText: {
		type: String,
		default: "确定",
	},
	cancelButtonText: {
		type: String,
		default: "取消",
	},
	confirmButtonType: {
		type: String,
		default: "primary",
	},
	cancelButtonType: {
		type: String,
		default: "text",
	},
});

const emit = defineEmits(["update:modelValue", "cancel", "confirm"]);

const show = ref(false);

const handleCancel = () => {
	show.value = false;
	emit("cancel");
};

const handleConfirm = () => {
	show.value = false;
	emit("confirm");
};
</script>
