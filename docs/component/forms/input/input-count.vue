<template>
	<demo-container class="gov-demo-input">
		<gov-input v-model="value" count />
		&nbsp;&nbsp;
		<gov-input v-model="value2" count :maxlength="5" />
		&nbsp;&nbsp;
		<gov-input v-model="value3" :maxlength="5" />
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
const value2 = ref("");
const value3 = ref("");
</script>

<style lang="scss"></style>
