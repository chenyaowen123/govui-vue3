<template>
	<demo-container>
		<gov-pagination plain v-model="currentPage" :total="total" />
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
