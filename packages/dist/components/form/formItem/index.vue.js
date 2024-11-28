import { inject as N, provide as V, reactive as k, openBlock as c, createBlock as L, mergeProps as B, unref as t, withCtx as u, createElementVNode as a, normalizeClass as M, normalizeStyle as j, createElementBlock as $, createCommentVNode as h, renderSlot as f, toDisplayString as S, createVNode as C, Transition as P, createTextVNode as T } from "vue";
import { useManageFieldToForm as q } from "./useManageFieldToForm.js";
import { useState as w } from "./useState.js";
import { useValidation as x } from "./useValidation.js";
import { useListenerManager as D } from "./listenerManager.js";
import E from "../../grid/col/index.vue.js";
const I = {
  key: 0,
  class: "gov-form-item__label-required"
}, O = { class: "gov-form-item__label-txt" }, W = { class: "gov-form-item__content" }, R = { class: "gov-form-item__body" }, A = { class: "gov-form-item__validate" }, G = {
  key: 0,
  class: "gov-form-item__validate-body"
}, Z = /* @__PURE__ */ Object.assign({
  name: "govFormItem"
}, {
  __name: "index",
  props: {
    prop: String,
    // 表单域 model 字段
    label: String,
    rules: Object,
    // 表单验证规则，可以是 Object，也可以是 Array
    labelPosition: String,
    labelWidth: [String, Number],
    size: String,
    disabled: Boolean,
    // 提供给col的 span，默认是24
    span: {
      type: Number,
      default: 24,
      validator: (o) => o === void 0 || o >= 0 && o <= 24
    }
  },
  setup(o, { expose: y }) {
    const r = o, l = N("govForm", null), { innerSize: n, innerDisabled: v, innerLabelPosition: g, innerLabelWidth: F } = w(r, l), s = D(), {
      isRequired: z,
      validateState: m,
      validateMessage: _,
      validate: d,
      clearValidate: b,
      resetField: p
    } = x(r, l, s);
    return q(r, l, {
      validate: d,
      clearValidate: b,
      resetField: p
    }), s.on("*", (e) => {
      d(e, () => {
      });
    }), y({
      validate: d,
      clearValidate: b,
      resetField: p
    }), V(
      "govFormItem",
      k({
        size: n,
        disabled: v,
        validateState: m,
        validateMessage: _,
        ...{
          $on(e, i) {
            s.on(e, i);
          },
          $off(e, i) {
            s.off(e, i);
          },
          $emit(e, i) {
            s.emit(e, i);
          }
        }
      })
    ), (e, i) => (c(), L(E, B(e.$attrs, {
      span: o.span,
      class: ["gov-form-item", [
        t(n) && `gov-form-item--size-${t(n)}`,
        t(g) && `gov-form-item--label-${t(g)}`,
        `is-${t(m)}`,
        { "is-disabled": t(v) }
      ]]
    }), {
      default: u(() => [
        a("div", {
          class: M(["gov-form-item__label", { "is-empty": !o.label && !e.$slots.label }]),
          style: j({ width: t(F) })
        }, [
          t(z) ? (c(), $("span", I, " * ")) : h("", !0),
          f(e.$slots, "label", {}, () => [
            a("span", O, S(o.label), 1)
          ])
        ], 6),
        a("div", W, [
          a("div", R, [
            f(e.$slots, "default")
          ]),
          a("div", A, [
            C(P, { name: "gov-form-validate-fade" }, {
              default: u(() => [
                t(m) === "error" ? (c(), $("div", G, [
                  f(e.$slots, "validate", {}, () => [
                    T(S(t(_)), 1)
                  ])
                ])) : h("", !0)
              ]),
              _: 3
            })
          ])
        ])
      ]),
      _: 3
    }, 16, ["span", "class"]));
  }
});
export {
  Z as default
};
