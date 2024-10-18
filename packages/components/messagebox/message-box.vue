<template>
	<gov-dialog
		v-model="dialogVisible"
		:title="title"
		:width="width"
		:closeOnClickModal="false"
		@close="handleClose"
		@closed="handleClosed"
		top="30vh"
	>
		<div class="gov-messagebox__content" v-html="content"></div>
		<template #footer>
			<div class="gov-messagebox__footer">
				<gov-button
					v-if="showCancelButton"
					size="small"
					@click="handleCancel"
				>
					{{ cancelButtonText }}
				</gov-button>
				<gov-button
					v-if="showConfirmButton"
					size="small"
					type="primary"
					@click="handleConfirm"
				>
					{{ confirmButtonText }}
				</gov-button>
			</div>
		</template>
	</gov-dialog>
</template>

<script setup>
import { onMounted, ref } from "vue";
import GovDialog from "../dialog/dialog.vue";
import GovButton from "../button/button.vue";
defineOptions({
	name: "GovMessageBox",
});

const props = defineProps({
	title: {
		type: String,
		default: "提示",
	},
	show: Boolean,
	width: {
		type: String,
		default: "450px",
	},
	content: {
		type: String,
		default: "",
	},
	showCancelButton: {
		type: Boolean,
		default: true,
	},
	showConfirmButton: {
		type: Boolean,
		default: true,
	},
	cancelButtonText: {
		type: String,
		default: "取消",
	},
	confirmButtonText: {
		type: String,
		default: "确定",
	},
	cancelCallback: {
		type: Function,
		default: () => {},
	},
	confirmCallback: {
		type: Function,
		default: () => {},
	},
	closeCallback: {
		type: Function,
		default: () => {},
	},
	closedCallback: {
		type: Function,
		default: () => {},
	},
});

const dialogVisible = ref(false);

onMounted(() => {
	dialogVisible.value = true;
});

const handleCancel = () => {
	dialogVisible.value = false;
	props.cancelCallback();
};

const handleConfirm = () => {
	dialogVisible.value = false;
	props.confirmCallback();
};

const handleClose = () => {
	dialogVisible.value = false;
	props.closeCallback();
};

const handleClosed = () => {
	props.closedCallback();
};
</script>

<style lang="scss">
.gov-messagebox {
	&__footer {
		text-align: right;
	}
}
</style>
