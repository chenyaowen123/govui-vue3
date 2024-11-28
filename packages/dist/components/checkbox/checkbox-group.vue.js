import { inject as i, provide as s, reactive as d, toRefs as p, openBlock as f, createElementBlock as b, normalizeClass as g, renderSlot as m } from "vue";
const k = /* @__PURE__ */ Object.assign({
  name: "GovCheckboxGroup"
}, {
  __name: "checkbox-group",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
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
    const o = a, e = i("govFormItem", null), t = n, l = (r) => {
      t("change", r), t("update:modelValue", r), o.triggerForm && (e == null || e.$emit("change"));
    };
    function u() {
      t("focus"), o.triggerForm && (e == null || e.$emit("focus"));
    }
    function c() {
      t("blur"), o.triggerForm && (e == null || e.$emit("blur"));
    }
    return s(
      "govCheckboxGroup",
      d({
        ...p(o),
        updateValue: l
      })
    ), (r, h) => (f(), b("div", {
      class: g(["gov-checkbox-group", { "is-disabled": a.disabled }]),
      tabindex: "0",
      onFocus: u,
      onBlur: c
    }, [
      m(r.$slots, "default")
    ], 34));
  }
});
export {
  k as default
};
