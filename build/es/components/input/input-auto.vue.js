import { ref as m, computed as g, inject as z, openBlock as p, createBlock as A, mergeProps as h, withCtx as r, createVNode as N, createSlots as j, renderSlot as s, createElementVNode as w, createElementBlock as $, Fragment as D, renderList as E, createTextVNode as F, toDisplayString as H } from "vue";
import K from "./input.vue.js";
import P from "../popper/popper.vue.js";
import { useReset as U } from "../utils/useReset.js";
const G = { class: "gov-input-auto__list" }, L = ["onClick"], q = /* @__PURE__ */ Object.assign({
  name: "GovInputAuto"
}, {
  __name: "input-auto",
  props: {
    modelValue: String,
    // 绑定在输入框的值
    fetch: Function,
    // 获取数据的函数，返回一个数组，元素必须是字符串或者对象
    valueKey: {
      type: String,
      default: "value"
      // 显示在input里的值，当fetch返回为对象时有效。
    },
    popperHeight: {
      type: String,
      default: "200px"
    },
    size: String,
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
    "select",
    "focus",
    "blur",
    "clear"
  ],
  setup(d, { emit: V }) {
    const l = d, u = m(!1), i = m([]), n = V, f = g(() => l.fetch || (() => Promise.resolve([]))), c = g({
      get() {
        return l.modelValue;
      },
      set(e) {
        n("update:modelValue", e);
      }
    }), t = z("govFormItem", null);
    U(t, l, (e) => {
      n("update:modelValue", e);
    });
    const v = (e) => {
      i.value = f.value(e), u.value = !0, n("input", e), l.triggerForm && (t == null || t.$emit("input"));
    }, y = (e) => {
      n("change", e), l.triggerForm && (t == null || t.$emit("change"));
    }, k = () => {
      i.value = f.value(l.modelValue), u.value = !0, n("focus"), l.triggerForm && (t == null || t.$emit("focus"));
    }, B = () => {
      i.value = f.value(l.modelValue), u.value = !1, n("blur"), l.triggerForm && (t == null || t.$emit("blur"));
    }, C = () => {
      n("clear"), l.triggerForm && (t == null || t.$emit("clear"));
    }, S = (e) => {
      let a = e;
      typeof e != "string" && (a = e[l.valueKey]), u.value = !1, n("select", e), n("update:modelValue", a), n("input", a), l.triggerForm && (t == null || t.$emit(["select", "input"]));
    };
    return (e, a) => (p(), A(P, h({
      modelValue: u.value,
      "onUpdate:modelValue": a[1] || (a[1] = (o) => u.value = o),
      height: d.popperHeight,
      padding: "0"
    }, e.$attrs, {
      placement: "bottom-start",
      class: "gov-input-auto"
    }), {
      reference: r(() => [
        N(K, h({
          modelValue: c.value,
          "onUpdate:modelValue": a[0] || (a[0] = (o) => c.value = o)
        }, e.$attrs, {
          onFocus: k,
          onBlur: B,
          onInput: v,
          onChange: y,
          onClear: C,
          size: d.size,
          triggerForm: !1
        }), j({ _: 2 }, [
          e.$slots.addonBefore ? {
            name: "addonBefore",
            fn: r(() => [
              s(e.$slots, "addonBefore")
            ]),
            key: "0"
          } : void 0,
          e.$slots.addonAfter ? {
            name: "addonAfter",
            fn: r(() => [
              s(e.$slots, "addonAfter")
            ]),
            key: "1"
          } : void 0,
          e.$slots.prefix ? {
            name: "prefix",
            fn: r(() => [
              s(e.$slots, "prefix")
            ]),
            key: "2"
          } : void 0,
          e.$slots.suffix ? {
            name: "suffix",
            fn: r(() => [
              s(e.$slots, "suffix")
            ]),
            key: "3"
          } : void 0
        ]), 1040, ["modelValue", "size"])
      ]),
      default: r(() => [
        w("div", G, [
          (p(!0), $(D, null, E(i.value, (o, b) => (p(), $("div", {
            class: "gov-input-auto__li",
            key: b,
            onClick: (O) => S(o)
          }, [
            s(e.$slots, "default", { item: o }, () => [
              F(H(o), 1)
            ])
          ], 8, L))), 128))
        ])
      ]),
      _: 3
    }, 16, ["modelValue", "height"]));
  }
});
export {
  q as default
};
