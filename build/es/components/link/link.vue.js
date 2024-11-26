import { resolveComponent as u, openBlock as t, createElementBlock as o, mergeProps as m, createBlock as f, createCommentVNode as a, renderSlot as k, createElementVNode as g } from "vue";
const v = ["href"], b = {
  key: 1,
  class: "gov-link--inner"
}, y = /* @__PURE__ */ Object.assign({
  name: "GovLink"
}, {
  __name: "link",
  props: {
    type: {
      type: String,
      default: "default"
    },
    underline: {
      type: Boolean,
      default: !0
    },
    disabled: Boolean,
    href: String,
    icon: String
  },
  emits: ["click"],
  setup(e, { emit: s }) {
    const l = e, c = s, d = (n) => {
      l.disabled || l.href || c("click", n);
    };
    return (n, i) => {
      const r = u("GovIcon");
      return t(), o("a", m({
        class: [
          "gov-link",
          e.type ? `gov-link--${e.type}` : "",
          e.disabled && "is-disabled",
          e.underline && !e.disabled && "is-underline"
        ],
        href: e.disabled ? null : e.href
      }, n.$attrs, { onClick: d }), [
        e.icon ? (t(), f(r, {
          key: 0,
          name: e.icon
        }, null, 8, ["name"])) : a("", !0),
        n.$slots.default ? (t(), o("span", b, [
          k(n.$slots, "default")
        ])) : a("", !0),
        i[0] || (i[0] = g("i", { class: "gov-link-line" }, null, -1))
      ], 16, v);
    };
  }
});
export {
  y as default
};
