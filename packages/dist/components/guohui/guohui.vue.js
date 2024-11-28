import { computed as e, openBlock as n, createElementBlock as u, normalizeStyle as t, createElementVNode as s } from "vue";
import c from "./guohui.png.js";
const h = /* @__PURE__ */ Object.assign({
  name: "GovGuohui"
}, {
  __name: "guohui",
  props: {
    width: {
      type: [String, Number],
      default: 1080
    }
  },
  setup(o) {
    const r = o, i = e(() => ({
      display: " inline-block",
      fontSize: 0
    })), l = e(() => ({
      width: Number(r.width) + "px",
      height: "auto",
      display: "block"
    }));
    return (a, m) => (n(), u("div", {
      class: "gov-guohui",
      style: t(i.value)
    }, [
      s("img", {
        src: c,
        style: t(l.value)
      }, null, 4)
    ], 4));
  }
});
export {
  h as default
};
