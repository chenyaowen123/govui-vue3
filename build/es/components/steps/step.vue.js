import { inject as $, computed as n, openBlock as o, createElementBlock as c, normalizeClass as k, createElementVNode as a, renderSlot as d, createBlock as y, toDisplayString as r, createTextVNode as _, createCommentVNode as g } from "vue";
import z from "../icon/icon.vue.js";
const N = { class: "gov-step__head" }, b = { class: "gov-step__head-icon" }, x = {
  key: 1,
  class: "gov-step__head-icon-inner"
}, B = { class: "gov-step__main" }, C = { class: "gov-step__main-title" }, V = {
  key: 0,
  class: "gov-step__main-description"
}, O = /* @__PURE__ */ Object.assign({
  name: "GovStep"
}, {
  __name: "step",
  props: {
    title: String,
    icon: String,
    description: String
  },
  setup(i) {
    var v;
    const e = $("govSteps", null), u = Symbol();
    (v = e == null ? void 0 : e.addSteps) == null || v.call(e, u);
    const p = n(() => e == null ? void 0 : e.center), f = n(() => (e == null ? void 0 : e.steps) || []), h = n(() => (e == null ? void 0 : e.size) || "default"), s = n(() => f.value.indexOf(u) + 1), l = n(() => {
      let t = (e == null ? void 0 : e.active) || 0;
      return s.value == t ? "active" : s.value < t ? "finish" : "wait";
    });
    return (t, m) => (o(), c("div", {
      class: k(["gov-step", [
        `gov-step--size-${h.value}`,
        `is-${l.value}`,
        { "is-center": p.value }
      ]])
    }, [
      a("div", N, [
        m[0] || (m[0] = a("div", { class: "gov-step__head-line" }, null, -1)),
        a("div", b, [
          d(t.$slots, "icon", {
            index: s.value,
            status: l.value
          }, () => [
            i.icon ? (o(), y(z, {
              key: 0,
              name: i.icon
            }, null, 8, ["name"])) : (o(), c("div", x, r(s.value), 1))
          ])
        ])
      ]),
      a("div", B, [
        a("div", C, [
          d(t.$slots, "title", {
            index: s.value,
            status: l.value
          }, () => [
            _(r(i.title), 1)
          ])
        ]),
        i.description || t.$slots.description ? (o(), c("div", V, [
          d(t.$slots, "description", {
            index: s.value,
            status: l.value
          }, () => [
            _(r(i.description), 1)
          ])
        ])) : g("", !0)
      ])
    ], 2));
  }
});
export {
  O as default
};
