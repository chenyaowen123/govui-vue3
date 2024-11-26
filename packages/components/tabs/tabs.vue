<template>
	<div class="gov-tabs">
		<div class="gov-tabs__nav">
			<div
				v-for="(tab, index) in tabs"
				:key="tab.name"
				class="gov-tabs__nav-item"
				:class="{
					'is-active': active === tab.name,
					'is-disabled': tab.disabled,
				}"
				@click="switchTab(tab)"
			>
				<slot
					name="nav"
					:tab="tab"
					:index="index"
					:isActive="active === tab.name"
				>
					{{ tab.label }}
				</slot>
			</div>
		</div>
		<div class="gov-tabs__content">
			<div class="gov-tabs__content-wrap">
				<transition-group name="tabs-pane-fade">
					<slot />
				</transition-group>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, provide, reactive } from "vue";

defineOptions({
	name: "GovTabs",
});

const props = defineProps({
	modelValue: [String, Number],
	border: {
		type: Boolean,
		default: true,
	},
	round: {
		type: Boolean,
		default: true,
	},
});

const active = ref(props.modelValue);
const tabs = ref([]);

// 增加tab
const addTab = (item) => {
	if (!tabs.value.map((i) => i.name).includes(item.name)) {
		tabs.value.push(item);
	}
};

// 切换tab
const emit = defineEmits(["update:modelValue", "switch"]);
const switchTab = (tab) => {
	if (!tab.disabled) {
		active.value = tab.name;
		emit("update:modelValue", tab.name);
		emit("switch", tab.name);
	}
};

provide(
	"govTabs",
	reactive({
		active,
		addTab,
	}),
);
</script>
