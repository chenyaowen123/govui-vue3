import { openBlock as a, createElementBlock as s, normalizeClass as n, normalizeStyle as l, unref as o, renderSlot as u } from "vue";
import { useStyle as c } from "./useStyle.js";
const m = /* @__PURE__ */ Object.assign({
  name: "GovRow"
}, {
  __name: "index",
  props: {
    width: {
      type: [String, Number],
      default: "auto"
    },
    // 间隔，实例：
    // <gov-row :gutter="16">
    // <gov-row :gutter="{ xs: 8, sm: 16, md: 24 }">
    // <gov-row :gutter="[16, 24]">
    // <gov-row :gutter="[16, { xs: 8, sm: 16, md: 24 }]">
    // <gov-row :gutter="[{ xs: 8, sm: 16 }, 24]">
    gutter: {
      type: [Number, Object, Array],
      default: 0
    },
    // 垂直对齐方式
    align: {
      type: String,
      default: "flex-start",
      validator: (e) => ["flex-start", "center", "flex-end", "stretch"].includes(e)
    },
    // 水平对齐方式
    justify: {
      type: String,
      default: "start",
      validator: (e) => [
        "start",
        "end",
        "center",
        "space-around",
        "space-between",
        "space-evenly"
      ].includes(e)
    }
  },
  setup(e) {
    const t = c(e);
    return (r, d) => (a(), s("div", {
      class: n(["gov-grid-row", { "gutter-row": e.gutter }]),
      style: l(o(t))
    }, [
      u(r.$slots, "default")
    ], 6));
  }
});
export {
  m as default
};
