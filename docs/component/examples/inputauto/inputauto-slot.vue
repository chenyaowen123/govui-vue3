<template>
	<demo-container class="gov-demo-inputauto">
		<gov-input-auto v-model="value" :fetch="querySearch" clear>
			<template #default="{ item }">
				<div>大写：{{ item.toUpperCase() }}</div>
				<div style="font-size: 12px; color: #666">
					正常：<i>{{ item }}</i>
				</div>
			</template>
		</gov-input-auto>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
import { fruits } from "./data.js";

const value = ref("");
const querySearch = (str) => {
	return fruits.filter((el) => el.toLowerCase().includes(str.toLowerCase()));
};
</script>

<style lang="scss"></style>
