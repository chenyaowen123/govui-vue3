import { ref as i, watchEffect as v, computed as w, openBlock as r, createBlock as y, unref as k, mergeProps as S, withCtx as s, createElementVNode as c, normalizeStyle as _, createElementBlock as l, toDisplayString as g, createCommentVNode as b, renderSlot as u } from "vue";
import N from "../../node_modules/vue3-popper/dist/popper.esm.js";
import C from "./useClickAway.js";
const V = {
  key: 0,
  class: "gov-popper__title"
}, B = {
  key: 1,
  class: "gov-popper__content"
}, P = {
  key: 2,
  class: "gov-popper__slot"
}, j = /* @__PURE__ */ Object.assign({
  name: "GovPopper"
}, {
  __name: "popper",
  props: {
    title: [String, Number],
    modelValue: Boolean,
    content: [String, Number],
    arrow: {
      type: Boolean,
      default: !0
    },
    width: String,
    height: String,
    padding: {
      type: String,
      default: "16px"
    },
    clickAwayClose: {
      type: Boolean,
      default: !0
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => [
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end"
      ].includes(e)
    }
  },
  emits: ["update:modelValue", "toggle", "show", "hide"],
  setup(e, { emit: m }) {
    const t = e, o = m, f = () => {
      o("update:modelValue", !0), o("toggle", !0), o("show");
    }, a = () => {
      o("update:modelValue", !1), o("toggle", !1), o("hide");
    }, p = i(null), d = i(null);
    v(() => {
      t.clickAwayClose && C([p, d], a);
    });
    const h = w(() => ({
      width: t.width ? t.width : void 0,
      height: t.height ? t.height : void 0,
      padding: t.padding ? t.padding : void 0
    }));
    return (n, O) => (r(), y(k(N), S(n.$attrs, {
      placement: e.placement,
      show: e.modelValue,
      arrow: e.arrow,
      "onOpen:popper": f,
      "onClose:popper": a,
      class: "gov-popper"
    }), {
      content: s(() => [
        c("div", {
          class: "gov-popper__wrap",
          style: _(h.value),
          ref_key: "govPopperWrapNode",
          ref: p
        }, [
          e.title ? (r(), l("div", V, g(e.title), 1)) : b("", !0),
          e.content ? (r(), l("div", B, g(e.content), 1)) : (r(), l("div", P, [
            u(n.$slots, "default")
          ]))
        ], 4)
      ]),
      default: s(() => [
        c("div", {
          ref_key: "govPopperTriggerNode",
          ref: d,
          class: "gov-popper__trigger"
        }, [
          u(n.$slots, "reference")
        ], 512)
      ]),
      _: 3
    }, 16, ["placement", "show", "arrow"]));
  }
});
export {
  j as default
};
