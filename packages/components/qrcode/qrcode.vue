<template>
	<div
		class="gov-qrcode"
		:class="{ 'gov-qrcode--border': props.border }"
		:style="`width: ${props.size}px; height: ${props.size}px;`"
	>
		<img :src="qrcode.value" class="gov-qrcode__image" alt="QRCode" />
	</div>
</template>

<script setup>
import { computed } from "vue";
import { useQRCode } from "@vueuse/integrations/useQRCode";

defineOptions({
	name: "GovQrcode",
});

const props = defineProps({
	value: {
		type: String,
		default: "", // 生成的值
	},
	size: {
		type: Number,
		default: 160,
	},
	color: {
		type: String,
		default: "#000", // 生成颜色，必须是16进制
	},
	backgroundColor: {
		type: String,
		default: "#FFF", // 背景色
	},
	border: {
		type: Boolean,
		default: true, // 是否有边框
	},
	scale: {
		type: Number,
		default: 8, // 比例因子
	},
	errorLevel: {
		type: String,
		default: "H",
		validator: (value) => ["L", "M", "Q", "H"].includes(value), // 识错级别
	},
});

const qrcode = computed(() => {
	return useQRCode(props.value, {
		errorCorrectionLevel: props.errorLevel,
		type: "image/png",
		quality: 1,
		margin: 3,
		scale: props.scale,
		color: {
			dark: props.color,
			light: props.backgroundColor,
		},
	});
});
</script>

<style lang="scss">
.gov-qrcode {
	display: inline-block;
	overflow: hidden;

	&__image {
		width: 100%;
		height: 100%;
	}

	&--border {
		border-radius: 4px;
		border: 1px solid var(--gov-border-color-5);
	}
}
</style>
