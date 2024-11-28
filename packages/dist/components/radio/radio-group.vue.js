import { inject as s, provide as d, reactive as c, toRefs as p, openBlock as f, createElementBlock as g, normalizeClass as m, renderSlot as b } from "vue";
const V = /* @__PURE__ */ Object.assign({
  name: "GovRadioGroup"
}, {
  __name: "radio-group",
  props: {
    modelValue: [String, Number],
    border: Boolean,
    size: String,
    button: Boolean,
    disabled: Boolean,
    // 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
    triggerForm: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "change", "blur", "focus"],
  setup(a, { emit: n }) {
    const o = a, e = s("govFormItem", null), r = n, i = (t) => {
      r("change", t), r("update:modelValue", t), o.triggerForm && (e == null || e.$emit("change"));
    };
    function l() {
      r("focus"), o.triggerForm && (e == null || e.$emit("focus"));
    }
    function u() {
      r("blur"), o.triggerForm && (e == null || e.$emit("blur"));
    }
    return d(
      "govRadioGroup",
      c({
        ...p(o),
        updateValue: i
      })
    ), (t, B) => (f(), g("div", {
      class: m(["gov-radio-group", { "is-disabled": a.disabled }]),
      tabindex: "0",
      onFocus: l,
      onBlur: u
    }, [
      b(t.$slots, "default")
    ], 34));
  }
});
export {
  V as default
};
