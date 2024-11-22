<template>
	<demo-container>
		<gov-popconfirm
			title="这是一段内容确定删除吗？"
			icon="info"
			iconColor="red"
			placement="right"
		>
			<template #reference>
				<gov-button icon="delete">点击删除</gov-button>
			</template>
		</gov-popconfirm>
	</demo-container>
</template>
