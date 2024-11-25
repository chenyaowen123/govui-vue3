<template>
	<demo-container class="gov-demo-cascader">
		<gov-cascader-panel
			:options="options"
			style="height: 240px"
			v-model="values"
		/>
		<template #console>
			{{ values }}
		</template>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
import options from "./data.js";

const values = ref(["community", "administration", "community_manager"]);
</script>
