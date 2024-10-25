<template>
	<div class="demo-container">
		<slot />
		<div class="language-js" v-if="$slots.console">
			<div class="right">控制台</div>
			<pre><code><slot name="console" /></code></pre>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.demo-container {
	border: 1px solid var(--vp-c-divider);
	padding: 15px;
	border-radius: 5px;
	position: relative;
	:deep(div[class*="language-"]) {
		margin: 16px 0 0;
		font-size: 14px;
	}
	.right {
		position: absolute;
		right: 10px;
		top: 5px;
		font-size: 12px;
		color: #999;
	}
}
</style>
