<template>
	<div
		class="gov-datepicker"
		:style="width ? `width: ${props.width}px;` : ''"
	>
		<VueDatePicker
			locale="zh-CN"
			:month-change-on-scroll="false"
			:enable-time-picker="props.showTime"
			:time-picker="time"
			:week-picker="week"
			:month-picker="month"
			:year-picker="year"
			now-button-label="今天"
			:show-now-button="props.showToday"
			auto-apply
			text-input
			:model-type="props.modelType"
			:day-names="['一', '二', '三', '四', '五', '六', '日']"
			v-bind="$attrs"
		/>
	</div>
</template>
<script setup>
import { computed } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

defineOptions({
	name: "GovDatepicker",
});

const props = defineProps({
	width: {
		type: Number,
		default: null, // 日期选择器宽度，默认 220px
	},
	mode: {
		type: String,
		default: "date", // 选择器模式，默认 'date'
	},
	showTime: {
		type: Boolean,
		default: false, // 是否增加时间选择
	},
	showToday: {
		type: Boolean,
		default: false, // 是否展示“今天”按钮
	},
	modelType: {
		type: String,
		default: "format", // v-model 值类型，默认 'format'
	},
});

const time = computed(() => props.mode === "time");
const week = computed(() => props.mode === "week");
const month = computed(() => props.mode === "month");
const year = computed(() => props.mode === "year");
</script>

<style lang="scss" scoped>
.gov-datepicker {
	display: inline-block;
	:deep(.dp__input_wrap) {
		svg {
			fill: currentColor;
		}
	}
}

.dp__theme_dark {
	// dark theme
	--dp-background-color: #212121;
	--dp-text-color: #ffffff;
	--dp-hover-color: #484848;
	--dp-hover-text-color: #ffffff;
	--dp-hover-icon-color: #959595;
	--dp-primary-color: #005cb2;
	--dp-primary-text-color: #ffffff;
	--dp-secondary-color: #a9a9a9;
	--dp-border-color: #2d2d2d;
	--dp-menu-border-color: #2d2d2d;
	--dp-border-color-hover: #aaaeb7;
	--dp-disabled-color: #737373;
	--dp-scroll-bar-background: #212121;
	--dp-scroll-bar-color: #484848;
	--dp-success-color: #00701a;
	--dp-success-color-disabled: #428f59;
	--dp-icon-color: #959595;
	--dp-danger-color: #e53935;
	--dp-highlight-color: rgba(0, 92, 178, 0.2);
}
.dp__theme_light {
	// light theme
	--dp-background-color: #ffffff;
	--dp-text-color: #212121;
	--dp-hover-color: #f3f3f3;
	--dp-hover-text-color: #212121;
	--dp-hover-icon-color: #959595;
	--dp-primary-color: #1976d2;
	--dp-primary-text-color: #f8f5f5;
	--dp-secondary-color: #c0c4cc;
	--dp-border-color: #ddd;
	--dp-menu-border-color: #ddd;
	--dp-border-color-hover: #aaaeb7;
	--dp-disabled-color: #f6f6f6;
	--dp-scroll-bar-background: #f3f3f3;
	--dp-scroll-bar-color: #959595;
	--dp-success-color: #76d275;
	--dp-success-color-disabled: #a3d9b1;
	--dp-icon-color: #959595;
	--dp-danger-color: #ff6f60;
	--dp-highlight-color: rgba(25, 118, 210, 0.1);
}
</style>
