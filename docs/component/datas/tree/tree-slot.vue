<template>
	<demo-container>
		<gov-tree v-model:expandeds="expandeds" :data="treeData">
			<template #default="{ node }">
				{{ node.desc }}
				<span style="font-size: 12px">(编号id：{{ node.id }})</span>
			</template>
		</gov-tree>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
import treeData from "./treeData.js";
const expandeds = ref([]);
</script>

<style lang="scss"></style>
