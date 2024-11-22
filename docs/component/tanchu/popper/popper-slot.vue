<template>
	<demo-container>
		<gov-popper
			v-model="visible"
			title="GovUI是专为政府定制的"
			placement="right"
			width="200px"
		>
			<template #reference>
				<gov-button @click="visible = !visible">点击弹出</gov-button>
			</template>
			<img src="/logo.png" style="width: 100%" />
			<br />
			<div style="text-align: center">
				<gov-button size="small" @click="visible = false">
					关闭
				</gov-button>
				<gov-button
					size="small"
					@click="visible = false"
					type="primary"
				>
					确定
				</gov-button>
			</div>
		</gov-popper>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const visible = ref(false);
</script>
