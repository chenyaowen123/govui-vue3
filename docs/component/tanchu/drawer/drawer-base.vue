<template>
	<demo-container>
		<div>
			<gov-radio-group button v-model="at">
				<gov-radio value="left">left</gov-radio>
				<gov-radio value="right">right</gov-radio>
				<gov-radio value="top">top</gov-radio>
				<gov-radio value="bottom">bottom</gov-radio>
			</gov-radio-group>
			&nbsp;&nbsp;
			<gov-button @click="visible = true">打开</gov-button>
		</div>
		<hr />
		<gov-drawer v-model="visible" :at="at"> 抽屉内容。 </gov-drawer>
		<template #console>
			visible: {{ visible }}<br />
			at: {{ at }}
		</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const at = ref("left");
const visible = ref(false);
</script>

<style lang="scss"></style>
