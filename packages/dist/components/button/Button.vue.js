import { inject as m, computed as c, openBlock as l, createElementBlock as u, normalizeClass as y, createBlock as d, createCommentVNode as i, renderSlot as B, createTextVNode as k, toDisplayString as S } from "vue";
import s from "../icon/icon.vue.js";
const v = ["disabled", "autofocus", "type"], z = { key: 2 }, T = /* @__PURE__ */ Object.assign({
  name: "GovButton"
}, {
  __name: "Button",
  props: {
    type: {
      type: String,
      default: "default"
    },
    label: String,
    size: String,
    icon: {
      type: String,
      default: ""
    },
    nativeType: {
      type: String,
      default: "button"
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  emits: ["click"],
  setup(e, { emit: r }) {
    const t = e, n = m("govFormItem", null), b = c(() => (t == null ? void 0 : t.size) || (n == null ? void 0 : n.size)), o = c(() => (t == null ? void 0 : t.disabled) || (n == null ? void 0 : n.disabled)), f = r, g = (a) => {
      f("click", a);
    };
    return (a, h) => (l(), u("button", {
      class: y(["gov-button", [
        e.type ? "gov-button--" + e.type : "",
        `gov-button--size-${b.value}`,
        {
          "is-disabled": o.value,
          "is-loading": e.loading,
          "is-plain": e.plain,
          "is-round": e.round,
          "is-circle": e.circle
        }
      ]]),
      onClick: g,
      disabled: o.value || e.loading,
      autofocus: e.autofocus,
      type: e.nativeType
    }, [
      e.loading ? (l(), d(s, {
        key: 0,
        name: "loading"
      })) : i("", !0),
      e.icon && !e.loading ? (l(), d(s, {
        key: 1,
        name: e.icon
      }, null, 8, ["name"])) : i("", !0),
      a.$slots.default || e.label ? (l(), u("span", z, [
        B(a.$slots, "default", {}, () => [
          k(S(e.label), 1)
        ])
      ])) : i("", !0)
    ], 10, v));
  }
});
export {
  T as default
};
