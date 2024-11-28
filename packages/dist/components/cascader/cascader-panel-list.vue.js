import { inject as u, computed as v, openBlock as s, createElementBlock as l, Fragment as g, renderList as h, normalizeClass as m, createElementVNode as t, createVNode as r, toDisplayString as f } from "vue";
import i from "../icon/icon.vue.js";
const C = { class: "gov-cascader-panel-list" }, k = ["onClick"], b = { class: "gov-cascader-panel-list__left" }, x = { class: "gov-cascader-panel-list__text" }, y = { class: "gov-cascader-panel-list__right" }, E = /* @__PURE__ */ Object.assign({
  name: "GovCascaderPanelList"
}, {
  __name: "cascader-panel-list",
  props: {
    options: {
      type: {},
      default: () => []
    },
    level: {
      type: Number,
      required: !0
    }
  },
  setup(c) {
    const d = c, n = u("govCascaderPanel", null), _ = v(() => n.cascaderSelected.map((a) => a.value)), p = (a) => {
      a.disabled || n.updateCascaderPanelValue(d.level, a);
    };
    return (a, P) => (s(), l("div", C, [
      (s(!0), l(g, null, h(c.options, (e) => {
        var o;
        return s(), l("div", {
          class: m(["gov-cascader-panel-list__li", [
            { "is-active": _.value.includes(e.value) },
            { "is-expand": ((o = e.children) == null ? void 0 : o.length) > 0 },
            { "is-disabled": e.disabled }
          ]]),
          key: e.value,
          onClick: (V) => p(e)
        }, [
          t("div", b, [
            r(i, { name: "check" })
          ]),
          t("div", x, f(e.label), 1),
          t("div", y, [
            r(i, { name: "arrow-right" })
          ])
        ], 10, k);
      }), 128))
    ]));
  }
});
export {
  E as default
};
