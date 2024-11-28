import { openBlock as s, createElementBlock as a, normalizeClass as r, createElementVNode as l, renderSlot as o, createTextVNode as c, toDisplayString as d, createCommentVNode as n, normalizeStyle as i } from "vue";
const v = {
  key: 0,
  class: "gov-card__header"
}, h = { class: "gov-card__header-title" }, m = {
  key: 0,
  class: "gov-card__header-actions"
}, u = /* @__PURE__ */ Object.assign({
  name: "GovCard"
}, {
  __name: "card",
  props: {
    title: String,
    contentStyle: Object,
    //  内容样式
    shadow: {
      type: String,
      default: "always",
      validator: (e) => ["always", "hover", "never"].includes(e)
      // 一直，hover，从不
    }
  },
  setup(e) {
    return (t, y) => (s(), a("div", {
      class: r(["gov-card", [`is-${e.shadow}-shadow`]])
    }, [
      t.$slots.actions || t.$slots.actions || e.title ? (s(), a("div", v, [
        l("div", h, [
          o(t.$slots, "title", {}, () => [
            c(d(e.title), 1)
          ])
        ]),
        t.$slots.actions ? (s(), a("div", m, [
          o(t.$slots, "actions")
        ])) : n("", !0)
      ])) : n("", !0),
      l("div", {
        class: "gov-card__content",
        style: i(e.contentStyle)
      }, [
        o(t.$slots, "default")
      ], 4)
    ], 2));
  }
});
export {
  u as default
};
