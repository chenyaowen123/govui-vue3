import { useSlots as c, computed as n, openBlock as l, createElementBlock as u, normalizeClass as i, renderSlot as m } from "vue";
const v = /* @__PURE__ */ Object.assign({
  name: "GovContainer"
}, {
  __name: "container",
  setup(d) {
    const t = c();
    function a(e) {
      return ["GovHeader", "GovFooter"].includes(e.type.name);
    }
    const r = n(() => {
      var o;
      return (((o = t.default) == null ? void 0 : o.call(t)) || []).some(a);
    }), s = n(() => [`gov-container--${r.value ? "vertical" : "horizontal"}`]);
    return (e, o) => (l(), u("section", {
      class: i(["gov-container", s.value])
    }, [
      m(e.$slots, "default")
    ], 2));
  }
});
export {
  v as default
};
