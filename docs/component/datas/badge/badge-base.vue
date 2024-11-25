<template>
	<demo-container class="gov-demo-badge">
		<gov-badge :value="value">
			<gov-button>标记</gov-button>
		</gov-badge>
		<gov-badge :value="value" type="primary">
			<gov-button>标记</gov-button>
		</gov-badge>
		<gov-badge :value="value" type="success">
			<gov-button>标记</gov-button>
		</gov-badge>
		<gov-badge :value="value" type="info">
			<gov-button>标记</gov-button>
		</gov-badge>
		<gov-badge :value="value" type="warning">
			<gov-button>标记</gov-button>
		</gov-badge>
		<gov-badge :value="value" type="danger">
			<gov-button>标记</gov-button>
		</gov-badge>
		<template #console>value: {{ value }}</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref(12);
</script>

<style lang="scss">
.gov-demo-badge {
	.gov-badge + .gov-badge {
		margin-left: 20px;
	}
}
</style>
