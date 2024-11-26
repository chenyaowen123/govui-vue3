import { computed as e, openBlock as l, createElementBlock as a, normalizeStyle as t, createElementVNode as s } from "vue";
import c from "./dangqi.png.js";
const g = /* @__PURE__ */ Object.assign({
  name: "GovDangqi"
}, {
  __name: "dangqi",
  props: {
    width: {
      type: [String, Number],
      default: 1080
    }
  },
  setup(o) {
    const n = o, r = e(() => ({
      display: " inline-block",
      fontSize: 0
    })), i = e(() => ({
      width: Number(n.width) + "px",
      height: "auto",
      display: "block"
    }));
    return (m, p) => (l(), a("div", {
      class: "gov-dangqi",
      style: t(r.value)
    }, [
      s("img", {
        src: c,
        style: t(i.value)
      }, null, 4)
    ], 4));
  }
});
export {
  g as default
};
