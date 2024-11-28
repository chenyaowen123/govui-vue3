import { inject as m, computed as a, openBlock as s, createElementBlock as c, renderSlot as i, createTextVNode as r, createVNode as l } from "vue";
import u from "../icon/icon.vue.js";
const d = { class: "gov-breadcrumb-item" }, f = /* @__PURE__ */ Object.assign({
  name: "GovBreadcrumbItem"
}, {
  __name: "breadcrumb-item",
  setup(p) {
    const t = m("govBreadcrumb", null), o = a(() => (t == null ? void 0 : t.icon) || "arrow-right");
    return (n, e) => (s(), c("div", d, [
      i(n.$slots, "default"),
      e[0] || (e[0] = r("  ")),
      l(u, { name: o.value }, null, 8, ["name"]),
      e[1] || (e[1] = r("  "))
    ]));
  }
});
export {
  f as default
};
