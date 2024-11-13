<template>
	<demo-container class="gov-demo-usercard">
		<gov-usercard
			name="陈某某"
			qrcode="https://www.baidu.com/"
			avatar="/usercard.jpg"
			place="XXX社区"
			job="某某某文员"
			nums="922876444732219273"
			expiration="2020年12月1日 ~ 2030年12月1日"
		>
			<template #header>
				<div class="custom-header">
					<gov-danghui width="40" type="yellow" />
					<span>XXX党支部</span>
				</div>
			</template>
		</gov-usercard>
	</demo-container>
</template>

<script setup></script>

<style lang="scss">
.gov-demo-usercard {
	.custom-header {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-size: 30px;
		gap: 9px;
	}
}
</style>
