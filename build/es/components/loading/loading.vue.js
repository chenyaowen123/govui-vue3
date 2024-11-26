import { openBlock as i, createElementBlock as t, normalizeClass as d, createElementVNode as a, renderSlot as n, createVNode as l, Transition as s, withCtx as g, withDirectives as r, normalizeStyle as c, toDisplayString as m, vShow as u } from "vue";
import v from "../icon/icon.vue.js";
const _ = { class: "gov-loading__inner" }, f = { class: "gov-loading__spinner" }, k = /* @__PURE__ */ Object.assign({
  name: "GovLoading"
}, {
  __name: "loading",
  props: {
    modelValue: Boolean,
    loadingText: {
      type: String,
      default: "加载中..."
    },
    loadingBackground: {
      type: String,
      default: "rgba(0, 0, 0, 0.5)"
    }
  },
  setup(e) {
    return (o, h) => (i(), t("div", {
      class: d(["gov-loading", { "gov-loading--active": e.modelValue }])
    }, [
      a("div", _, [
        n(o.$slots, "default")
      ]),
      l(s, { name: "loading-transition" }, {
        default: g(() => [
          r(a("div", {
            class: "gov-loading__overlay",
            style: c({ background: e.loadingBackground })
          }, [
            a("div", f, [
              n(o.$slots, "loading", {}, () => [
                l(v, {
                  name: "loading",
                  size: "30"
                }),
                a("div", null, m(e.loadingText), 1)
              ])
            ])
          ], 4), [
            [u, e.modelValue]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
});
export {
  k as default
};
