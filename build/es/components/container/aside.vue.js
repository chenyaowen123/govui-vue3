import { computed as n, openBlock as o, createElementBlock as r, normalizeStyle as a, renderSlot as c } from "vue";
const i = /* @__PURE__ */ Object.assign({
  name: "GovAside"
}, {
  __name: "aside",
  props: {
    width: {
      type: [String, Number],
      default: null
    }
  },
  setup(t) {
    const s = t, l = n(() => {
      const e = s.width;
      return {
        width: typeof e == "number" ? `${e}px` : e || null
      };
    });
    return (e, u) => (o(), r("aside", {
      class: "gov-aside",
      style: a(l.value)
    }, [
      c(e.$slots, "default")
    ], 4));
  }
});
export {
  i as default
};
