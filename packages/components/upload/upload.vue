<template>
	<div class="gov-upload" :class="[{ 'is-disabled': innerDisabled }]">
		<div class="gov-upload__header">
			<label class="gov-upload__label">
				<GovButton
					:size="innerSize"
					:type="buttonType"
					:disabled="innerDisabled"
					@click="triggerFileInput"
				>
					{{ buttonText }}
				</GovButton>
				<input
					v-bind="$attrs"
					type="file"
					:multiple="multiple"
					ref="fileInput"
					:disabled="innerDisabled"
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
						v-if="!innerDisabled"
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
import { ref, inject, computed, nextTick } from "vue";
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
	size: String,
	disabled: Boolean,
	buttonText: {
		type: String,
		default: "上传文件",
	},
	buttonType: {
		type: String,
		// default: "primary",
		default: "default",
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
	multiple: {
		type: Boolean,
		default: false, // 是否多选
	},
});

const emits = defineEmits(["update:modelValue"]);

// 获取formItem
const govFormItem = inject("govFormItem", null);

// 计算大小
const innerSize = computed(() => {
	return props?.size || govFormItem?.size;
});

// 是否禁用
const innerDisabled = computed(() => {
	return props?.disabled || govFormItem?.disabled;
});

// Button联动file控件
const fileInput = ref(null);
const triggerFileInput = () => {
	if (fileInput.value && !innerDisabled.value) {
		fileInput.value.click();
	}
};

// props.modelValue 副本，处理格式化，以及方便操作。
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

// 更新文件项的通用函数
const updateFileItem = (fileId, updateFn) => {
	const index = modelValueComputed.value.findIndex(
		(item) => item.id === fileId,
	);
	if (index !== -1) {
		const newValue = [...modelValueComputed.value];
		updateFn(newValue[index]);
		emits("update:modelValue", newValue);
	}
};

// 处理文件变更，实际上是添加逻辑。
const handleFileChange = (event) => {
	// 添加到数据
	const files = event.target.files;
	const newFiles = Array.from(files).map((file) => {
		const fileId = Symbol();
		return {
			id: fileId,
			status: "pending",
			name: file.name,
			type: file.type.startsWith("image/") ? "img" : "file",
			progress: 0,
			_file: file,
		};
	});
	emits("update:modelValue", [...modelValueComputed.value, ...newFiles]);
	// 执行上传
	nextTick(() => {
		newFiles.forEach((file) => {
			if (props.uploadRequest) {
				props
					.uploadRequest(file, file.id, (progress) => {
						updateFileItem(file.id, (fileItem) => {
							fileItem.progress = progress;
						});
					})
					.then((response) => {
						updateFileItem(file.id, (fileItem) => {
							fileItem.status = "success";
							fileItem.url = response.url;
						});
					})
					.catch(() => {
						updateFileItem(file.id, (fileItem) => {
							fileItem.status = "failed";
						});
					});
			}
		});
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
@use "./upload.scss";
</style>
