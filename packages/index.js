import aside from "./components/container/aside.vue";
import container from "./components/container/container.vue";
import footer from "./components/container/footer.vue";
import header from "./components/container/header.vue";
import main from "./components/container/main.vue";

import row from "./components/grid/row.vue";
import col from "./components/grid/col.vue";

import icon from "./components/icon/icon.vue";
import button from "./components/button/button.vue";
import buttonGroup from "./components/button/button-group.vue";
import link from "./components/link/link.vue";
import alert from "./components/alert/alert.vue";

import form from "./components/form/form.vue";
import formItem from "./components/form/form-item.vue";
import radio from "./components/radio/radio.vue";
import radioGroup from "./components/radio/radio-group.vue";
import checkbox from "./components/checkbox/checkbox.vue";
import checkboxGroup from "./components/checkbox/checkbox-group.vue";
import datepicker from "./components/datepicker/datepicker.vue";

import popper from "./components/popper/popper.vue";
import popconfirm from "./components/popconfirm/popconfirm.vue";

import dialog from "./components/dialog/dialog.vue";
import GovMessageBox from "./components/messagebox/message-box.js"; //

import table from "./components/table/table.vue";

import swiper from "./components/swiper/swiper.vue";
import { GovSwiperSlide } from "./components/swiper/swiperSlide.js"; //

// 导出所有组件
const components = {
	aside,
	container,
	footer,
	header,
	main,

	row,
	col,

	icon,
	button,
	buttonGroup,
	link,
	alert,

	form,
	formItem,
	radio,
	radioGroup,
	checkbox,
	checkboxGroup,
	datepicker,

	popper,
	popconfirm,

	dialog,

	table,

	swiper,
};

// 提供一个全局安装方法
const install = (Vue) => {
	Object.keys(components).forEach((name) => {
		Vue.component(components[name].name, components[name]);
	});
	Vue.component("GovSwiperSlide", GovSwiperSlide);
};

// 引入安装
if (typeof window !== "undefined" && window.Vue) {
	install(window.Vue);
}

export default {
	install,
};

export { GovMessageBox };
