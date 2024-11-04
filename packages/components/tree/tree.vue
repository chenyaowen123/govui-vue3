<template>
	<div class="gov-tree">
		<template v-for="node in data" :key="node.id">
			<div class="gov-tree__node">
				<div
					@click.stop="toggleNode(node)"
					class="gov-tree__label"
					:class="[
						{
							'is-expanded': isExpanded(node),
							'is-animation': Boolean(!unfoldIcon),
						},
					]"
				>
					<span class="gov-tree__icon-box">
						<template v-if="node.children && node.children.length">
							<template v-if="unfoldIcon">
								<GovIcon
									v-if="isExpanded(node)"
									:name="foldIcon"
									size="14"
								/>
								<GovIcon v-else :name="unfoldIcon" size="14" />
							</template>
							<GovIcon v-else :name="foldIcon" size="14" />
						</template>
						<GovIcon
							v-else-if="nodeIcon"
							:name="nodeIcon"
							size="14"
						/>
					</span>
					<div class="gov-tree__slot-box">
						<slot :node="node" :isExpanded="isExpanded(node)">
							{{ node.label }}
						</slot>
					</div>
				</div>
				<ElCollapseTransition>
					<div
						v-show="
							node.children &&
							node.children.length &&
							isExpanded(node)
						"
						class="gov-tree__children"
						:style="{ paddingLeft: paddingLeft }"
					>
						<gov-tree
							:data="node.children"
							:foldIcon="foldIcon"
							:unfoldIcon="unfoldIcon"
							:nodeIcon="nodeIcon"
							:expandeds="expandeds"
							@update:expandeds="handleExpandeds"
						>
							<template
								#default="{ node, isExpanded }"
								v-if="$slots.default"
							>
								<slot :node="node" :isExpanded="isExpanded" />
							</template>
						</gov-tree>
					</div>
				</ElCollapseTransition>
			</div>
		</template>
	</div>
</template>

<script setup>
import GovIcon from "../icon/icon.vue";
import ElCollapseTransition from "../collapse/collapse-transition.vue";

defineOptions({
	name: "GovTree",
});

// 使用 v-model:expandeds 来绑定展开的节点 ID 列表
const props = defineProps({
	data: Array,
	expandeds: Array,
	paddingLeft: {
		type: String,
		default: "20px",
	},
	foldIcon: {
		type: String,
		request: true,
		default: "caret-right", // 折叠时候的icon
	},
	unfoldIcon: String, // 展开时的icon，如果设置以后，则图标旋转消失
	nodeIcon: {
		type: String,
		default: null, // 无子元素节点的icon
	},
});

const emit = defineEmits(["update:expandeds", "toggle", "click"]);

// 是否展开：判断列表是否有当前id
const isExpanded = (node) => {
	return props.expandeds.includes(node.id);
};

// 切换
const toggleNode = (node) => {
	if (node.children && node.children.length) {
		let innerExpandeds = [...props.expandeds];
		if (isExpanded(node)) {
			innerExpandeds = innerExpandeds.filter((id) => id !== node.id);
		} else {
			innerExpandeds.push(node.id);
		}
		emit("update:expandeds", innerExpandeds);
		emit("toggle", innerExpandeds, node);
	}
	emit("click", node);
};

// 更新展开：向上传递
const handleExpandeds = (newExpandeds) => {
	emit("update:expandeds", newExpandeds);
};
</script>

<style lang="scss">
.gov-tree {
	&__node {
		cursor: pointer;
	}

	&__label {
		display: flex;
		align-items: center;
		.gov-icon {
			transform: rotate(0);
			transition: all 0.3s;
		}
		&.is-expanded.is-animation {
			.gov-icon {
				transform: rotate(90deg);
			}
		}
	}
	&__slot-box {
		flex: 1;
	}
	&__icon-box {
		display: inline-block;
		width: 14px;
		text-align: center;
		font-size: 14px;
		margin-right: 4px;
	}

	&__children {
		overflow: hidden;
		padding-left: 20px;
	}
}
</style>
