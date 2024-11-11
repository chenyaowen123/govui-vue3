<template>
	<demo-container class="gov-demo-badge">
		<gov-badge value="12" isDot>
			<gov-button>标记</gov-button>
		</gov-badge>
		<gov-badge value="12" isDot type="primary">
			<gov-button>标记</gov-button>
		</gov-badge>
		<gov-badge value="12" isDot type="success">
			<gov-button>标记</gov-button>
		</gov-badge>
		<gov-badge value="12" isDot type="info">
			<gov-button>标记</gov-button>
		</gov-badge>
		<gov-badge value="12" isDot type="warning">
			<gov-button>标记</gov-button>
		</gov-badge>
		<gov-badge value="12" isDot type="danger">
			<gov-button>标记</gov-button>
		</gov-badge>
	</demo-container>
</template>

<script setup></script>

<style lang="scss">
.gov-demo-badge {
	.gov-badge + .gov-badge {
		margin-left: 20px;
	}
}
</style>
