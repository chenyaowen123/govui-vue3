/* empty css                  */
import r from "./components/guoqi/guoqi.vue.js";
import i from "./components/guohui/guohui.vue.js";
import s from "./components/dangqi/dangqi.vue.js";
import t from "./components/danghui/danghui.vue.js";
import G from "./components/grid/row/index.vue.js";
import f from "./components/grid/col/index.vue.js";
import v from "./components/container/container.vue.js";
import _ from "./components/container/aside.vue.js";
import n from "./components/container/footer.vue.js";
import p from "./components/container/header.vue.js";
import e from "./components/container/main.vue.js";
import c from "./components/icon/icon.vue.js";
import $ from "./components/button/button-group.vue.js";
import l from "./components/button/Button.vue.js";
import u from "./components/link/link.vue.js";
import d from "./components/alert/alert.vue.js";
import C from "./components/blockquote/blockquote.vue.js";
import g from "./components/tag/tag.vue.js";
import T from "./components/ellipsis/ellipsis.vue.js";
import I from "./components/loading/loading.vue.js";
import b from "./components/form/form/index.vue.js";
import B from "./components/form/formItem/index.vue.js";
import D from "./components/radio/radio-group.vue.js";
import P from "./components/radio/radio.vue.js";
import S from "./components/checkbox/checkbox-group.vue.js";
import k from "./components/checkbox/checkbox.vue.js";
import w from "./components/input/input.vue.js";
import x from "./components/input/input-auto.vue.js";
import h from "./components/input/input-number.vue.js";
import R from "./components/textarea/textarea.vue.js";
import A from "./components/select/select.vue.js";
import q from "./components/select/select-option.vue.js";
import F from "./components/cascader/cascader.vue.js";
import E from "./components/cascader/cascader-panel.vue.js";
import L from "./components/switch/switch.vue.js";
import M from "./components/datepicker/datepicker.vue.js";
import U from "./components/upload/upload.vue.js";
import y from "./components/rate/rate.vue.js";
import N from "./components/drawer/drawer.vue.js";
import O from "./components/dialog/dialog.vue.js";
import { default as Hm } from "./components/message/message.js";
import { default as jm } from "./components/messagebox/message-box.js";
import H from "./components/popper/popper.vue.js";
import Q from "./components/popconfirm/popconfirm.vue.js";
import j from "./components/tooltip/tooltip.vue.js";
import { default as Jm } from "./components/notification/notification.js";
import z from "./components/avatar/avatar.vue.js";
import J from "./components/usercard/usercard.vue.js";
import K from "./components/badge/badge.vue.js";
import V from "./components/card/card.vue.js";
import W from "./components/collapse/collapse.vue.js";
import X from "./components/collapse/collapse-item.vue.js";
import Y from "./components/collapse/collapse-transition.vue.js";
import Z from "./components/empty/empty.vue.js";
import oo from "./components/pagination/pagination.vue.js";
import mo from "./components/progress/progress.vue.js";
import ao from "./components/result/result.vue.js";
import ro from "./components/table/table.vue.js";
import io from "./components/swiper/swiper.vue.js";
import so from "./components/swiper/swiperSlide.js";
import to from "./components/timeline/timeline.vue.js";
import Go from "./components/timeline/timeline-item.vue.js";
import fo from "./components/tree/tree.vue.js";
import vo from "./components/backtop/backtop.vue.js";
import _o from "./components/breadcrumb/breadcrumb.vue.js";
import no from "./components/breadcrumb/breadcrumb-item.vue.js";
import po from "./components/dropdown/dropdown.vue.js";
import eo from "./components/dropdown/dropdown-item.vue.js";
import co from "./components/pageContainer/page-container.vue.js";
import $o from "./components/steps/steps.vue.js";
import lo from "./components/steps/step.vue.js";
import uo from "./components/tabs/tabs.vue.js";
import Co from "./components/tabs/tab-pane.vue.js";
import go from "./components/qrcode/qrcode.vue.js";
const m = {
  // 规范化组件
  GovGuoqi: r,
  GovGuohui: i,
  GovDangqi: s,
  GovDanghui: t,
  // 基础布局组件
  GovRow: G,
  GovCol: f,
  GovContainer: v,
  GovAside: _,
  GovFooter: n,
  GovHeader: p,
  GovMain: e,
  GovIcon: c,
  GovButtonGroup: $,
  GovButton: l,
  GovLink: u,
  GovAlert: d,
  GovBlockquote: C,
  GovTag: g,
  GovEllipsis: T,
  GovLoading: I,
  // 表单组件
  GovForm: b,
  GovFormItem: B,
  GovRadioGroup: D,
  GovRadio: P,
  GovCheckboxGroup: S,
  GovCheckbox: k,
  GovInput: w,
  GovInputAuto: x,
  GovInputNumber: h,
  GovTextarea: R,
  GovSelect: A,
  GovSelectOption: q,
  GovCascader: F,
  GovCascaderPanel: E,
  GovSwitch: L,
  GovDatepicker: M,
  GovUpload: U,
  GovRate: y,
  // 弹窗组件
  GovDrawer: N,
  GovDialog: O,
  GovPopper: H,
  GovPopconfirm: Q,
  GovTooltip: j,
  // 数据展示组件
  GovAvatar: z,
  GovUsercard: J,
  GovBadge: K,
  GovCard: V,
  GovCollapse: W,
  GovCollapseItem: X,
  GovCollapseTransition: Y,
  GovEmpty: Z,
  GovPagination: oo,
  GovProgress: mo,
  GovResult: ao,
  GovTable: ro,
  GovSwiper: io,
  GovSwiperSlide: so,
  GovTimeline: to,
  GovTimelineItem: Go,
  GovTree: fo,
  // 导航组件
  GovBacktop: vo,
  GovBreadcrumb: _o,
  GovBreadcrumbItem: no,
  GovDropdown: po,
  GovDropdownItem: eo,
  GovPageContainer: co,
  GovSteps: $o,
  GovStep: lo,
  GovTabs: uo,
  GovTabPane: Co,
  // 其他组件
  GovQrcode: go
}, To = (a) => {
  Object.keys(m).forEach((o) => {
    a.component(o, m[o]);
  });
}, ym = {
  install: To
};
export {
  d as GovAlert,
  _ as GovAside,
  z as GovAvatar,
  vo as GovBacktop,
  K as GovBadge,
  C as GovBlockquote,
  _o as GovBreadcrumb,
  no as GovBreadcrumbItem,
  l as GovButton,
  $ as GovButtonGroup,
  V as GovCard,
  F as GovCascader,
  E as GovCascaderPanel,
  k as GovCheckbox,
  S as GovCheckboxGroup,
  f as GovCol,
  W as GovCollapse,
  X as GovCollapseItem,
  Y as GovCollapseTransition,
  v as GovContainer,
  t as GovDanghui,
  s as GovDangqi,
  M as GovDatepicker,
  O as GovDialog,
  N as GovDrawer,
  po as GovDropdown,
  eo as GovDropdownItem,
  T as GovEllipsis,
  Z as GovEmpty,
  n as GovFooter,
  b as GovForm,
  B as GovFormItem,
  i as GovGuohui,
  r as GovGuoqi,
  p as GovHeader,
  c as GovIcon,
  w as GovInput,
  x as GovInputAuto,
  h as GovInputNumber,
  u as GovLink,
  I as GovLoading,
  e as GovMain,
  Hm as GovMessage,
  jm as GovMessageBox,
  Jm as GovNotification,
  co as GovPageContainer,
  oo as GovPagination,
  Q as GovPopconfirm,
  H as GovPopper,
  mo as GovProgress,
  go as GovQrcode,
  P as GovRadio,
  D as GovRadioGroup,
  y as GovRate,
  ao as GovResult,
  G as GovRow,
  A as GovSelect,
  q as GovSelectOption,
  lo as GovStep,
  $o as GovSteps,
  io as GovSwiper,
  so as GovSwiperSlide,
  L as GovSwitch,
  Co as GovTabPane,
  ro as GovTable,
  uo as GovTabs,
  g as GovTag,
  R as GovTextarea,
  to as GovTimeline,
  Go as GovTimelineItem,
  j as GovTooltip,
  fo as GovTree,
  U as GovUpload,
  J as GovUsercard,
  ym as default
};
