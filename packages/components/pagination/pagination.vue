<template>
	<div
		class="gov-pagination"
		:class="[{ 'is-background': background, 'is-disabled': disabled }]"
	>
		<div class="gov-pagination__total" v-if="!plain">
			<slot name="total" :total="total">共{{ total }} 条记录</slot>
		</div>
		<div class="gov-pagination__sizes" v-if="!plain">
			<gov-select
				v-model="innerPageSize"
				:disabled="disabled"
				:clearable="false"
				size="small"
				style="width: 100px"
			>
				<gov-select-option
					v-for="size in pageSizes"
					:key="size"
					:label="size"
					:value="size"
				/>
			</gov-select>
		</div>
		<div class="gov-pagination__prev" @click="prev">
			<slot name="prev">«</slot>
		</div>
		<gov-pager
			:pages="pages"
			v-model="innerCurrentPage"
			:disabled="disabled"
			:background="background"
		/>

		<div class="gov-pagination__next" @click="next">
			<slot name="next">»</slot>
		</div>
		<div class="gov-pagination__jumper" v-if="!plain">
			跳至：<gov-input-number
				v-model="innerCurrentPage"
				:step="1"
				:min="1"
				:max="pages.length"
				:clearable="false"
				:disabled="disabled"
				size="small"
				style="width: 50px"
			/>
			页
		</div>
	</div>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
import GovPager from "./pager.vue";
import GovSelect from "../select/select.vue";
import GovSelectOption from "../select/select-option.vue";
import GovInputNumber from "../input/input-number.vue";

defineOptions({
	name: "GovPagination",
});

const props = defineProps({
	modelValue: {
		type: Number,
		default: 1, // 当前页
	},
	pageSize: {
		type: Number,
		default: 10,
	},
	pageSizes: {
		type: Array,
		default: () => [10, 20, 30, 40],
	},
	disabled: Boolean,
	background: Boolean,
	plain: Boolean, // 朴素模式
	total: {
		type: Number,
		default: 0,
	},
});

const emit = defineEmits([
	"update:modelValue",
	"update:pageSize",
	"sizeChange",
	"currentChange",
]);

// 组件内记录的分页大小
const innerPageSize = ref(props.pageSize);
watchEffect(() => {
	innerPageSize.value = props.pageSize;
});
watchEffect(() => {
	let value = innerPageSize.value;
	if (value !== props.pageSize) {
		emit("update:pageSize", value);
		emit("sizeChange", value);
	}
});

// page 总数列表 1,2,3...
const pages = computed(() => {
	return Array.from(
		{ length: Math.ceil(props.total / innerPageSize.value) },
		(_, i) => i + 1,
	);
});

// 组件内记录的当前页，带有判断边界
const innerCurrentPage = ref(props.modelValue);
const checkPageValueBounds = (value) => {
	if (value < 1) {
		value = 1;
	}
	if (value > pages.value.length) {
		value = pages.value.length;
	}
	return value;
};
watchEffect(() => {
	innerCurrentPage.value = props.modelValue;
});
watchEffect(() => {
	let value = checkPageValueBounds(innerCurrentPage.value);
	if (value !== props.modelValue) {
		emit("update:modelValue", value);
		emit("currentChange", value);
	}
});

// 下一页
const prev = () => {
	if (!props.disabled) {
		innerCurrentPage.value--;
	}
};

// 上一页
const next = () => {
	if (!props.disabled) {
		innerCurrentPage.value++;
	}
};
</script>

<style scoped lang="scss">
@use "./pagination.scss";
</style>
