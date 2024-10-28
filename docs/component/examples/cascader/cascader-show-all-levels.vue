<template>
	<demo-container class="gov-demo-cascader">
		<gov-cascader
			v-model="values"
			:options="options"
			:showAllLevels="false"
		/>
		<template #console>
			{{ values }}
		</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
import options from "./data.js";

const values = ref(["zujian", "form", "input-number"]);
</script>

<style lang="scss"></style>
