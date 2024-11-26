import { computed as e, openBlock as n, createElementBlock as s, normalizeStyle as t, createElementVNode as c } from "vue";
import a from "./guoqi.png.js";
const g = /* @__PURE__ */ Object.assign({
  name: "GovGuoqi"
}, {
  __name: "guoqi",
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
    return (u, m) => (n(), s("div", {
      class: "gov-guoqi",
      style: t(i.value)
    }, [
      c("img", {
        src: a,
        style: t(l.value)
      }, null, 4)
    ], 4));
  }
});
export {
  g as default
};
