<template>
	<div
		v-show="visible"
		class="gov-tab-pane"
		:class="[{ 'is-disabled': disabled }]"
	>
		<slot />
	</div>
</template>

<script setup>
import { inject, computed } from "vue";
defineOptions({
	name: "GovTabPane",
});

const props = defineProps({
	name: String,
	label: String,
	disabled: Boolean,
});

const govTabs = inject("govTabs", null);

govTabs?.addTab?.({ ...props });

const visible = computed(() => {
	return props.name == govTabs?.active;
});
</script>

<style lang="scss"></style>
