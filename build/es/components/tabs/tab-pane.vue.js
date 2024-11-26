import { inject as s, computed as r, withDirectives as c, openBlock as o, createElementBlock as d, normalizeClass as m, renderSlot as p, vShow as u } from "vue";
const v = /* @__PURE__ */ Object.assign({
  name: "GovTabPane"
}, {
  __name: "tab-pane",
  props: {
    name: String,
    label: String,
    disabled: Boolean
  },
  setup(t) {
    var n;
    const a = t, e = s("govTabs", null);
    (n = e == null ? void 0 : e.addTab) == null || n.call(e, { ...a });
    const l = r(() => a.name == (e == null ? void 0 : e.active));
    return (i, b) => c((o(), d("div", {
      class: m(["gov-tab-pane", [{ "is-disabled": t.disabled }]])
    }, [
      p(i.$slots, "default")
    ], 2)), [
      [u, l.value]
    ]);
  }
});
export {
  v as default
};
