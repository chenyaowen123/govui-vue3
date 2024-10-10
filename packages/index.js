import Button from "./components/Button/Button.vue";
import Row from "./components/Row/Row.vue";
import Col from "./components/Row/Col.vue";

// 导出所有组件
const components = {
	Button,
	Row,
	Col,
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
