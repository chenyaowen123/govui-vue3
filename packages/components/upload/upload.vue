<template>
	<div class="gov-upload" :class="[{ 'is-disabled': disabled }]">
		<div class="gov-upload__header">
			<label class="gov-upload__label">
				<GovButton
					:size="buttonSize"
					:type="buttonType"
					:disabled="disabled"
					@click="triggerFileInput"
				>
					{{ buttonText }}
				</GovButton>
				<input
					type="file"
					ref="fileInput"
					multiple
					:disabled="disabled"
					@change="handleFileChange"
					class="gov-upload__original"
				/>
			</label>
			<slot name="append">
				<div class="gov-upload__tip-append" v-if="append">
					{{ append }}
				</div>
			</slot>
		</div>
		<slot name="tip">
			<div class="gov-upload__tip" v-if="tip">{{ tip }}</div>
		</slot>
		<div
			class="gov-upload__list"
			v-for="(item, index) in modelValueComputed"
			:key="index"
		>
			<div class="gov-upload__item" :class="[`is-${item.status}`]">
				<div class="gov-upload__box">
					<div class="gov-upload__status">
						<GovIcon name="time" v-if="item.status === 'pending'" />
						<GovIcon
							name="success"
							v-if="item.status === 'success'"
						/>
						<GovIcon name="error" v-if="item.status === 'failed'" />
					</div>
					<div class="gov-upload__info">
						<div class="gov-upload__view">
							<template v-if="item.type === 'img'">
								<img
									:src="item.url"
									v-if="item.status === 'success'"
								/>
								<GovIcon v-else name="picture-outline" />
							</template>
							<GovIcon v-else name="folder-opened" />
						</div>
						<div class="gov-upload__txt">{{ item.name }}</div>
					</div>
					<div
						class="gov-upload__delete"
						v-if="!disabled"
						@click="handleDelete(item.id, index)"
					>
						<GovIcon name="circle-close" />
					</div>
				</div>
				<div
					class="gov-upload__progress"
					v-if="item.status === 'pending'"
				>
					<div
						class="gov-upload__progress-bar"
						:style="{ width: `${item.progress}%` }"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from "vue";
import GovButton from "../button/button.vue";
import GovIcon from "../icon/icon.vue";

defineOptions({
	name: "GovUpload",
});

const props = defineProps({
	modelValue: {
		type: Array,
		default: () => [],
	},
	disabled: Boolean,
	buttonText: {
		type: String,
		default: "上传文件",
	},
	buttonSize: {
		type: String,
		default: "default",
	},
	buttonType: {
		type: String,
		default: "primary",
	},
	tip: {
		type: String,
		default: "",
	},
	append: {
		type: String,
		default: "",
	},
	uploadRequest: {
		type: Function,
		default: null,
	},
});

const emits = defineEmits(["update:modelValue"]);

const fileInput = ref(null);
const triggerFileInput = () => {
	if (fileInput.value && !props.disabled) {
		fileInput.value.click();
	}
};

// props.modelValue 副本
const modelValueComputed = computed({
	get: () =>
		props.modelValue.map((file) => {
			const fileCopy = { ...file };
			if (!fileCopy.id) {
				fileCopy.id = Symbol();
			}
			if (fileCopy.status === undefined) {
				fileCopy.status = "success";
			}
			if (fileCopy.type === undefined) {
				fileCopy.type =
					fileCopy.url && fileCopy.url.match(/\.(jpeg|jpg|gif|png)$/)
						? "img"
						: "file";
			}
			if (fileCopy.progress === undefined) {
				fileCopy.progress = 0;
			}
			if (!fileCopy.url && !fileCopy.id) {
				fileCopy.status = "failed";
			}
			return fileCopy;
		}),
	set: (newValue) => {
		emits("update:modelValue", newValue);
	},
});
console.log(props.modelValue);

// 更新文件项的通用函数
const updateFileItem = (fileId, updateFn) => {
	const index = modelValueComputed.value.findIndex(
		(item) => item.id === fileId,
	);
	if (index !== -1) {
		const newValue = [...modelValueComputed.value];
		updateFn(newValue[index]);
		console.log(newValue);
		emits("update:modelValue", newValue);
	}
};

// 处理文件变更
const handleFileChange = (event) => {
	const files = event.target.files;
	Array.from(files).forEach((file) => {
		const fileId = Symbol();
		const initialFile = {
			id: fileId,
			status: "pending",
			name: file.name,
			type: file.type.startsWith("image/") ? "img" : "file",
			progress: 0,
		};
		const newValue = [...modelValueComputed.value, initialFile];
		emits("update:modelValue", newValue);

		if (props.uploadRequest) {
			props
				.uploadRequest(file, fileId, (progress) => {
					updateFileItem(fileId, (fileItem) => {
						fileItem.progress = progress;
					});
				})
				.then((response) => {
					updateFileItem(fileId, (fileItem) => {
						fileItem.status = "success";
						fileItem.url = response.url;
					});
					console.log(1);
				})
				.catch(() => {
					updateFileItem(fileId, (fileItem) => {
						fileItem.status = "failed";
					});
					console.log(2);
				});
		}
	});
};

// 删除文件
const handleDelete = (fileId) => {
	const newValue = modelValueComputed.value.filter(
		(item) => item.id !== fileId,
	);
	emits("update:modelValue", newValue);
};
</script>

<style lang="scss">
@import "./upload.scss";
</style>
