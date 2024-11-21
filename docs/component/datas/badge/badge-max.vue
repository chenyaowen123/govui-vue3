<template>
	<demo-container class="gov-demo-badge">
		<gov-badge :value="value" :max="99">
			<gov-button>标记</gov-button>
		</gov-badge>
		<template #console>value: {{ value }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref(1000);
</script>
<style lang="scss">
.gov-demo-badge {
	.gov-badge + .gov-badge {
		margin-left: 20px;
	}
}
</style>
