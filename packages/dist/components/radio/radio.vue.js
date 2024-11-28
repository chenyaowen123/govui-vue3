import { inject as c, computed as n, openBlock as b, createElementBlock as f, normalizeClass as S, withDirectives as y, createElementVNode as m, mergeProps as N, vModelRadio as k, renderSlot as D, Fragment as j, createTextVNode as C, toDisplayString as E, createCommentVNode as T } from "vue";
import { useReset as w } from "../utils/useReset.js";
const M = ["disabled"], O = { class: "gov-radio__label" }, q = /* @__PURE__ */ Object.assign({
  name: "GovRadio"
}, {
  __name: "radio",
  props: {
    modelValue: [String, Number],
    size: String,
    label: String,
    border: Boolean,
    disabled: Boolean,
    // 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
    triggerForm: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "change", "blur", "focus"],
  setup(u, { emit: V }) {
    const t = u, s = V, l = c("govFormItem", null), e = c("govRadioGroup", null), i = n(() => e ? !1 : t == null ? void 0 : t.triggerForm), r = n({
      get() {
        return (e == null ? void 0 : e.modelValue) || t.modelValue;
      },
      set(a) {
        e ? e.updateValue(a) : (s("change", a), s("update:modelValue", a), i.value && (l == null || l.$emit("change")));
      }
    });
    w(l, t, (a) => {
      r.value = a;
    });
    const B = n(() => (t == null ? void 0 : t.size) || (e == null ? void 0 : e.size) || (l == null ? void 0 : l.size) || "default"), h = n(() => (t == null ? void 0 : t.border) || (e == null ? void 0 : e.border)), d = n(() => (t == null ? void 0 : t.disabled) || (e == null ? void 0 : e.disabled) || (l == null ? void 0 : l.disabled)), z = n(() => e == null ? void 0 : e.button);
    function _(a) {
      s("focus", a), i.value && (l == null || l.$emit("focus"));
    }
    function $(a) {
      s("blur", a), i.value && (l == null || l.$emit("blur"));
    }
    return (a, o) => (b(), f("label", {
      class: S(["gov-radio", [
        `gov-radio--size-${B.value}`,
        { "is-border": h.value },
        { "is-button": z.value },
        { "is-disabled": d.value }
      ]])
    }, [
      y(m("input", N({
        class: "gov-radio__original",
        type: "radio",
        disabled: d.value
      }, a.$attrs, {
        "onUpdate:modelValue": o[0] || (o[0] = (g) => r.value = g),
        onFocus: _,
        onBlur: $
      }), null, 16, M), [
        [k, r.value]
      ]),
      m("span", O, [
        D(a.$slots, "default"),
        a.$slots.default ? T("", !0) : (b(), f(j, { key: 0 }, [
          C(E(u.label), 1)
        ], 64))
      ])
    ], 2));
  }
});
export {
  q as default
};
