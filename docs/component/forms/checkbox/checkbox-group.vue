<template>
	<demo-container>
		<gov-checkbox
			label="全选"
			:indeterminate="indeterminate"
			v-model="checkedAll"
		/>
		<br />
		<gov-checkbox-group v-model="group">
			<gov-checkbox :value="1" label="选项1" />
			<gov-checkbox :value="2" label="选项2" />
			<gov-checkbox :value="3" label="选项3" />
		</gov-checkbox-group>
	</demo-container>
</template>

<script setup>
import { ref, computed } from "vue";

const group = ref([1, 2]);

const indeterminate = computed(() => {
	return ![0, 3].includes(group.value.length);
});

const checkedAll = computed({
	get() {
		return group.value.length === 3;
	},
	set(val) {
		group.value = val ? [1, 2, 3] : [];
	},
});
</script>
