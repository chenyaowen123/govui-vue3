<template>
	<div
		class="color-card"
		:style="{ backgroundColor: color }"
		:class="{ blackText }"
	>
		<div class="main-color">
			<div class="color-title">{{ name }}</div>
			<div class="color-value">{{ color }}</div>
		</div>
		<div class="color-list">
			<div
				v-for="val in 4"
				:key="val"
				:style="{
					backgroundColor: color,
					opacity: 1 - 0.2 * val,
				}"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "ColorCard",
	props: {
		name: {
			type: String,
			required: true,
		},
		blackText: {
			type: Boolean,
			default: false,
		},
		color: {
			type: String,
			required: true,
		},
		list: {
			type: Array,
			default: () => [],
		},
	},
};
</script>

<style lang="scss" scoped>
.color-card {
	display: inline-block;
	height: 110px;
	width: 100%;
	max-width: 290px;
	color: #fff;
	border-radius: 4px;
	overflow: hidden;
	& + .color-card {
		margin-left: 10px;
	}
	&.blackText {
		color: #303133;
	}
	.main-color {
		width: 100%;
		height: 70px;
		padding: 15px;
		box-sizing: border-box;
		.color-title {
			font-size: 16px;
			line-height: 16px;
		}
		.color-value {
			font-size: 14px;
		}
	}

	.color-list {
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fff;
		div {
			flex: 1;
			height: 100%;
		}
	}
}
</style>
