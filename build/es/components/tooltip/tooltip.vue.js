import { openBlock as n, createBlock as p, unref as g, mergeProps as m, withCtx as s, createElementVNode as l, createElementBlock as a, renderSlot as i, toDisplayString as h } from "vue";
import _ from "../../node_modules/vue3-popper/dist/popper.esm.js";
const f = { class: "gov-tooltip__trigger" }, v = { class: "gov-tooltip__wrap" }, u = {
  key: 0,
  class: "gov-tooltip__slot"
}, b = {
  key: 1,
  class: "gov-tooltip__content"
}, B = /* @__PURE__ */ Object.assign({
  name: "GovTooltip"
}, {
  __name: "tooltip",
  props: {
    content: String,
    disabled: Boolean,
    placement: {
      type: String,
      default: "top",
      validator: (t) => [
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end"
      ].includes(t)
    }
  },
  emits: ["toggle", "show", "hide"],
  setup(t, { emit: r }) {
    const e = r, c = () => {
      e("toggle", !0), e("show");
    }, d = () => {
      e("toggle", !1), e("hide");
    };
    return (o, k) => (n(), p(g(_), m({ class: "gov-tooltip" }, o.$attrs, {
      "onOpen:popper": c,
      "onClose:popper": d,
      placement: t.placement,
      content: t.content,
      disabled: t.disabled,
      arrow: "",
      hover: ""
    }), {
      content: s(() => [
        l("div", v, [
          o.$slots.content ? (n(), a("div", u, [
            i(o.$slots, "content")
          ])) : (n(), a("div", b, h(t.content), 1))
        ])
      ]),
      default: s(() => [
        l("div", f, [
          i(o.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["placement", "content", "disabled"]));
  }
});
export {
  B as default
};
