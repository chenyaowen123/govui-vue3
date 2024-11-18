<template>
	<demo-container>
		<gov-qrcode :value="url" color="#ff857b" />
		&nbsp;
		<gov-qrcode :value="url" color="#6ebe37" />
		&nbsp;
		<gov-qrcode :value="url" color="#008bf3" />
		<hr />
		<gov-qrcode
			:value="url"
			color="#ff857b"
			backgroundColor="#f1f1f1"
			:border="false"
		/>
		&nbsp;
		<gov-qrcode
			:value="url"
			color="#6ebe37"
			backgroundColor="#f1f1f1"
			:border="false"
		/>
		&nbsp;
		<gov-qrcode
			:value="url"
			color="#008bf3"
			backgroundColor="#f1f1f1"
			:border="false"
		/>
		<template #console>url: {{ url }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const url = ref("https://www.baidu.com/");
</script>

<style lang="scss"></style>
