<template>
	<demo-container class="gov-demo-inputnumber">
		<gov-input-number
			v-model="value"
			format="0,0.00"
			prefix="￥"
			suffix="RMB"
		>
			<template #addonBefore>💰</template>
			<template #addonAfter>🔥</template>
		</gov-input-number>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref(9999);
</script>
