import { inject as g, computed as s, openBlock as m, createElementBlock as V, normalizeClass as v, createElementVNode as n, withDirectives as p, mergeProps as w, vModelCheckbox as y } from "vue";
import { useReset as z } from "../utils/useReset.js";
const B = { class: "gov-switch__layer" }, $ = ["disabled", "true-value", "false-value"], S = /* @__PURE__ */ Object.assign({
  name: "GovSwitch"
}, {
  __name: "switch",
  props: {
    modelValue: {},
    type: {
      type: String,
      default: "default"
    },
    size: String,
    disabled: Boolean,
    trueValue: {
      default: !0
    },
    falseValue: {
      default: !1
    },
    // 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
    triggerForm: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(a, { emit: c }) {
    const t = a, e = g("govFormItem", null), u = c, d = s({
      get() {
        return t.modelValue;
      },
      set(l) {
        u("change", l), u("update:modelValue", l), t.triggerForm && (e == null || e.$emit("change"));
      }
    });
    z(e, t, (l) => {
      u("update:modelValue", l);
    });
    const o = s(() => (t == null ? void 0 : t.size) || (e == null ? void 0 : e.size)), r = s(() => (t == null ? void 0 : t.disabled) || (e == null ? void 0 : e.disabled));
    function f() {
      u("focus"), t.triggerForm && (e == null || e.$emit("focus"));
    }
    function b() {
      u("blur"), t.triggerForm && (e == null || e.$emit("blur"));
    }
    return (l, i) => (m(), V("div", {
      class: v(["gov-switch", [
        `gov-switch--size-${o.value}`,
        a.type ? "gov-switch--" + a.type : "",
        { "is-disabled": r.value }
      ]]),
      tabindex: "0",
      onFocus: f,
      onBlur: b
    }, [
      n("label", B, [
        p(n("input", w({ type: "checkbox" }, l.$attrs, {
          "onUpdate:modelValue": i[0] || (i[0] = (h) => d.value = h),
          disabled: r.value,
          "true-value": a.trueValue,
          "false-value": a.falseValue
        }), null, 16, $), [
          [y, d.value]
        ]),
        i[1] || (i[1] = n("span", { class: "gov-switch__point" }, null, -1))
      ])
    ], 34));
  }
});
export {
  S as default
};
