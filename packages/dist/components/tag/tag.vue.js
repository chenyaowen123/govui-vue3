import { openBlock as t, createElementBlock as l, normalizeClass as m, renderSlot as o, createBlock as d, createCommentVNode as n, createTextVNode as g, toDisplayString as u, withModifiers as f, createVNode as y } from "vue";
import i from "../icon/icon.vue.js";
const S = /* @__PURE__ */ Object.assign({
  name: "GovTag"
}, {
  __name: "tag",
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
    icon: String,
    closable: Boolean,
    // 关闭按钮
    round: Boolean,
    // 圆角
    fill: Boolean,
    // 是否填充
    text: String,
    size: String
  },
  emits: ["close"],
  setup(e, { emit: s }) {
    const c = s, r = () => {
      c("close");
    };
    return (a, v) => (t(), l("div", {
      class: m(["gov-tag", [
        `gov-tag--size-${e.size}`,
        e.type ? `gov-tag--${e.type}` : "",
        {
          "is-closable": e.closable,
          "is-round": e.round,
          "is-fill": e.fill
        }
      ]])
    }, [
      o(a.$slots, "icon", {}, () => [
        e.icon ? (t(), d(i, {
          key: 0,
          name: e.icon
        }, null, 8, ["name"])) : n("", !0)
      ]),
      o(a.$slots, "default", {}, () => [
        g(u(e.text), 1)
      ]),
      e.closable ? (t(), l("span", {
        key: 0,
        class: "gov-tag__close",
        onClick: f(r, ["stop"])
      }, [
        y(i, { name: "close" })
      ])) : n("", !0)
    ], 2));
  }
});
export {
  S as default
};
