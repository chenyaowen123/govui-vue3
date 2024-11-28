import { inject as S, computed as r, openBlock as o, createElementBlock as i, normalizeClass as k, withDirectives as z, createElementVNode as w, mergeProps as C, vModelText as $, toDisplayString as h, createCommentVNode as u } from "vue";
import { useReset as N } from "../utils/useReset.js";
const D = ["rows", "placeholder", "maxlength", "disabled"], E = {
  key: 0,
  class: "gov-textarea__footer"
}, T = { key: 0 }, L = /* @__PURE__ */ Object.assign({
  name: "GovTextarea"
}, {
  __name: "textarea",
  props: {
    modelValue: String,
    rows: {
      type: [Number, String],
      default: 3
    },
    maxlength: [Number, String],
    clearable: Boolean,
    placeholder: String,
    resize: {
      type: Boolean,
      default: !0
    },
    disabled: Boolean,
    // 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
    triggerForm: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "update:modelValue",
    "input",
    "change",
    "focus",
    "blur",
    "clear"
  ],
  setup(a, { emit: m }) {
    const t = a, l = m, e = S("govFormItem", null), s = r({
      get() {
        return t.modelValue;
      },
      set(n) {
        l("update:modelValue", n), l("input"), t.triggerForm && (e == null || e.$emit("input"));
      }
    });
    N(e, t, (n) => {
      l("update:modelValue", n);
    });
    const c = r(() => (t == null ? void 0 : t.disabled) || (e == null ? void 0 : e.disabled)), x = r(() => (e == null ? void 0 : e.validateState) === "error"), b = r(() => s.value.length), d = r(() => t.maxlength || t.clearable), f = r(() => ({
      paddingBottom: d.value ? "20px" : "10px",
      resize: t.resize ? "both" : "none"
    })), p = () => {
      l("change", t.modelValue), t.triggerForm && (e == null || e.$emit("change"));
    }, v = () => {
      l("focus"), t.triggerForm && (e == null || e.$emit("focus"));
    }, V = () => {
      l("blur"), t.triggerForm && (e == null || e.$emit("blur"));
    }, y = () => {
      s.value = "", l("update:modelValue", ""), l("clear");
    };
    return (n, g) => (o(), i("div", {
      class: k(["gov-textarea", [
        {
          "is-resize": a.resize,
          "is-disabled": c.value,
          "is-error": x.value
        }
      ]])
    }, [
      z(w("textarea", C({
        rows: a.rows,
        placeholder: a.placeholder,
        "onUpdate:modelValue": g[0] || (g[0] = (B) => s.value = B),
        maxlength: a.maxlength
      }, n.$attrs, {
        class: "gov-textarea__input",
        style: f.value,
        disabled: c.value,
        onFocus: v,
        onBlur: V,
        onChange: p
      }), null, 16, D), [
        [$, s.value]
      ]),
      d.value ? (o(), i("div", E, [
        a.maxlength ? (o(), i("span", T, h(b.value) + "/" + h(a.maxlength), 1)) : u("", !0),
        a.clearable ? (o(), i("span", {
          key: 1,
          class: "gov-textarea__clear-btn",
          onClick: y
        }, " 清空 ")) : u("", !0)
      ])) : u("", !0)
    ], 2));
  }
});
export {
  L as default
};
