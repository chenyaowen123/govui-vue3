<template>
	<div class="font-line-height">
		<div class="font-line-height-left">GovUI</div>
		<div class="font-line-height-font">font-size</div>
		<div class="font-line-height-line">line-height</div>
	</div>
</template>

<style lang="scss" scoped>
.font-line-height {
	height: 90px;
	width: 460px;
	position: relative;
	text-align: center;
	&-left {
		width: 200px;
		height: 100%;
		line-height: 90px;
		position: absolute;
		left: 0;
		top: 0;
		font-size: 60px;
		background: var(--vp-c-brand-1);
		color: #fff;
	}
	&-font {
		box-sizing: border-box;
		width: 130px;
		height: 60px;
		line-height: 60px;
		position: absolute;
		left: 175px;
		top: 15px;
		font-size: 14px;
		border-top: 1px solid var(--gov-success);
		border-bottom: 1px solid var(--gov-success);
		&::after {
			display: block;
			content: "";
			width: 0px;
			height: 100%;
			position: absolute;
			top: 0;
			right: 50%;
			border-right: 1px dashed var(--gov-success);
		}
	}
	&-line {
		box-sizing: border-box;
		width: 260px;
		height: 100%;
		padding-left: 100px;
		line-height: 90px;
		position: absolute;
		left: 200px;
		top: 0;
		font-size: 14px;
		border-top: 1px solid var(--gov-success);
		border-bottom: 1px solid var(--gov-success);
		&::after {
			display: block;
			content: "";
			width: 0px;
			height: 100%;
			position: absolute;
			top: 0;
			right: 88px;
			border-right: 1px dashed var(--gov-success);
		}
	}
}
</style>
