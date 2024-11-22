<template>
	<demo-container>
		<!-- 控制器 -->
		<gov-radio-group v-model="placement">
			<gov-radio label="top" value="top" />
			<gov-radio label="top-start" value="top-start" />
			<gov-radio label="top-end" value="top-end" />
			<gov-radio label="right" value="right" />
			<gov-radio label="right-start" value="right-start" />
			<gov-radio label="right-end" value="right-end" />
			<gov-radio label="bottom" value="bottom" />
			<gov-radio label="bottom-start" value="bottom-start" />
			<gov-radio label="bottom-end" value="bottom-end" />
			<gov-radio label="left" value="left" />
			<gov-radio label="left-start" value="left-start" />
			<gov-radio label="left-end" value="left-end" />
		</gov-radio-group>
		<hr />
		<!-- popper弹窗 -->
		<gov-popper
			v-model="visible"
			title="标题"
			content="存在即合理，一切事物的存在都有其独特的价值。"
			:placement="placement"
		>
			<template #reference>
				<gov-button @click="visible = !visible">点击切换</gov-button>
			</template>
		</gov-popper>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const placement = ref("top");
const visible = ref(false);
</script>
