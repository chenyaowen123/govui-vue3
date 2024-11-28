import { ref as f, inject as S, computed as p, watch as y, provide as z, reactive as B, toRefs as C, openBlock as w, createBlock as x, mergeProps as k, withCtx as i, createVNode as m, normalizeClass as N, createElementVNode as j, renderSlot as H } from "vue";
import R from "../input/input.vue.js";
import D from "../popper/popper.vue.js";
import E from "../icon/icon.vue.js";
import { useReset as G } from "../utils/useReset.js";
const O = { class: "gov-select__box" }, J = /* @__PURE__ */ Object.assign({
  name: "GovSelect"
}, {
  __name: "select",
  props: {
    modelValue: {
      type: [String, Number],
      default: void 0
      // 绑定在输入框的值
    },
    size: String,
    placeholder: {
      type: String,
      default: "请输入"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    clearable: {
      type: Boolean,
      default: !0
    },
    popperHeight: {
      type: String,
      default: "200px"
    },
    // 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
    triggerForm: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur",
    "clear"
  ],
  setup(s, { emit: g }) {
    const l = s, t = f(!1), n = g, r = f(""), e = S("govFormItem", null);
    G(e, l, (a) => {
      n("update:modelValue", a);
    });
    const h = p(() => (l == null ? void 0 : l.size) || (e == null ? void 0 : e.size)), u = p(() => (l == null ? void 0 : l.disabled) || (e == null ? void 0 : e.disabled)), o = (a) => {
      t.value = !1, n("change", a), n("update:modelValue", a.value), l.triggerForm && (e == null || e.$emit("change"));
    }, d = (a) => {
      r.value = a;
    };
    y(
      () => u.value,
      () => {
        t.value = !1;
      }
    );
    const b = () => {
      u.value || (t.value = !t.value);
    }, v = () => {
      n("focus"), l.triggerForm && (e == null || e.$emit("focus"));
    }, V = () => {
      n("blur"), l.triggerForm && (e == null || e.$emit("blur"));
    }, _ = () => {
      t.value = !1, d(void 0), o({ value: void 0, label: void 0 }), n("clear"), l.triggerForm && (e == null || e.$emit("clear"));
    };
    return z(
      "govSelect",
      B({
        ...C(l),
        updateInputText: d,
        updateValue: o
      })
    ), (a, c) => (w(), x(D, k({
      modelValue: t.value,
      "onUpdate:modelValue": c[0] || (c[0] = ($) => t.value = $),
      height: s.popperHeight,
      padding: "0"
    }, a.$attrs, {
      placement: "bottom-start",
      class: ["gov-select", [{ "is-disabled": u.value }]]
    }), {
      reference: i(() => [
        m(R, {
          class: "gov-select__input",
          modelValue: r.value,
          size: h.value,
          placeholder: s.placeholder,
          disabled: u.value,
          onFocus: v,
          onBlur: V,
          onClear: _,
          onClick: b,
          readonly: "",
          clearable: s.clearable,
          triggerForm: !1
        }, {
          suffix: i(() => [
            m(E, {
              name: "arrow-down",
              class: N(["gov-select__icon", [{ "is-open": t.value }]])
            }, null, 8, ["class"])
          ]),
          _: 1
        }, 8, ["modelValue", "size", "placeholder", "disabled", "clearable"])
      ]),
      default: i(() => [
        j("div", O, [
          H(a.$slots, "default")
        ])
      ]),
      _: 3
    }, 16, ["modelValue", "height", "class"]));
  }
});
export {
  J as default
};
