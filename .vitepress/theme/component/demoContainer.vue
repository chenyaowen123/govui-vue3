<template>
	<div class="demo-container" :class="[{ 'is-transparent': transparent }]">
		<div class="vp-raw">
			<slot />
		</div>
		<div class="language-js" v-if="$slots.console">
			<div class="right">控制台</div>
			<pre><code><slot name="console" /></code></pre>
		</div>
	</div>
</template>

<script setup>
defineProps({
	transparent: Boolean,
});
</script>

<style lang="scss" scoped>
.demo-container {
	font-size: 14px;
	&.is-transparent {
		background: url("./transparent.jpg");
		background-repeat: repeat;
		background-attachment: fixed;
	}
	border: 1px solid var(--vp-c-divider);
	padding: 15px;
	border-radius: 5px;
	position: relative;
	.language-js {
		margin: 16px 0 0;
		font-size: 14px;
		.right {
			position: absolute;
			right: 10px;
			top: 5px;
			font-size: 12px;
			color: #999;
		}
	}
	.vp-raw {
		:deep(hr) {
			box-sizing: border-box;
			margin: 16px 0;
			border: none;
			border-top: 1px solid var(--vp-c-divider);
		}
	}
}
</style>
