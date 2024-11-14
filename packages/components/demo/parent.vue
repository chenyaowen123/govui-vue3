<template>
	<div class="parent">
		<child v-if="show"/>
		&nbsp;&nbsp;
		<button @click="show = !show">{{ show ? "隐藏" : "显示" }}</button>
		&nbsp;&nbsp;
		<button @click="emitResetEvent">Reset</button>
	</div>
</template>

<script setup>
import "./a.scss";
import { ref, provide } from "vue";
import { listenerManager, useListenerManager } from "./listenerManager";
import child from "./child.vue";

const show = ref(true); // 切换显示隐藏查看是否自动清理了

provide("parentComponent", {
	on(event, callback) {
		listenerManager.on(event, callback);
		useListenerManager(); // onUnmounted 被应该于子组件
	},
	off(event, callback) {
		listenerManager.off(event, callback);
	},
	emit(event, payload) {
		listenerManager.emit(event, payload);
	},
});

// 触发重置事件
const emitResetEvent = () => {
	listenerManager.emit("reset", "Form is reset");
};
</script>

<style lang="scss">
@use "./parent.scss";
</style>
