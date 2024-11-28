import { computed as i, inject as A, openBlock as V, createElementBlock as h, createVNode as m, mergeProps as M, createSlots as w, withCtx as d, renderSlot as o, createElementVNode as g, normalizeClass as $, createCommentVNode as D } from "vue";
import G from "./input.vue.js";
import v from "../icon/icon.vue.js";
import u from "../../node_modules/numeral/numeral.js";
import { useReset as R } from "../utils/useReset.js";
const j = { class: "gov-input-number" }, T = {
  key: 0,
  class: "gov-input-number__buttons"
}, H = /* @__PURE__ */ Object.assign({
  name: "GovInputNumber"
}, {
  __name: "input-number",
  props: {
    modelValue: {},
    min: {
      type: Number,
      default: Number.MIN_SAFE_INTEGER
    },
    max: {
      type: Number,
      default: Number.MAX_SAFE_INTEGER
    },
    step: {
      type: Number,
      default: 1
    },
    format: {
      type: String,
      default: "0,0"
    },
    // 双向绑定值是否为格式化后的
    valueFormat: {
      type: Boolean,
      default: !1
    },
    // 是否显示加减按钮
    controls: {
      type: Boolean,
      default: !1
    },
    prefix: {
      type: [String, Number],
      default: void 0
    },
    size: String,
    disabled: Boolean,
    // 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
    triggerForm: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "update:modelValue",
    "focus",
    "blur",
    "change",
    "input",
    "clear",
    "add",
    "subtract"
  ],
  setup(f, { emit: y }) {
    const e = f, l = y, s = (n) => {
      if (!n && n !== 0)
        return;
      const a = u(n).value(), b = Math.min(Math.max(a, e.min), e.max);
      return e.format && e.valueFormat ? u(b).format(e.format) : u(b).value();
    }, N = i(() => {
      if (!(!e.modelValue && e.modelValue !== 0))
        return e.format ? u(e.modelValue).format(e.format) : u(e.modelValue).value();
    }), t = A("govFormItem", null);
    R(t, e, (n) => {
      const a = s(n);
      l("update:modelValue", a);
    });
    const B = i(() => (e == null ? void 0 : e.size) || (t == null ? void 0 : t.size)), r = i(() => (e == null ? void 0 : e.disabled) || (t == null ? void 0 : t.disabled)), _ = () => {
      l("focus"), e.triggerForm && (t == null || t.$emit("focus"));
    }, k = () => {
      l("blur"), e.triggerForm && (t == null || t.$emit("blur"));
    };
    function C(n) {
      const a = s(n);
      l("update:modelValue", a), l("change", a), e.triggerForm && (t == null || t.$emit("change"));
    }
    function x(n) {
      l("input", n), e.triggerForm && (t == null || t.$emit("input"));
    }
    const E = () => {
      l("clear"), e.triggerForm && (t == null || t.$emit("clear"));
    }, c = i(() => {
      if (r.value) return !0;
      let n = e.modelValue || 0, a = u(n).add(e.step).value();
      return r.value || a > e.max;
    }), p = i(() => {
      if (r.value) return !0;
      let n = e.modelValue || 0, a = u(n).subtract(e.step).value();
      return r.value || a < e.min;
    });
    function S() {
      if (c.value) return;
      const n = u(e.modelValue || 0).add(e.step).value(), a = s(n);
      l("update:modelValue", a), l("change", a), l("add", a), e.triggerForm && (t == null || t.$emit(["change", "add"]));
    }
    function z() {
      if (p.value) return;
      const n = u(e.modelValue || 0).subtract(e.step).value(), a = s(n);
      l("update:modelValue", a), l("change", a), l("subtract", a), e.triggerForm && (t == null || t.$emit(["change", "subtract"]));
    }
    return (n, a) => (V(), h("div", j, [
      m(G, M(n.$attrs, {
        prefix: f.prefix,
        size: B.value,
        disabled: r.value,
        "model-value": N.value,
        onFocus: _,
        onBlur: k,
        onChange: C,
        onInput: x,
        onClear: E,
        triggerForm: !1,
        class: "gov-input-number__input"
      }), w({ _: 2 }, [
        n.$slots.addonBefore ? {
          name: "addonBefore",
          fn: d(() => [
            o(n.$slots, "addonBefore")
          ]),
          key: "0"
        } : void 0,
        n.$slots.addonAfter ? {
          name: "addonAfter",
          fn: d(() => [
            o(n.$slots, "addonAfter")
          ]),
          key: "1"
        } : void 0,
        n.$slots.prefix ? {
          name: "prefix",
          fn: d(() => [
            o(n.$slots, "prefix")
          ]),
          key: "2"
        } : void 0,
        n.$slots.suffix ? {
          name: "suffix",
          fn: d(() => [
            o(n.$slots, "suffix")
          ]),
          key: "3"
        } : void 0
      ]), 1040, ["prefix", "size", "disabled", "model-value"]),
      f.controls ? (V(), h("div", T, [
        g("div", {
          onClick: S,
          class: $([{ "is-disabled": c.value }])
        }, [
          m(v, { name: "plus" })
        ], 2),
        g("div", {
          onClick: z,
          class: $([{ "is-disabled": p.value }])
        }, [
          m(v, { name: "minus" })
        ], 2)
      ])) : D("", !0)
    ]));
  }
});
export {
  H as default
};
