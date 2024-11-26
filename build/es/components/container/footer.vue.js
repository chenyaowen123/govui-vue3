import { computed as l, openBlock as n, createElementBlock as s, normalizeStyle as a, renderSlot as c } from "vue";
const f = /* @__PURE__ */ Object.assign({
  name: "GovFooter"
}, {
  __name: "footer",
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(t) {
    const o = t, r = l(() => {
      const e = o.height;
      return {
        height: typeof e == "number" ? `${e}px` : e || null
      };
    });
    return (e, p) => (n(), s("footer", {
      class: "gov-footer",
      style: a(r.value)
    }, [
      c(e.$slots, "default")
    ], 4));
  }
});
export {
  f as default
};
