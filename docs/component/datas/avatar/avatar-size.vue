<template>
	<demo-container class="gov-demo-avatar">
		<gov-input-number
			v-model="size"
			:step="10"
			:min="30"
			:max="200"
			suffix="px"
			controls
		/>
		<hr />
		<gov-avatar :size="size" icon="user" />
		<template #console> 头像大小:{{ size }}px </template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const size = ref(100);
</script>
