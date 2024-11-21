<template>
	<demo-container class="gov-demo-inputauto">
		<gov-input-auto v-model="value" :fetch="querySearch">
			<template #default="{ item }">
				<div>大写：{{ item.value.toUpperCase() }}</div>
				<div style="font-size: 12px; color: #666">
					正常：<i>{{ item.value }}</i>
				</div>
			</template>
		</gov-input-auto>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
import { fruitInfos } from "./data.js";

const value = ref("");
const querySearch = (str) => {
	return fruitInfos.filter((el) =>
		el.value.toLowerCase().includes(str.toLowerCase()),
	);
};
</script>
