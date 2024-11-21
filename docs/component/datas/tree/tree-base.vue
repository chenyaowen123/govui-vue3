<template>
	<demo-container>
		<gov-tree v-model:expandeds="expandeds" :data="treeData" />
		<template #console>expandeds: {{ expandeds }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
import treeData from "./treeData.js";
const expandeds = ref(["1", "2"]);
</script>
