import { inject as $, computed as f, ref as B, openBlock as o, createElementBlock as c, normalizeClass as v, Fragment as _, renderList as h, createElementVNode as x, normalizeStyle as C, renderSlot as R, createBlock as g } from "vue";
import b from "../icon/icon.vue.js";
import { useReset as M } from "../utils/useReset.js";
const N = ["onClick", "onMouseover"], E = /* @__PURE__ */ Object.assign({
  name: "GovRate"
}, {
  __name: "rate",
  props: {
    modelValue: Number,
    max: {
      type: Number,
      default: 5
    },
    disabled: Boolean,
    iconColor: {
      type: String,
      default: "#f5a623"
    },
    // 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
    triggerForm: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(s, { emit: p }) {
    const t = s, e = $("govFormItem", null), a = p;
    M(e, t, (l) => {
      a("update:modelValue", l);
    });
    const r = f(() => (t == null ? void 0 : t.disabled) || (e == null ? void 0 : e.disabled)), u = B(null), i = f(() => r.value ? t.modelValue : u.value !== null ? u.value : t.modelValue), k = (l) => {
      r.value || (a("change", l), a("update:modelValue", l), t.triggerForm && (e == null || e.$emit("change")));
    };
    function y() {
      a("focus"), t.triggerForm && (e == null || e.$emit("focus"));
    }
    function V() {
      a("blur"), t.triggerForm && (e == null || e.$emit("blur"));
    }
    return (l, d) => (o(), c("div", {
      class: v(["gov-rate", { "is-disabled": r.value }]),
      tabindex: "0",
      onFocus: y,
      onBlur: V
    }, [
      (o(!0), c(_, null, h(s.max, (n) => (o(), c("span", {
        key: n,
        class: "gov-rate__item",
        onClick: (m) => k(n),
        onMouseover: (m) => !r.value && (u.value = n),
        onMouseleave: d[0] || (d[0] = (m) => u.value = null)
      }, [
        x("span", {
          class: v(["gov-rate__icon", { "is-active": n <= i.value }]),
          style: C({ color: s.iconColor })
        }, [
          R(l.$slots, "icon", {
            index: n,
            isActive: n <= i.value
          }, () => [
            n <= i.value ? (o(), g(b, {
              key: 0,
              name: "star-on"
            })) : (o(), g(b, {
              key: 1,
              name: "star-off"
            }))
          ])
        ], 6)
      ], 40, N))), 128))
    ], 34));
  }
});
export {
  E as default
};
