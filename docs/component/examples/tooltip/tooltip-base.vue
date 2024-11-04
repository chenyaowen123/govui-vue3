<template>
	<demo-container class="gov-demo-tooltip">
		<gov-tooltip content="Top start 提示文字" placement="top-start">
			<gov-button>居上左侧</gov-button>
		</gov-tooltip>
		<span class="jiange"></span>
		<gov-tooltip content="Top 提示文字" placement="top">
			<gov-button>居上中间</gov-button>
		</gov-tooltip>
		<span class="jiange"></span>
		<gov-tooltip content="Top start 提示文字" placement="top-end">
			<gov-button>居上右侧</gov-button>
		</gov-tooltip>
		<hr />
		<gov-tooltip content="Right start 提示文字" placement="right-start">
			<gov-button>居右左侧</gov-button>
		</gov-tooltip>
		<span class="jiange"></span>
		<gov-tooltip content="Right 提示文字" placement="right">
			<gov-button>居右中间</gov-button>
		</gov-tooltip>
		<span class="jiange"></span>
		<gov-tooltip content="Right start 提示文字" placement="right-end">
			<gov-button>居右右侧</gov-button>
		</gov-tooltip>
		<hr />
		<gov-tooltip content="Bottom start 提示文字" placement="bottom-start">
			<gov-button>居下左侧</gov-button>
		</gov-tooltip>
		<span class="jiange"></span>
		<gov-tooltip content="Bottom 提示文字" placement="bottom">
			<gov-button>居下中间</gov-button>
		</gov-tooltip>
		<span class="jiange"></span>
		<gov-tooltip content="Bottom start 提示文字" placement="bottom-end">
			<gov-button>居下右侧</gov-button>
		</gov-tooltip>
		<hr />
		<gov-tooltip content="Left start 提示文字" placement="left-start">
			<gov-button>居左左侧</gov-button>
		</gov-tooltip>
		<span class="jiange"></span>
		<gov-tooltip content="Left 提示文字" placement="left">
			<gov-button>居左中间</gov-button>
		</gov-tooltip>
		<span class="jiange"></span>
		<gov-tooltip content="Left start 提示文字" placement="left-end">
			<gov-button>居左右侧</gov-button>
		</gov-tooltip>
		<hr />
	</demo-container>
</template>

<script setup></script>

<style lang="scss">
.gov-demo-tooltip {
	.jiange {
		margin-right: 20px;
	}
}
</style>
