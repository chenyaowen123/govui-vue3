<template>
	<demo-container>
		<gov-input-number
			v-model="value"
			:step="10"
			:min="0"
			:max="100"
			suffix="%"
			controls
		/>
		<hr />
		<gov-progress v-model="value">
			<template #default="{ value }">
				{{ value === 100 ? "已完成" : "剩余" + (100 - value) + "%" }}
			</template>
		</gov-progress>
		<hr />
		<gov-progress v-model="value" type="circle">
			<template #default="{ value }">
				<div>
					<i style="font-size: 20px">{{
						value == 100 ? "✓" : value + "%"
					}}</i>
					<div>整体进度</div>
				</div>
			</template>
		</gov-progress>
		<template #console>value: {{ value }}%</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref(80);
</script>

<style lang="scss"></style>
