<script setup>
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
</script>

<template>
	<Layout>
		<template #home-hero-image>
			<img src="logo.png" style="position: absolute; z-index: 999" />
		</template>
	</Layout>
</template>
