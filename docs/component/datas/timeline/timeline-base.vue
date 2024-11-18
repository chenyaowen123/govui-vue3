<template>
	<demo-container>
		<gov-timeline>
			<gov-timeline-item
				v-for="(line, index) in timelines"
				:key="index"
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
		content: "项目开始阶段",
		timestamp: "2024-04-15",
	},
	{
		content: "项目第二阶段",
		timestamp: "2024-04-13",
	},
	{
		content: "项目完成阶段",
		timestamp: "2024-04-11",
	},
];
</script>

<style lang="scss"></style>
