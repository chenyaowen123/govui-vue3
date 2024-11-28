import { inject as C, computed as n, openBlock as c, createElementBlock as a, Fragment as b, createCommentVNode as d, createElementVNode as h, normalizeClass as B, withModifiers as v, createBlock as z, renderSlot as S, createTextVNode as A, toDisplayString as V } from "vue";
import y from "../icon/icon.vue.js";
const N = {
  key: 0,
  class: "gov-dropdown-divided"
}, E = /* @__PURE__ */ Object.assign({
  name: "GovDropdownItem"
}, {
  __name: "dropdown-item",
  props: {
    divided: Boolean,
    disabled: Boolean,
    icon: String,
    content: String,
    size: String,
    center: Boolean,
    hideAfterClick: Boolean
    // 点击后隐藏
  },
  emits: ["click"],
  setup(i, { emit: s }) {
    const t = i, e = C("govDropdown", null), r = n(() => (t == null ? void 0 : t.size) || (e == null ? void 0 : e.size)), l = n(() => (t == null ? void 0 : t.disabled) || (e == null ? void 0 : e.disabled)), o = n(() => (t == null ? void 0 : t.center) || (e == null ? void 0 : e.center)), m = n(() => (t == null ? void 0 : t.hideAfterClick) || (e == null ? void 0 : e.hideAfterClick)), u = s;
    function f() {
      l.value || (u("click"), m.value && (e == null || e.updateVisible(!1)));
    }
    return (k, $) => (c(), a(b, null, [
      i.divided ? (c(), a("div", N)) : d("", !0),
      h("div", {
        class: B(["gov-dropdown-item", [
          `gov-dropdown-item--size-${r.value}`,
          { "is-disabled": l.value, "is-center": o.value }
        ]]),
        onClick: v(f, ["stop"])
      }, [
        i.icon ? (c(), z(y, {
          key: 0,
          name: i.icon
        }, null, 8, ["name"])) : d("", !0),
        S(k.$slots, "default", {}, () => [
          A(V(i.content), 1)
        ])
      ], 2)
    ], 64));
  }
});
export {
  E as default
};
