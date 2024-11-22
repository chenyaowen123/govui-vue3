<template>
	<demo-container>
		<gov-popper
			v-model="visible"
			title="标题"
			content="存在即合理，一切事物的存在都有其独特的价值。"
			placement="top"
		>
			<template #reference>
				<gov-button @click="visible = !visible">点击切换</gov-button>
			</template>
		</gov-popper>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const visible = ref(false);
</script>
