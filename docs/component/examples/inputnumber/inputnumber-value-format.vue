<template>
	<demo-container class="gov-demo-inputnumber">
		<gov-input-number v-model="value"  format="$ 0,0" valueFormat />
		<template #console> {{ value }} // 双向绑定都是格式化后的值 </template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("$ 314,159");
</script>

<style lang="scss"></style>
