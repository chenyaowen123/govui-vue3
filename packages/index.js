import button from "./components/button/button.vue";

import row from "./components/grid/row.vue";
import col from "./components/grid/col.vue";

import aside from "./components/container/aside.vue";
import container from "./components/container/container.vue";
import footer from "./components/container/footer.vue";
import header from "./components/container/header.vue";
import main from "./components/container/main.vue";

import icon from "./components/icon/icon.vue";

// 导出所有组件
const components = {
	button,

	row,
	col,

	aside,
	container,
	footer,
	header,
	main,

	icon,
};

// 提供一个全局安装方法
const install = (Vue) => {
	Object.keys(components).forEach((name) => {
		Vue.component(components[name].name, components[name]);
	});
};

export default {
	install,
	...components,
};
