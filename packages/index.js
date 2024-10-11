import button from "./components/button/button.vue";
import row from "./components/grid/row.vue";
import col from "./components/grid/col.vue";

// 导出所有组件
const components = {
	button,
	row,
	col,
};

// 提供一个全局安装方法
const install = (Vue, options = { prefix: "Gov" }) => {
	Object.keys(components).forEach((name) => {
		Vue.component(options.prefix + name, components[name]);
	});
};

export default {
	install,
	...components,
};

// // 用户项目中的使用方式

// // 全局安装
// import Vue from 'vue';
// import GovUI from 'gov-ui'; // 假设您的库名为gov-ui
// Vue.use(GovUI, { prefix: "Gov" });

// // 按需引入（注意：这里不需要Vue.use，直接导入并在组件中注册）
// // 在Vue 3的<script setup>中
// <template>
//   <GovButton>Click me</GovButton>
// </template>
// <script setup>
// import { Button as GovButton } from 'gov-ui'; // 使用别名来匹配模板中的标签名
// </script>

// // 或者在Vue 3的传统<script>中
// <template>
//   <gov-button>Click me</gov-button> <!-- 注意这里使用了小写gov-button，因为全局注册时加了前缀 -->
// </template>
// <script>
// import { Button as GovButton } from 'gov-ui'; // 同样使用别名，但在components选项中注册
// export default {
//   components: {
//     GovButton, // 这里使用了别名来注册组件
//   },
// };
// </script>
