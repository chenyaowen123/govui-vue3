import { ref as V, computed as s, inject as T, useSlots as G, openBlock as u, createElementBlock as o, normalizeStyle as O, renderSlot as g, createTextVNode as h, toDisplayString as r, createCommentVNode as i, createElementVNode as B, normalizeClass as v, withDirectives as P, vModelDynamic as U, withModifiers as q, createVNode as $, nextTick as H } from "vue";
import k from "../icon/icon.vue.js";
import { useReset as J } from "../utils/useReset.js";
const K = {
  key: 0,
  class: "gov-input-addon gov-input-addon-before"
}, L = {
  key: 0,
  class: "gov-input-prefix"
}, Q = ["type", "placeholder", "maxlength", "disabled", "readonly"], W = {
  key: 1,
  class: "gov-input-suffix"
}, X = {
  key: 2,
  class: "gov-input-count"
}, Y = {
  key: 3,
  class: "gov-input-suffix"
}, Z = {
  key: 1,
  class: "gov-input-addon gov-input-addon-after"
}, ee = /* @__PURE__ */ Object.assign({
  name: "GovInput"
}, {
  __name: "input",
  props: {
    width: {
      type: Number,
      default: null
    },
    size: String,
    addonBefore: [String, Number],
    addonAfter: [String, Number],
    prefix: [String, Number],
    suffix: [String, Number],
    clearable: {
      type: Boolean,
      default: !0
    },
    password: Boolean,
    disabled: Boolean,
    readonly: Boolean,
    placeholder: {
      type: String,
      default: "请输入"
    },
    maxlength: Number,
    count: Boolean,
    modelValue: [String, Number],
    // 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
    triggerForm: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "update:modelValue",
    "clear",
    "input",
    "change",
    "focus",
    "blur"
  ],
  setup(a, { emit: S }) {
    const e = a, x = V(null), f = V(!1), l = S, y = s({
      get() {
        return e.modelValue;
      },
      set(t) {
        l("update:modelValue", t);
      }
    }), n = T("govFormItem", null);
    J(n, e, (t) => {
      l("update:modelValue", t);
    });
    const N = s(() => (e == null ? void 0 : e.size) || (n == null ? void 0 : n.size)), m = s(() => (e == null ? void 0 : e.disabled) || (n == null ? void 0 : n.disabled)), C = s(() => (n == null ? void 0 : n.validateState) === "error"), c = G(), d = {
      prefix: c.prefix || e.prefix !== void 0,
      suffix: c.suffix || e.suffix !== void 0,
      addonBefore: c.addonBefore || e.addonBefore !== void 0,
      addonAfter: c.addonAfter || e.addonAfter !== void 0
    }, b = s(() => !m.value && e.clearable), A = s(() => e.maxlength !== void 0 ? `${e.modelValue ? e.modelValue.length : 0} / ${e.maxlength}` : e.modelValue ? e.modelValue.length : 0), z = s(() => b.value || e.password || e.count || d.suffix);
    function D(t) {
      l("input", t.target.value), e.triggerForm && (n == null || n.$emit("input"));
    }
    function E(t) {
      l("change", t.target.value), e.triggerForm && (n == null || n.$emit("change")), H(() => {
        x.value.value = e.modelValue;
      });
    }
    function R() {
      l("update:modelValue", ""), l("clear"), l("input", ""), l("change", ""), e.triggerForm && (n == null || n.$emit(["clear", "change", "input"]));
    }
    function j(t) {
      l("blur", t), e.triggerForm && (n == null || n.$emit("blur"));
    }
    function M(t) {
      l("focus", t), e.triggerForm && (n == null || n.$emit("focus"));
    }
    return (t, p) => (u(), o("div", {
      class: "gov-input-wrap",
      style: O(a.width ? `width: ${e.width}px;` : "")
    }, [
      d.addonBefore ? (u(), o("span", K, [
        g(t.$slots, "addonBefore", {}, () => [
          h(r(a.addonBefore), 1)
        ])
      ])) : i("", !0),
      B("div", {
        class: v(["gov-input", [
          `gov-input--size-${N.value}`,
          {
            "gov-input--before": d.addonBefore,
            "gov-input--after": d.addonAfter,
            "is-disabled": m.value,
            "is-error": C.value
          }
        ]])
      }, [
        d.prefix ? (u(), o("span", L, [
          g(t.$slots, "prefix", {}, () => [
            h(r(a.prefix), 1)
          ])
        ])) : i("", !0),
        P(B("input", {
          ref_key: "inputRef",
          ref: x,
          class: "gov-input-field",
          type: a.password && !f.value ? "password" : "text",
          "onUpdate:modelValue": p[0] || (p[0] = (w) => y.value = w),
          placeholder: a.placeholder,
          maxlength: a.maxlength,
          disabled: m.value,
          readonly: a.readonly,
          onInput: D,
          onChange: E,
          onFocus: M,
          onBlur: j
        }, null, 40, Q), [
          [U, y.value]
        ]),
        z.value ? (u(), o("span", W, [
          b.value ? (u(), o("span", {
            key: 0,
            class: v(["gov-input-action gov-input-clear", [{ "has-value": a.modelValue || a.modelValue == 0 }]]),
            onClick: q(R, ["stop"])
          }, [
            $(k, { name: "close" })
          ], 2)) : i("", !0),
          a.password ? (u(), o("span", {
            key: 1,
            class: v(["gov-input-action gov-input-password", { "is-active": f.value }]),
            onClick: p[1] || (p[1] = (w) => f.value = !f.value)
          }, [
            $(k, { name: "view" })
          ], 2)) : i("", !0),
          a.count ? (u(), o("span", X, r(A.value), 1)) : i("", !0),
          d.suffix ? (u(), o("span", Y, [
            g(t.$slots, "suffix", {}, () => [
              h(r(a.suffix), 1)
            ])
          ])) : i("", !0)
        ])) : i("", !0)
      ], 2),
      d.addonAfter ? (u(), o("span", Z, [
        g(t.$slots, "addonAfter", {}, () => [
          h(r(a.addonAfter), 1)
        ])
      ])) : i("", !0)
    ], 4));
  }
});
export {
  ee as default
};
