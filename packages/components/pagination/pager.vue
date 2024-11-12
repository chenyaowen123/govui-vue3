<template>
	<div
		class="gov-pager"
		:class="{ 'is-background': background, 'is-disabled': disabled }"
	>
		<!-- 如果需要显示第一页和省略点，则显示 -->
		<template v-if="paginationInfo.first">
			<div class="gov-pager__page" @click="changePage(1)">1</div>
			<div class="gov-pager__ellipsis">...</div>
		</template>

		<!-- 循环显示可见的页面编号 -->
		<div
			v-for="page in paginationInfo.list"
			:key="page"
			class="gov-pager__page"
			:class="{ 'is-active': page === modelValue }"
			@click="changePage(page)"
		>
			{{ page }}
		</div>

		<!-- 如果需要显示最后一页和省略点，则显示 -->
		<template v-if="paginationInfo.last">
			<div class="gov-pager__ellipsis">...</div>
			<div class="gov-pager__page" @click="changePage(pages.length)">
				{{ pages.length }}
			</div>
		</template>
	</div>
</template>

<script setup>
import { computed } from "vue";

defineOptions({
	name: "GovPager",
});

const props = defineProps({
	pages: {
		type: Array,
		default: () => [],
	},
	modelValue: {
		type: Number,
		default: 1, // 当前分页
	},
	disabled: Boolean,
	background: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

// 计算分页信息
const paginationInfo = computed(() => {
	const total = props.pages.length;
	// 小于7直接显示
	if (total <= 7) {
		return {
			list: props.pages,
			first: false,
			last: false,
		};
	}

	// 计算开头和结尾
	const startPage = Math.max(1, props.modelValue - 3);
	const endPage = Math.min(total, props.modelValue + 3);

	// 如果当前页是前几页，前方的省略点不显示，显示最后一页的省略点，
	if (props.modelValue <= 3) {
		return {
			list: [1, ...props.pages.slice(1, 6)],
			first: false,
			last: true,
		};
	}
	// 如果当前页是后几页，后方的省略点不显示，则显示第一页的省略点
	if (props.modelValue + 3 >= total) {
		return {
			list: [...props.pages.slice(total - 6, total)],
			first: true,
			last: false,
		};
	}
	// 默认情况，显示当前页附近的5页
	return {
		list: [...props.pages.slice(startPage, endPage)],
		first: true,
		last: true,
	};
});

// 改变页面的函数
const changePage = (page) => {
	if (!props.disabled && page !== props.modelValue) {
		emit("update:modelValue", page);
	}
};
</script>

<style scoped lang="scss">
@import "./pagination.scss";
</style>
