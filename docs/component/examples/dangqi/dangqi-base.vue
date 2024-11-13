<template>
	<demo-container class="gov-demo-avatar">
		<gov-input-number
			v-model="width"
			:step="50"
			:min="100"
			:max="600"
			suffix="px"
			controls
		/>
		<hr />
		<gov-dangqi :width="width" />
		<template #console> 宽度:{{ width }}px </template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const width = ref(200);
</script>

<style lang="scss"></style>
