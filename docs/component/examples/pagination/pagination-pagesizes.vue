<template>
	<demo-container>
		<gov-pagination
			v-model="currentPage"
			v-model:page-size="pageSize"
			:total="total"
			:page-sizes="pageSizes"
		/>
		<template #console>
			pageSize: {{ pageSize }} <br />
			pageSizes: {{ pageSizes }} <br />
			currentPage: {{ currentPage }} <br />
			total: {{ total }} <br />
		</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const pageSize = ref(20);
const pageSizes = ref([20, 40, 60]);
const currentPage = ref(1);
const total = ref(100);
</script>

<style lang="scss"></style>
