import { computed as o, openBlock as t, createElementBlock as r, normalizeStyle as l } from "vue";
import s from "./danghui-red.png.js";
import u from "./danghui-yellow.png.js";
const g = /* @__PURE__ */ Object.assign({
  name: "GovDanghui"
}, {
  __name: "danghui",
  props: {
    width: {
      type: [String, Number],
      default: 1080
    },
    type: {
      type: String,
      default: "red",
      validator: (e) => ["red", "yellow"].includes(e)
    }
  },
  setup(e) {
    const n = e, a = o(() => ({
      display: " inline-block",
      fontSize: 0
    })), i = o(() => ({
      width: Number(n.width) + "px",
      height: "auto",
      display: "block"
    }));
    return (c, m) => (t(), r("div", {
      class: "gov-danghui",
      style: l(a.value)
    }, [
      e.type === "red" ? (t(), r("img", {
        key: 0,
        src: s,
        style: l(i.value)
      }, null, 4)) : (t(), r("img", {
        key: 1,
        src: u,
        style: l(i.value)
      }, null, 4))
    ], 4));
  }
});
export {
  g as default
};
