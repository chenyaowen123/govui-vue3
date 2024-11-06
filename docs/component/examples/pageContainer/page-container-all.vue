<template>
	<demo-container transparent>
		<gov-page-container title="页面标题" border round>
			<template #before>
				<gov-breadcrumb>
					<gov-breadcrumb-item>
						<a href="/">首页</a>
					</gov-breadcrumb-item>
					<gov-breadcrumb-item>企业列表</gov-breadcrumb-item>
					<gov-breadcrumb-item>企业详情</gov-breadcrumb-item>
				</gov-breadcrumb>
			</template>
			<template #actions>
				<gov-button icon="edit">编辑</gov-button>
			</template>
			这是内容主体部分。
		</gov-page-container>
	</demo-container>
</template>

<script setup></script>

<style lang="scss">
.gov-demo-page-container {
	background: url(./transparent.jpg);
	background-repeat: repeat;
	background-attachment: fixed;
}
</style>
