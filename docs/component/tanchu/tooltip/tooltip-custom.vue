<template>
	<demo-container>
		<gov-tooltip>
			<gov-button> 鼠标经过查看内容 </gov-button>
			<template #content>
				<div style="font-size: 16px">枫桥夜泊</div>
				<div style="font-size: 14px">
					月落乌啼霜满天，江枫渔火对愁眠。
					<br />
					姑苏城外寒山寺，夜半钟声到客船。
				</div>
			</template>
		</gov-tooltip>
	</demo-container>
</template>

<script setup></script>
