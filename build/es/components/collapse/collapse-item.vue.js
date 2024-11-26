import { inject as _, computed as p, ref as f, watchEffect as d, openBlock as h, createElementBlock as g, normalizeClass as b, createElementVNode as a, renderSlot as s, createTextVNode as V, toDisplayString as w, createVNode as u, withCtx as S, withDirectives as k, vShow as B } from "vue";
import N from "../icon/icon.vue.js";
import $ from "./collapse-transition.vue.js";
const x = { class: "gov-collapse-item__title-text" }, D = { class: "gov-collapse-item__title-iconbox" }, E = { class: "gov-collapse-item__content" }, O = { class: "gov-collapse-item__content-wrap" }, z = /* @__PURE__ */ Object.assign({
  name: "GovCollapseItem"
}, {
  __name: "collapse-item",
  props: {
    title: String,
    name: {
      type: [String, Number],
      default: null
    },
    disabled: Boolean,
    defaultOpend: Boolean
    // 默认展开
  },
  emits: ["toggle"],
  setup(n, { emit: m }) {
    const o = n, e = _("govCollapse", null), i = p(() => o.disabled || (e == null ? void 0 : e.disabled)), t = f(o.defaultOpend), c = () => {
      let l = t.value ? o.name : null;
      e == null || e.updateValue(l);
    };
    d(() => {
      i.value && (t.value = !1, c());
    }), d(() => {
      e != null && e.modelValue && (t.value = (e == null ? void 0 : e.modelValue) === o.name);
    });
    const r = m, v = () => {
      i.value || (t.value = !t.value, r("toggle", t.value), c());
    };
    return (l, j) => (h(), g("div", {
      class: b(["gov-collapse-item", { "is-open": t.value, "is-disabled": i.value }])
    }, [
      a("div", {
        class: "gov-collapse-item__title",
        onClick: v
      }, [
        a("div", x, [
          s(l.$slots, "title", {}, () => [
            V(w(n.title), 1)
          ])
        ]),
        a("div", D, [
          s(l.$slots, "icon", { opend: t.value }, () => [
            u(N, {
              name: "arrow-right",
              class: "gov-collapse-item__title-icon"
            })
          ])
        ])
      ]),
      u($, null, {
        default: S(() => [
          k(a("div", E, [
            a("div", O, [
              s(l.$slots, "default")
            ])
          ], 512), [
            [B, t.value]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
});
export {
  z as default
};
