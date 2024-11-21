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
		<gov-danghui :width="width" type="red" />
		<hr />
		<gov-danghui :width="width" type="yellow" />
		<template #console> 宽度:{{ width }}px </template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const width = ref(100);
</script>
