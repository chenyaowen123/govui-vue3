<template>
	<div class="color-card" :style="{ backgroundColor: color }">
		<div class="main-color">
			<div class="color-value">{{ color }}</div>
		</div>
		<ul class="color-list" v-if="list.length">
			<li
				v-for="(value, index) in list"
				:key="index"
				:style="{ backgroundColor: value }"
			></li>
		</ul>
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
	height: 110px;
	width: 100%;
	max-width: 290px;
	color: #fff;
	border-radius: 4px;
	.main-color {
		width: 100%;
		height: 70px;
		padding: 20px;
		box-sizing: border-box;
	}

	.color-list {
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		li {
			flex: 1;
			height: 100%;
		}
	}
}
</style>
