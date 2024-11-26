import { computed as n, openBlock as o, createElementBlock as a, normalizeStyle as s, renderSlot as c } from "vue";
const h = /* @__PURE__ */ Object.assign({
  name: "GovHeader"
}, {
  __name: "header",
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(t) {
    const r = t, l = n(() => {
      const e = r.height;
      return {
        height: typeof e == "number" ? `${e}px` : e || null
      };
    });
    return (e, p) => (o(), a("header", {
      class: "gov-header",
      style: s(l.value)
    }, [
      c(e.$slots, "default")
    ], 4));
  }
});
export {
  h as default
};
