import { inject as o, computed as a, openBlock as b, createElementBlock as f, normalizeClass as S, withDirectives as _, createElementVNode as m, mergeProps as y, vModelCheckbox as x, renderSlot as D, Fragment as N, createTextVNode as j, toDisplayString as v, createCommentVNode as E } from "vue";
import { useReset as T } from "../utils/useReset.js";
const w = ["disabled"], M = { class: "gov-checkbox__label" }, R = /* @__PURE__ */ Object.assign({
  name: "GovCheckbox"
}, {
  __name: "checkbox",
  props: {
    modelValue: {
      default: void 0
    },
    size: String,
    label: String,
    border: Boolean,
    disabled: Boolean,
    indeterminate: Boolean,
    // 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
    triggerForm: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "change", "blur", "focus"],
  setup(s, { emit: V }) {
    const l = s, i = V, t = o("govFormItem", null), e = o("govCheckboxGroup", null), u = a(() => e ? !1 : l == null ? void 0 : l.triggerForm), d = a({
      get() {
        return e ? e.modelValue || [] : l.modelValue;
      },
      set(n) {
        e ? e.updateValue(n) : (i("change", n), i("update:modelValue", n), u.value && (t == null || t.$emit("change")));
      }
    });
    T(t, l, (n) => {
      d.value = n;
    });
    const h = a(() => (l == null ? void 0 : l.size) || (e == null ? void 0 : e.size) || (t == null ? void 0 : t.size) || "default"), B = a(() => (l == null ? void 0 : l.border) || (e == null ? void 0 : e.border)), r = a(() => (l == null ? void 0 : l.disabled) || (e == null ? void 0 : e.disabled) || (t == null ? void 0 : t.disabled)), g = a(() => e == null ? void 0 : e.button);
    function z(n) {
      i("focus", n), u.value && (t == null || t.$emit("focus"));
    }
    function $(n) {
      i("blur", n), u.value && (t == null || t.$emit("blur"));
    }
    return (n, c) => (b(), f("label", {
      class: S(["gov-checkbox", [
        `gov-checkbox--size-${h.value}`,
        { "is-border": B.value },
        { "is-button": g.value },
        { "is-disabled": r.value }
      ]])
    }, [
      _(m("input", y({
        class: ["gov-checkbox__original", { "is-indeterminate": s.indeterminate }],
        type: "checkbox",
        disabled: r.value
      }, n.$attrs, {
        "onUpdate:modelValue": c[0] || (c[0] = (k) => d.value = k),
        onFocus: z,
        onBlur: $
      }), null, 16, w), [
        [x, d.value]
      ]),
      m("span", M, [
        D(n.$slots, "default"),
        n.$slots.default ? E("", !0) : (b(), f(N, { key: 0 }, [
          j(v(s.label), 1)
        ], 64))
      ])
    ], 2));
  }
});
export {
  R as default
};
