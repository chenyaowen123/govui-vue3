<template>
	<div
		class="gov-step"
		:class="[
			`gov-step--size-${size}`,
			`is-${internalStatus}`,
			{ 'is-center': isCenter },
		]"
	>
		<div class="gov-step__head">
			<div class="gov-step__head-line"></div>
			<div class="gov-step__head-icon">
				<slot name="icon" :index="innerNumber" :status="internalStatus">
					<GovIcon v-if="icon" :name="icon" />
					<div v-else class="gov-step__head-icon-inner">
						{{ innerNumber }}
					</div>
				</slot>
			</div>
		</div>
		<div class="gov-step__main">
			<div class="gov-step__main-title">
				<slot
					name="title"
					:index="innerNumber"
					:status="internalStatus"
				>
					{{ title }}
				</slot>
			</div>
			<div
				v-if="description || $slots.description"
				class="gov-step__main-description"
			>
				<slot
					name="description"
					:index="innerNumber"
					:status="internalStatus"
				>
					{{ description }}
				</slot>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, inject } from "vue";
import GovIcon from "../icon/icon.vue";

defineOptions({
	name: "GovStep",
});

defineProps({
	title: String,
	icon: String,
	description: String,
});

const govSteps = inject("govSteps", null);

const stepId = Symbol(); // 唯一id
govSteps?.addSteps?.(stepId); // 加入父级

const isCenter = computed(() => govSteps?.center);
const steps = computed(() => govSteps?.steps || []);
const size = computed(() => govSteps?.size || "default");
const innerNumber = computed(() => steps.value.indexOf(stepId) + 1);

// 判断是否为 当前、完成、等待
const internalStatus = computed(() => {
	let active = govSteps?.active || 0;
	if (innerNumber.value == active) {
		return "active";
	} else if (innerNumber.value < active) {
		return "finish";
	} else {
		return "wait";
	}
});
</script>

<style lang="scss">

.gov-step {
	flex: 1;
	color: var(--gov-text-color);
	&__head {
		position: relative;
		width: 100%;
		&-line {
			width: 100%;
			height: 2px;
			position: absolute;
			right: 100%;
			z-index: 0;
			top: calc(50% - 1px);
			background-color: var(--gov-border-color);
		}
		&-icon {
			position: relative;
			left: 0;
			z-index: 1;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			font-size: 16px;
			width: 30px;
			height: 30px;
			background: #fff;
			border: 1px solid var(--gov-border-color);
			border-radius: 50%;
		}
	}
	&:first-child {
		.gov-step__head-line {
			display: none;
		}
	}

	&__main {
		white-space: normal;
		text-align: left;
		&-title {
			font-size: 16px;
			line-height: 30px;
			margin-top: 5px;
			color: var(--gov-text-color);
		}
		&-description {
			font-size: 12px;
			line-height: 20px;
			color: var(--gov-text-color-3);
		}
	}
	// 大小
	&,
	&--size-default {
		.gov-step__head-icon {
			font-size: 16px;
			width: 30px;
			height: 30px;
		}
	}
	&--size-large {
		.gov-step__head-icon {
			font-size: 18px;
			width: 36px;
			height: 36px;
		}
	}
	&--size-small {
		.gov-step__head-icon {
			font-size: 14px;
			width: 24px;
			height: 24px;
		}
	}

	// 完成
	&.is-finish {
		.gov-step__head {
			&-line {
				background-color: var(--gov-success);
			}
			&-icon {
				border-color: var(--gov-success);
				color: var(--gov-success);
				&-inner {
					border-color: var(--gov-success);
				}
			}
		}
		.gov-step__main {
			&-title {
				color: var(--gov-success);
			}
			&-description {
				color: var(--gov-success-3);
			}
		}
	}

	// 当前
	&.is-active {
		.gov-step__head {
			&-line {
				background: linear-gradient(
					to right,
					var(--gov-success),
					var(--gov-primary)
				);
			}
			&-icon {
				border-color: var(--gov-primary);
				color: var(--gov-primary);
				&-inner {
					border-color: var(--gov-primary);
				}
			}
		}
		.gov-step__main {
			&-title {
				color: var(--gov-primary);
			}
			&-description {
				color: var(--gov-primary-3);
			}
		}
	}

	// 等待
	&.is-wait {
		.gov-step__head {
			&-line {
				background-color: var(--gov-border-color);
			}
			&-icon {
				border-color: var(--gov-border-color);
				color: var(--gov-text-color);
				&-inner {
					border-color: var(--gov-border-color);
				}
			}
		}
		.gov-step__main {
			&-title {
				color: var(--gov-text-color);
			}
			&-description {
				color: var(--gov-text-color-3);
			}
		}
	}

	// 居中布局
	&.is-center {
		.gov-step__head {
			&-line {
				right: 50%;
			}
			&-icon {
				left: 50%;
				transform: translate(-50%, 0);
			}
		}
		.gov-step__main {
			text-align: center;
		}
	}
}
</style>
