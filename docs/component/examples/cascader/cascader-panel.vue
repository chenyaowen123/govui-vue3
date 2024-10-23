<template>
	<demo-container class="gov-demo-cascader">
		<gov-cascader-panel
			:options="options"
			style="height: 240px"
			v-model="values"
		/>
		<div class="language-text">
			<pre><code>{{ values }}</code></pre>
		</div>
	</demo-container>
</template>

<script setup>
import { ref } from "vue";
import options from "./data.js";

const values = ref(["zujian", "form", "input-number"]);
</script>

<style lang="scss"></style>
