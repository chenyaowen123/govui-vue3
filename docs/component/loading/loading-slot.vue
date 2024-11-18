<template>
	<demo-container>
		<div style="padding: 15px 0">
			Control：<gov-switch v-model="loading" />
		</div>
		<gov-loading v-model="loading">
			<gov-blockquote>
				{{ content }}
			</gov-blockquote>
			<template #loading>
				<div class="custom-loading">
					<div class="custom-loading__animation">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div class="custom-loading__text">正在努力狂奔...</div>
			</template>
		</gov-loading>
		<template #console>加载状态：{{ loading }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const loading = ref(true);
const content = Array.from(
	{ length: 20 },
	() => "你也可以自定义一些漂亮的loading，有很多效果很不错。",
).join("");
</script>

<style lang="scss">
@keyframes load {
	0%,
	100% {
		height: 40px;
		margin: 0 3px;
		background: lightgreen;
	}
	50% {
		height: 70px;
		margin: -15px 3px;
		background: lightblue;
	}
}
.custom-loading {
	position: relative;

	&__text {
		padding-top: 20px;
	}

	&__animation {
		width: 80px;
		height: 40px;
		margin: 0 auto;
		span {
			display: inline-block;
			width: 8px;
			height: 100%;
			border-radius: 4px;
			margin: 0 3px;
			background: lightgreen;
			animation: load 1s ease infinite;
			&:nth-child(2) {
				animation-delay: 0.2s;
			}
			&:nth-child(3) {
				animation-delay: 0.4s;
			}
			&:nth-child(4) {
				animation-delay: 0.6s;
			}

			&:nth-child(5) {
				animation-delay: 0.8s;
			}
		}
	}
}
</style>
