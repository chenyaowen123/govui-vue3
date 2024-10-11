import GovButton from "./components/button/button.vue";
import GovRow from "./components/grid/row.vue";
import GovCol from "./components/grid/col.vue";

// 导出所有组件
const components = {
	GovButton,
	GovRow,
	GovCol,
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
