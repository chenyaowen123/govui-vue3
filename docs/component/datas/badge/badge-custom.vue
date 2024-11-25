<template>
	<demo-container class="gov-demo-badge">
		<gov-badge value="hot">
			<gov-button>火热</gov-button>
		</gov-badge>
		<gov-badge value="🔥" transparent>
			<gov-button>热度</gov-button>
		</gov-badge>
		<gov-badge value="🌧" transparent>
			<gov-button>雨天</gov-button>
		</gov-badge>
		<gov-badge value="☀️" transparent>
			<gov-button>太阳</gov-button>
		</gov-badge>
		<gov-badge value="🎧" transparent>
			<gov-button>音乐</gov-button>
		</gov-badge>
		<gov-badge value="😋" transparent>
			<gov-button>笑脸</gov-button>
		</gov-badge>
	</demo-container>
</template>

<style lang="scss">
.gov-demo-badge {
	.gov-badge + .gov-badge {
		margin-left: 20px;
	}
}
</style>
