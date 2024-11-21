<template>
	<demo-container>
		<gov-tabs v-model="active">
			<gov-tab-pane name="tab1" label="枫桥夜泊">
				月落乌啼霜满天，江枫渔火对愁眠。<br />
				姑苏城外寒山寺，夜半钟声到客船。
			</gov-tab-pane>
			<gov-tab-pane name="tab2" label="凉州词" disabled>
				黄河远上白云间，一片孤城万仞山。<br />羌笛何须怨杨柳，春风不度玉门关。
			</gov-tab-pane>
			<gov-tab-pane name="tab3" label="早发白帝城">
				朝辞白帝彩云间，千里江陵一日还。<br />两岸猿声啼不住，轻舟已过万重山。
			</gov-tab-pane>
		</gov-tabs>
		<template #console>active:{{ active }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const active = ref("tab2");
</script>
