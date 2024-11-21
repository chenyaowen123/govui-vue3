<template>
	<demo-container>
		<gov-collapse v-model="value" accordion>
			<gov-collapse-item title="枫桥夜泊" name="collapse1">
				月落乌啼霜满天，江枫渔火对愁眠。<br />
				姑苏城外寒山寺，夜半钟声到客船。
			</gov-collapse-item>
			<gov-collapse-item title="凉州词" name="collapse2">
				黄河远上白云间，一片孤城万仞山。<br />
				羌笛何须怨杨柳，春风不度玉门关。
			</gov-collapse-item>
			<gov-collapse-item title="早发白帝城" name="collapse3">
				朝辞白帝彩云间，千里江陵一日还。<br />
				两岸猿声啼不住，轻舟已过万重山。
			</gov-collapse-item>
		</gov-collapse>
		<template #console>value: {{ value }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref(null);
</script>
