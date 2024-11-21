<template>
	<demo-container>
		<gov-tree
			v-model:expandeds="expandeds"
			:data="treeData"
			foldIcon="folder"
			unfoldIcon="folder-opened"
			nodeIcon="document"
		/>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
import treeData from "./treeData.js";
const expandeds = ref(["1", "2", "1-1", "1-2", "2-2"]);
</script>
