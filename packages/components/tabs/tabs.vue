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

<style lang="scss">
@use "@/styles/theme.scss" as *;
.gov-tabs {
	background: #fff;
	border: 1px solid var(--gov-border-color);
	border-radius: var(--gov-border-radius-base);

	&__nav {
		display: flex;
		border-bottom: 1px solid var(--gov-border-color-5);
	}
	&__nav-item {
		padding: 10px 20px;
		cursor: pointer;
		border: none;
		background: none;
		color: var(--gov-text-color);
		border-right: 1px solid var(--gov-border-color-5);
		transition: border-color 0.3s;
		font-size: 16px;
		position: relative;
		&.is-active {
			color: var(--gov-primary);
			&::before {
				content: "";
				height: 0;
				position: absolute;
				bottom: -1px;
				left: 0;
				right: 0;
				border-bottom: 1px solid var(--gov-primary);
			}
		}
		&.is-disabled {
			color: var(--gov-text-color-5);
			cursor: not-allowed;
			&.is-active {
				color: var(--gov-primary-5);
				&::before {
					content: "";
					height: 0;
					position: absolute;
					bottom: -1px;
					left: 0;
					right: 0;
					border-bottom: 1px solid var(--gov-primary-5);
				}
			}
		}
	}
	&__content {
		overflow: hidden;
		padding: 20px;
		&-wrap {
			display: flex;
			flex-direction: row;
			align-items: center;
		}
	}
}

.tabs-pane-fade-enter-from {
	opacity: 0;
	transform: translateX(30px);
}
.tabs-pane-fade-enter-active {
	transition: all 0.5s ease;
}

.tabs-pane-fade-leave-active {
	transition: all 0;
}
.tabs-pane-fade-leave-to {
	opacity: 0;
}
</style>
