<template>
	<demo-container class="demo-gov-icons">
		<div class="list">
			<div class="box" v-for="icon in iconList" :key="icon">
				<gov-icon :name="icon" />
				<div>{{ icon }}</div>
			</div>
		</div>
	</demo-container>
</template>

<script setup>
import iconList from "./icon.js";
</script>
