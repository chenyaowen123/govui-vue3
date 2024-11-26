import { computed as m, watch as p, provide as c, reactive as g, toRefs as f, openBlock as b, createBlock as v, mergeProps as V, withCtx as s, renderSlot as n, createElementVNode as w } from "vue";
import B from "../popper/popper.vue.js";
const _ = { class: "gov-dropdown__box" }, k = /* @__PURE__ */ Object.assign({
  name: "GovDropdown"
}, {
  __name: "dropdown",
  props: {
    modelValue: Boolean,
    disabled: Boolean,
    center: Boolean,
    hideAfterClick: Boolean,
    // 点击后隐藏
    size: String
  },
  emits: ["update:modelValue", "toggle"],
  setup(d, { emit: r }) {
    const l = d, a = r, o = m({
      get() {
        return l.modelValue;
      },
      set(e) {
        a("toggle", e), a("update:modelValue", e);
      }
    });
    p(
      () => l.disabled,
      () => {
        o.value = !1;
      }
    );
    const i = (e) => {
      o.value = e;
    };
    return c(
      "govDropdown",
      g({
        ...f(l),
        updateVisible: i
      })
    ), (e, t) => (b(), v(B, V({
      modelValue: o.value,
      "onUpdate:modelValue": t[0] || (t[0] = (u) => o.value = u),
      disabled: d.disabled,
      padding: "0"
    }, e.$attrs, {
      class: ["gov-dropdown", [{ "is-disabled": d.disabled }]]
    }), {
      reference: s(() => [
        n(e.$slots, "default")
      ]),
      default: s(() => [
        w("div", _, [
          n(e.$slots, "dropdown")
        ])
      ]),
      _: 3
    }, 16, ["modelValue", "disabled", "class"]));
  }
});
export {
  k as default
};
