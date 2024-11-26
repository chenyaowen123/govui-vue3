import { provide as n, reactive as p, toRefs as c, openBlock as r, createElementBlock as d, renderSlot as u } from "vue";
const m = { class: "gov-collapse" }, _ = /* @__PURE__ */ Object.assign({
  name: "GovCollapse"
}, {
  __name: "collapse",
  props: {
    modelValue: {
      type: [String, Number],
      default: null
    },
    disabled: Boolean
  },
  emits: ["toggle", "update:modelValue"],
  setup(t, { emit: l }) {
    const a = t, o = l, s = (e) => {
      o("toggle", e), o("update:modelValue", e);
    };
    return n(
      "govCollapse",
      p({
        ...c(a),
        updateValue: s
      })
    ), (e, i) => (r(), d("div", m, [
      u(e.$slots, "default")
    ]));
  }
});
export {
  _ as default
};
