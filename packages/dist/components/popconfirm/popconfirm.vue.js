import { ref as _, openBlock as o, createBlock as k, mergeProps as C, withCtx as i, createElementVNode as f, renderSlot as u, createElementBlock as c, createVNode as a, normalizeStyle as S, createCommentVNode as d, toDisplayString as r, createTextVNode as p } from "vue";
import T from "../popper/popper.vue.js";
import $ from "../icon/icon.vue.js";
import y from "../button/Button.vue.js";
const h = {
  key: 0,
  class: "gov-popconfirm__text"
}, V = {
  key: 0,
  class: "gov-popconfirm__icon"
}, x = {
  key: 1,
  class: "gov-popconfirm__title"
}, N = { key: 1 }, z = { class: "gov-popconfirm__buttons" }, j = /* @__PURE__ */ Object.assign({
  name: "GovPopconfirm"
}, {
  __name: "popconfirm",
  props: {
    title: String,
    icon: String,
    iconColor: String,
    confirmButtonText: {
      type: String,
      default: "确定"
    },
    cancelButtonText: {
      type: String,
      default: "取消"
    },
    confirmButtonType: {
      type: String,
      default: "primary"
    },
    cancelButtonType: {
      type: String,
      default: "text"
    }
  },
  emits: ["update:modelValue", "cancel", "confirm"],
  setup(e, { emit: g }) {
    const s = g, t = _(!1), v = () => {
      t.value = !1, s("cancel");
    }, B = () => {
      t.value = !1, s("confirm");
    };
    return (n, l) => (o(), k(T, C({ modelValue: t.value }, n.$attrs, {
      class: "gov-popconfirm",
      onChange: l[1] || (l[1] = (m) => t.value = m)
    }), {
      reference: i(() => [
        f("div", {
          onClick: l[0] || (l[0] = (m) => t.value = !0),
          class: "gov-popconfirm__reference"
        }, [
          u(n.$slots, "reference")
        ])
      ]),
      default: i(() => [
        n.$slots.default ? (o(), c("div", N, [
          u(n.$slots, "default")
        ])) : (o(), c("div", h, [
          e.icon ? (o(), c("span", V, [
            a($, {
              name: e.icon,
              style: S({ color: e.iconColor })
            }, null, 8, ["name", "style"])
          ])) : d("", !0),
          e.title ? (o(), c("span", x, r(e.title), 1)) : d("", !0)
        ])),
        f("div", z, [
          a(y, {
            size: "small",
            onClick: v,
            type: e.cancelButtonType
          }, {
            default: i(() => [
              p(r(e.cancelButtonText), 1)
            ]),
            _: 1
          }, 8, ["type"]),
          a(y, {
            size: "small",
            onClick: B,
            type: e.confirmButtonType
          }, {
            default: i(() => [
              p(r(e.confirmButtonText), 1)
            ]),
            _: 1
          }, 8, ["type"])
        ])
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
});
export {
  j as default
};
