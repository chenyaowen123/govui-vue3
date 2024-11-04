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
import blockquote from "./components/blockquote/blockquote.vue";
import tag from "./components/tag/tag.vue";
import ellipsis from "./components/ellipsis/ellipsis.vue";
import loading from "./components/loading/loading.vue";

import form from "./components/form/form.vue";
import formItem from "./components/form/form-item.vue";
import radio from "./components/radio/radio.vue";
import radioGroup from "./components/radio/radio-group.vue";
import checkbox from "./components/checkbox/checkbox.vue";
import checkboxGroup from "./components/checkbox/checkbox-group.vue";
import input from "./components/input/input.vue";
import inputAuto from "./components/input/input-auto.vue";
import inputNumber from "./components/input/input-number.vue";
import textarea from "./components/textarea/textarea.vue";
import select from "./components/select/select.vue";
import selectOption from "./components/select/select-option.vue";
import datepicker from "./components/datepicker/datepicker.vue";
import cascaderPanel from "./components/cascader/cascader-panel.vue";
import cascader from "./components/cascader/cascader.vue";
import Switch from "./components/switch/switch.vue";
import upload from "./components/upload/upload.vue";
import rate from "./components/rate/rate.vue";

import popper from "./components/popper/popper.vue";
import popconfirm from "./components/popconfirm/popconfirm.vue";
import tooltip from "./components/tooltip/tooltip.vue";

import dialog from "./components/dialog/dialog.vue";
import GovMessage from "./components/message/message.js"; //
import GovMessageBox from "./components/messagebox/message-box.js"; //
import GovNotification from "./components/notification/notification.js"; //

import cellapseTransiton from "./components/collapse/collapse-transition.vue";
import table from "./components/table/table.vue";

import swiper from "./components/swiper/swiper.vue";
import { GovSwiperSlide } from "./components/swiper/swiperSlide.js"; //
import tree from "./components/tree/tree.vue";
import timeline from "./components/timeline/timeline.vue";
import timelineItem from "./components/timeline/timeline-item.vue";

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
	blockquote,
	tag,
	ellipsis,
	loading,

	form,
	formItem,
	radio,
	radioGroup,
	checkbox,
	checkboxGroup,
	input,
	inputAuto,
	inputNumber,
	textarea,
	select,
	selectOption,
	datepicker,
	cascader,
	cascaderPanel,
	Switch,
	upload,
	rate,

	popper,
	popconfirm,
	tooltip,

	dialog,

	cellapseTransiton,
	table,

	swiper,
	timeline,
	timelineItem,
	tree,
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

export { GovMessage, GovMessageBox, GovNotification };
