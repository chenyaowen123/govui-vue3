<template>
	<demo-container>
		<gov-ellipsis maxLines="2">
			{{ content }}
		</gov-ellipsis>
	</demo-container>
</template>

<script setup>
const content = Array.from({ length: 20 }, () => "鼠标点击文本查看").join("；");
</script>

<style lang="scss"></style>
