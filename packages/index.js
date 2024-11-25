// 主题色
import "./styles/theme.scss";

// 规范化
import GovGuoqi from "./components/guoqi/guoqi.vue";
import GovGuohui from "./components/guohui/guohui.vue";
import GovDangqi from "./components/dangqi/dangqi.vue";
import GovDanghui from "./components/danghui/danghui.vue";

// 基础组件
import GovRow from "./components/grid/row/index.vue";
import GovCol from "./components/grid/col/index.vue";
import GovContainer from "./components/container/container.vue";
import GovAside from "./components/container/aside.vue";
import GovFooter from "./components/container/footer.vue";
import GovHeader from "./components/container/header.vue";
import GovMain from "./components/container/main.vue";
import GovIcon from "./components/icon/icon.vue";
import GovButtonGroup from "./components/button/button-group.vue";
import GovButton from "./components/button/button.vue";
import GovLink from "./components/link/link.vue";
import GovAlert from "./components/alert/alert.vue";
import GovBlockquote from "./components/blockquote/blockquote.vue";
import GovTag from "./components/tag/tag.vue";
import GovEllipsis from "./components/ellipsis/ellipsis.vue";
import GovLoading from "./components/loading/loading.vue";

// 表单
import GovForm from "./components/form/form/index.vue";
import GovFormItem from "./components/form/formItem/index.vue";
import GovRadioGroup from "./components/radio/radio-group.vue";
import GovRadio from "./components/radio/radio.vue";
import GovCheckboxGroup from "./components/checkbox/checkbox-group.vue";
import GovCheckbox from "./components/checkbox/checkbox.vue";
import GovInput from "./components/input/input.vue";
import GovInputAuto from "./components/input/input-auto.vue";
import GovInputNumber from "./components/input/input-number.vue";
import GovTextarea from "./components/textarea/textarea.vue";
import GovSelect from "./components/select/select.vue";
import GovSelectOption from "./components/select/select-option.vue";
import GovCascader from "./components/cascader/cascader.vue";
import GovCascaderPanel from "./components/cascader/cascader-panel.vue";
import GovSwitch from "./components/switch/switch.vue";
import GovDatepicker from "./components/datepicker/datepicker.vue";
import GovUpload from "./components/upload/upload.vue";
import GovRate from "./components/rate/rate.vue";

// 弹窗
import GovDrawer from "./components/drawer/drawer.vue";
import GovDialog from "./components/dialog/dialog.vue";
import GovMessage from "./components/message/message.js"; // js
import GovMessageBox from "./components/messagebox/message-box.js"; // js
import GovPopper from "./components/popper/popper.vue";
import GovPopconfirm from "./components/popconfirm/popconfirm.vue";
import GovTooltip from "./components/tooltip/tooltip.vue";
import GovNotification from "./components/notification/notification.js"; // js

// 数据
import GovAvatar from "./components/avatar/avatar.vue";
import GovUsercard from "./components/usercard/usercard.vue";
import GovBadge from "./components/badge/badge.vue";
import GovCard from "./components/card/card.vue";
import GovCollapse from "./components/collapse/collapse.vue";
import GovCollapseItem from "./components/collapse/collapse-item.vue";
import GovCollapseTransition from "./components/collapse/collapse-transition.vue";
import GovEmpty from "./components/empty/empty.vue";
import GovPagination from "./components/pagination/pagination.vue";
import GovProgress from "./components/progress/progress.vue";
import GovResult from "./components/result/result.vue";
import GovTable from "./components/table/table.vue";
import GovSwiper from "./components/swiper/swiper.vue";
import GovSwiperSlide from "./components/swiper/swiperSlide.js";
import GovTimeline from "./components/timeline/timeline.vue";
import GovTimelineItem from "./components/timeline/timeline-item.vue";
import GovTree from "./components/tree/tree.vue";

// 导航
import GovBacktop from "./components/backtop/backtop.vue";
import GovBreadcrumb from "./components/breadcrumb/breadcrumb.vue";
import GovBreadcrumbItem from "./components/breadcrumb/breadcrumb-item.vue";
import GovDropdown from "./components/dropdown/dropdown.vue";
import GovDropdownItem from "./components/dropdown/dropdown-item.vue";
import GovPageContainer from "./components/pageContainer/page-container.vue";
import GovSteps from "./components/steps/steps.vue";
import GovStep from "./components/steps/step.vue";
import GovTabs from "./components/tabs/tabs.vue";
import GovTabPane from "./components/tabs/tab-pane.vue";

// 其它
import GovQrcode from "./components/qrcode/qrcode.vue";

// 导出所有组件
const components = {
	// 规范化组件
	GovGuoqi,
	GovGuohui,
	GovDangqi,
	GovDanghui,

	// 基础布局组件
	GovRow,
	GovCol,
	GovContainer,
	GovAside,
	GovFooter,
	GovHeader,
	GovMain,
	GovIcon,
	GovButtonGroup,
	GovButton,
	GovLink,
	GovAlert,
	GovBlockquote,
	GovTag,
	GovEllipsis,
	GovLoading,

	// 表单组件
	GovForm,
	GovFormItem,
	GovRadioGroup,
	GovRadio,
	GovCheckboxGroup,
	GovCheckbox,
	GovInput,
	GovInputAuto,
	GovInputNumber,
	GovTextarea,
	GovSelect,
	GovSelectOption,
	GovCascader,
	GovCascaderPanel,
	GovSwitch,
	GovDatepicker,
	GovUpload,
	GovRate,

	// 弹窗组件
	GovDrawer,
	GovDialog,
	GovPopper,
	GovPopconfirm,
	GovTooltip,

	// 数据展示组件
	GovAvatar,
	GovUsercard,
	GovBadge,
	GovCard,
	GovCollapse,
	GovCollapseItem,
	GovCollapseTransition,
	GovEmpty,
	GovPagination,
	GovProgress,
	GovResult,
	GovTable,
	GovSwiper,
	GovSwiperSlide,
	GovTimeline,
	GovTimelineItem,
	GovTree,

	// 导航组件
	GovBacktop,
	GovBreadcrumb,
	GovBreadcrumbItem,
	GovDropdown,
	GovDropdownItem,
	GovPageContainer,
	GovSteps,
	GovStep,
	GovTabs,
	GovTabPane,

	// 其他组件
	GovQrcode,
};

// 提供一个全局安装方法
const install = (Vue) => {
	Object.keys(components).forEach((name) => {
		Vue.component(name, components[name]);
	});
};

// 引入安装
if (typeof window !== "undefined" && window.Vue) {
	install(window.Vue);
}

export default {
	install,
};

// 导出独立组件
export {
	// 规范化组件
	GovGuoqi,
	GovGuohui,
	GovDangqi,
	GovDanghui,

	// 基础布局组件
	GovRow,
	GovCol,
	GovContainer,
	GovAside,
	GovFooter,
	GovHeader,
	GovMain,
	GovIcon,
	GovButtonGroup,
	GovButton,
	GovLink,
	GovAlert,
	GovBlockquote,
	GovTag,
	GovEllipsis,
	GovLoading,

	// 表单组件
	GovForm,
	GovFormItem,
	GovRadioGroup,
	GovRadio,
	GovCheckboxGroup,
	GovCheckbox,
	GovInput,
	GovInputAuto,
	GovInputNumber,
	GovTextarea,
	GovSelect,
	GovSelectOption,
	GovCascader,
	GovCascaderPanel,
	GovSwitch,
	GovDatepicker,
	GovUpload,
	GovRate,

	// 弹窗组件
	GovDrawer,
	GovDialog,
	GovMessage, // js
	GovMessageBox, // js
	GovPopper,
	GovPopconfirm,
	GovTooltip,
	GovNotification, // js

	// 数据展示组件
	GovAvatar,
	GovUsercard,
	GovBadge,
	GovCard,
	GovCollapse,
	GovCollapseItem,
	GovCollapseTransition,
	GovEmpty,
	GovPagination,
	GovProgress,
	GovResult,
	GovTable,
	GovSwiper,
	GovSwiperSlide,
	GovTimeline,
	GovTimelineItem,
	GovTree,

	// 导航组件
	GovBacktop,
	GovBreadcrumb,
	GovBreadcrumbItem,
	GovDropdown,
	GovDropdownItem,
	GovPageContainer,
	GovSteps,
	GovStep,
	GovTabs,
	GovTabPane,

	// 其他组件
	GovQrcode,
};
