<template>
	<demo-container>
		<gov-popconfirm
			placement="right"
			confirmButtonText="是的，确定"
			cancelButtonText="不是，点击关闭"
			confirmButtonType="primary"
			cancelButtonType="default"
			@cancel="handleCancel"
			@confirm="handleConfirm"
		>
			<div>下图是本站LOGO吗？</div>
			<img src="/logo.png" width="200" />
			<template #reference>
				<gov-button icon="mouse">点击触发</gov-button>
			</template>
		</gov-popconfirm>
	</demo-container>
</template>

<script setup>
import { GovMessage } from "@/index.js";
const handleCancel = () => {
	GovMessage("点击了cancel");
};

const handleConfirm = () => {
	GovMessage("点击了confirm");
};
</script>
