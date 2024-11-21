<template>
	<demo-container>
		生成字符：<gov-input v-model="url" />
		&nbsp;&nbsp;
		<gov-checkbox v-model="bordered">有边框</gov-checkbox>
		<br />
		<br />
		生成大小：<gov-input-number
			v-model="size"
			:step="50"
			:min="100"
			:max="400"
			suffix="px"
			controls
		/>
		<hr />
		<gov-qrcode :value="url" :size="size" :bordered="bordered" />
		<template #console>url: {{ url }}<br />size: {{ size }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const url = ref("https://www.baidu.com/");
const bordered = ref(true);
const size = ref(100);
</script>
