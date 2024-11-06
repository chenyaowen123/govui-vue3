<template>
	<demo-container>
		<div>
			<gov-radio-group button v-model="size">
				<gov-radio value="large">大尺寸</gov-radio>
				<gov-radio value="default">默认尺寸</gov-radio>
				<gov-radio value="small">小尺寸</gov-radio>
			</gov-radio-group>
			&nbsp;
			<gov-button @click="active === 3 ? (active = 1) : active++">
				下一步
			</gov-button>
		</div>
		<hr />
		<gov-steps :active="active" :size="size">
			<gov-step title="步骤一" description="第一个步骤很重要" />
			<gov-step title="步骤二" description="第二个步骤很重要" />
			<gov-step title="步骤三" description="第三个步骤很重要" />
		</gov-steps>
		<template #console>
			active: {{ active }}<br />
			size: {{ size }}
		</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const active = ref(1);
const size = ref("default");
</script>

<style lang="scss"></style>
