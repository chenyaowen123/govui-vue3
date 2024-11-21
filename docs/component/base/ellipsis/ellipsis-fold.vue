<template>
	<demo-container>
		<gov-ellipsis fold> {{ content }}</gov-ellipsis>
	</demo-container>
</template>

<script setup>
const content = Array.from(
	{ length: 20 },
	() => "文字是人类用符号记录表达信息以传之久远的方式和工具，",
).join("");
</script>
