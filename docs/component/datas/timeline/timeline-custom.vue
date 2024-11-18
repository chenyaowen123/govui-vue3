<template>
	<demo-container>
		<gov-timeline>
			<gov-timeline-item
				v-for="(line, index) in timelines"
				:key="index"
				:icon="line.icon"
				:type="line.type"
				:color="line.color"
				:size="line.size"
				:hollow="line.hollow"
				:timestamp="line.timestamp"
			>
				{{ line.content }}
			</gov-timeline-item>
		</gov-timeline>
	</demo-container>
</template>

<script setup>
const timelines = [
	{
		content: "自定义 icon",
		timestamp: "2024-04-12 20:46",
		size: "large",
		type: "primary",
		icon: "s-promotion",
	},
	{
		content: "自定义 color",
		timestamp: "2024-04-03 20:46",
		color: "#0bbd87",
	},
	{
		content: "自定义 size",
		timestamp: "2024-04-03 20:46",
		size: "large",
		hollow: true,
	},
	{
		content: "自定义是否空心 hollow",
		timestamp: "2024-04-03 20:46",
		type: "primary",
		hollow: true,
	},
	{
		content: "默认样式",
		timestamp: "2024-04-03 20:46",
	},
];
</script>

<style lang="scss"></style>
