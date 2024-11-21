<template>
	<demo-container>
		<gov-steps :active="active">
			<gov-step title="步骤一" description="">
				<template #icon="{ index }">{{ index }}</template>
				<template #title>自定义标题</template>
				<template #description="{ index, status }">
					<i>第{{ index }}个，状态{{ status }}</i>
				</template>
			</gov-step>
			<gov-step title="步骤二" description="第二个步骤很重要" />
			<gov-step title="步骤三" description="第三个步骤很重要" />
		</gov-steps>
		<br />
		<gov-button @click="active === 3 ? (active = 1) : active++">
			下一步
		</gov-button>
		<template #console>active: {{ active }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const active = ref(2);
</script>
