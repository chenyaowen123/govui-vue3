import { openBlock as s, createElementBlock as i, normalizeClass as a, createElementVNode as c, renderSlot as o, createVNode as d, createTextVNode as r, toDisplayString as n, createCommentVNode as l } from "vue";
import u from "../icon/icon.vue.js";
const m = { class: "gov-result__icon" }, g = {
  key: 0,
  class: "gov-result__title"
}, v = {
  key: 1,
  class: "gov-result__description"
}, f = {
  key: 2,
  class: "gov-result__footer"
}, _ = /* @__PURE__ */ Object.assign({
  name: "GovResult"
}, {
  __name: "result",
  props: {
    title: String,
    description: String,
    type: {
      type: String,
      default: "success",
      required: !0,
      validator: (e) => ["success", "info", "warning", "danger"].includes(e)
    }
  },
  setup(e) {
    return (t, $) => (s(), i("div", {
      class: a(["gov-result", `is-${e.type}`])
    }, [
      c("div", m, [
        o(t.$slots, "icon", {}, () => [
          d(u, { name: e.type }, null, 8, ["name"])
        ])
      ]),
      e.title || t.$slots.title ? (s(), i("div", g, [
        o(t.$slots, "title", {}, () => [
          r(n(e.title), 1)
        ])
      ])) : l("", !0),
      e.description || t.$slots.description ? (s(), i("div", v, [
        o(t.$slots, "description", {}, () => [
          r(n(e.description), 1)
        ])
      ])) : l("", !0),
      t.$slots.default ? (s(), i("div", f, [
        o(t.$slots, "default")
      ])) : l("", !0)
    ], 2));
  }
});
export {
  _ as default
};
