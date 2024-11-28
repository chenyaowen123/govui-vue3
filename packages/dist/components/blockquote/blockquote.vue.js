import { openBlock as t, createElementBlock as r, normalizeClass as l, normalizeStyle as n, renderSlot as a } from "vue";
const s = /* @__PURE__ */ Object.assign({
  name: "GovBlockquote"
}, {
  __name: "blockquote",
  props: {
    type: {
      type: String,
      default: "default",
      validator: (e) => [
        "default",
        "primary",
        "success",
        "info",
        "warning",
        "danger"
      ].includes(e)
    },
    fontSize: String,
    borderColor: String,
    reverse: Boolean
    // 是否翻转
  },
  setup(e) {
    return (o, c) => (t(), r("div", {
      class: l(["gov-blockquote", [
        e.type ? `gov-blockquote--${e.type}` : "",
        e.reverse ? "gov-blockquote--reverse" : ""
      ]]),
      style: n({
        fontSize: e.fontSize || "",
        borderColor: e.borderColor || ""
      })
    }, [
      a(o.$slots, "default")
    ], 6));
  }
});
export {
  s as default
};
