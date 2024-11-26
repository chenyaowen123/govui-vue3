import { openBlock as t, createElementBlock as i, createElementVNode as l, normalizeClass as d, normalizeStyle as c, createBlock as r, createCommentVNode as o, renderSlot as a, toDisplayString as s } from "vue";
import g from "../icon/icon.vue.js";
const v = { class: "gov-timeline-item" }, u = {
  key: 1,
  class: "gov-timeline-item__dot"
}, _ = { class: "gov-timeline-item__wrapper" }, y = {
  key: 0,
  class: "gov-timeline-item__timestamp gov-timeline-item__timestamp--top"
}, f = { class: "gov-timeline-item__content" }, h = {
  key: 1,
  class: "gov-timeline-item__timestamp gov-timeline-item__timestamp--bottom"
}, S = /* @__PURE__ */ Object.assign({
  name: "GovTimelineItem"
}, {
  __name: "timeline-item",
  props: {
    timestamp: {
      type: String,
      default: ""
    },
    // 时间戳
    hideTimestamp: Boolean,
    // 隐藏时间戳
    placement: {
      type: String,
      default: "bottom",
      // 内容和时间戳的位置
      validator: (e) => ["top", "bottom"].includes(e)
    },
    type: {
      type: String,
      default: "default",
      // 圆点颜色类型
      validator: (e) => [
        "default",
        "primary",
        "success",
        "info",
        "warning",
        "danger"
      ].includes(e)
    },
    color: {
      type: String,
      default: ""
      // 圆点颜色（背景色）
    },
    size: String,
    icon: String,
    // 图标名称
    hollow: Boolean
    // 是否空心
  },
  setup(e) {
    return (m, n) => (t(), i("div", v, [
      n[0] || (n[0] = l("div", { class: "gov-timeline-item__tail" }, null, -1)),
      m.$slots.dot ? o("", !0) : (t(), i("div", {
        key: 0,
        class: d([
          "gov-timeline-item__node",
          `gov-timeline-item__node--size-${e.size}`,
          `gov-timeline-item__node--${e.type}`,
          { "gov-timeline-item__node--hollow": e.hollow }
        ]),
        style: c({ backgroundColor: e.color })
      }, [
        e.icon ? (t(), r(g, {
          key: 0,
          name: e.icon,
          class: "gov-timeline-item__icon"
        }, null, 8, ["name"])) : o("", !0)
      ], 6)),
      m.$slots.dot ? (t(), i("div", u, [
        a(m.$slots, "dot")
      ])) : o("", !0),
      l("div", _, [
        !e.hideTimestamp && e.placement === "top" ? (t(), i("div", y, s(e.timestamp), 1)) : o("", !0),
        l("div", f, [
          a(m.$slots, "default")
        ]),
        !e.hideTimestamp && e.placement === "bottom" ? (t(), i("div", h, s(e.timestamp), 1)) : o("", !0)
      ])
    ]));
  }
});
export {
  S as default
};
