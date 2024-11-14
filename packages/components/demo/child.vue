<template>
	<div>子组件内容</div>
</template>

<script setup>
import { inject } from "vue";
const govForm = inject("parentComponent", null);
govForm?.on("reset", (payload) => {
	console.log("子组件监听到了：", payload);
});
</script>
