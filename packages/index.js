import row from "./components/grid/row.vue";
import col from "./components/grid/col.vue";

import aside from "./components/container/aside.vue";
import container from "./components/container/container.vue";
import footer from "./components/container/footer.vue";
import header from "./components/container/header.vue";
import main from "./components/container/main.vue";

import icon from "./components/icon/icon.vue";
import buttonGroup from "./components/button/button-group.vue";
import button from "./components/button/button.vue";
import link from "./components/link/link.vue";

import form from "./components/form/form.vue";
import formItem from "./components/form/form-item.vue";
import radio from "./components/radio/radio.vue";
import radioGroup from "./components/radio/radio-group.vue";
import checkbox from "./components/checkbox/checkbox.vue";
import checkboxGroup from "./components/checkbox/checkbox-group.vue";

import popper from "./components/popper/popper.vue";
import popconfirm from "./components/popconfirm/popconfirm.vue";

import dialog from "./components/dialog/dialog.vue";
import GovMessageBox from "./components/messagebox/message-box.js";

// 导出所有组件
const components = {
	row,
	col,

	aside,
	container,
	footer,
	header,
	main,

	icon,
	buttonGroup,
	button,
	link,

	form,
	formItem,
	radio,
	radioGroup,
	checkbox,
	checkboxGroup,

	popper,
	popconfirm,

	dialog,
};

// 提供一个全局安装方法
const install = (Vue) => {
	Object.keys(components).forEach((name) => {
		Vue.component(components[name].name, components[name]);
	});
};

// 引入安装
if (typeof window !== "undefined" && window.Vue) {
	install(window.Vue);
}

export default {
	install,
};

export { GovMessageBox };
