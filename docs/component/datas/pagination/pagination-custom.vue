<template>
	<demo-container>
		<gov-pagination v-model="currentPage" :total="total">
			<template #prev>上一页</template>
			<template #next>下一页</template>
		</gov-pagination>
		<template #console>
			currentPage: {{ currentPage }} <br />
			total: {{ total }} <br />
		</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const currentPage = ref(1);
const total = ref(100);
</script>
