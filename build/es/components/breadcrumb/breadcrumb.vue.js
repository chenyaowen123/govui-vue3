import { provide as o, reactive as s, toRefs as a, openBlock as t, createElementBlock as c, normalizeClass as n, renderSlot as i } from "vue";
const u = /* @__PURE__ */ Object.assign({
  name: "GovBreadcrumb"
}, {
  __name: "breadcrumb",
  props: {
    icon: String,
    size: String
  },
  setup(e) {
    return o(
      "govBreadcrumb",
      s({
        ...a(e)
      })
    ), (r, d) => (t(), c("div", {
      class: n(["gov-breadcrumb", [`gov-breadcrumb--size-${e.size}`]])
    }, [
      i(r.$slots, "default")
    ], 2));
  }
});
export {
  u as default
};
