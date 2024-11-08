<template>
	<demo-container>
		<gov-qrcode :value="url" />
		<template #console>url: {{ url }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const url = ref("https://www.baidu.com/");
</script>

<style lang="scss"></style>
