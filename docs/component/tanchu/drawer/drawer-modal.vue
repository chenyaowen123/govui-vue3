<template>
	<demo-container>
		<div>
			<gov-checkbox v-model="modal"> 是否有遮罩层 </gov-checkbox>
			<gov-checkbox v-model="modalClosable">
				遮罩层点击是否触发关闭
			</gov-checkbox>
			&nbsp;&nbsp;
			<gov-button @click="visible = true">打开</gov-button>
		</div>
		<hr />
		<gov-drawer
			v-model="visible"
			:modal="modal"
			:modalClosable="modalClosable"
		>
			抽屉内容。
		</gov-drawer>
		<template #console>
			visible: {{ visible }}<br />
			modal: {{ modal }}<br />
			modalClosable: {{ modalClosable }}
		</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const visible = ref(false);
const modal = ref(true);
const modalClosable = ref(true);
</script>
