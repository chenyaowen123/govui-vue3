import { computed as s, openBlock as t, createBlock as m, resolveDynamicComponent as u, normalizeClass as f, normalizeStyle as d, withCtx as p, createElementBlock as r, renderSlot as o, createVNode as _ } from "vue";
import z from "../icon/icon.vue.js";
const h = ["src"], k = {
  key: 1,
  class: "gov-avatar__icon"
}, y = {
  key: 2,
  class: "gov-avatar__string"
}, b = /* @__PURE__ */ Object.assign({
  name: "GovAvatar"
}, {
  __name: "avatar",
  props: {
    color: String,
    circle: Boolean,
    // 是否为圆形
    size: {
      type: [Number, String],
      default: "default"
      // 设置大小，当为number的时候，应该是px单位的，'small', 'default', 'large',
    },
    dark: Boolean,
    // 深背景
    src: String,
    icon: String,
    href: String,
    // 是否为href链接
    target: {
      type: String,
      default: "_blank"
    }
  },
  emits: ["click"],
  setup(i, { emit: l }) {
    const e = i, c = s(() => ({
      "gov-avatar--circle": e.circle,
      "gov-avatar--square": !e.circle,
      "gov-avatar--dark": e.dark,
      "gov-avatar--size-small": e.size === "small",
      "gov-avatar--size-default": e.size === "default",
      "gov-avatar--size-large": e.size === "large",
      "gov-avatar--size-custom": typeof e.size == "number",
      "gov-avatar--image": e.src
    })), n = s(() => {
      let a = {};
      return typeof e.size == "number" && (a = {
        width: `${e.size}px`,
        height: `${e.size}px`,
        lineHeight: `${e.size}px`,
        fontSize: `${e.size / 2}px`
      }), e.color && (a.backgroundColor = e.color), a;
    }), v = l;
    function g(a) {
      v("click", a);
    }
    return (a, S) => (t(), m(u(e.href ? "a" : "div"), {
      class: f(["gov-avatar", c.value]),
      style: d(n.value),
      href: e.href,
      target: e.target,
      onClick: g
    }, {
      default: p(() => [
        e.src ? (t(), r("img", {
          key: 0,
          src: e.src,
          class: "gov-avatar__image"
        }, null, 8, h)) : e.icon || a.$slots.icon ? (t(), r("span", k, [
          o(a.$slots, "icon", {}, () => [
            _(z, {
              name: e.icon
            }, null, 8, ["name"])
          ])
        ])) : (t(), r("span", y, [
          o(a.$slots, "default")
        ]))
      ]),
      _: 3
    }, 8, ["class", "style", "href", "target"]));
  }
});
export {
  b as default
};
