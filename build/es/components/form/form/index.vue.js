import { provide as n, reactive as d, toRefs as m, openBlock as c, createBlock as f, mergeProps as u, withCtx as b, renderSlot as g } from "vue";
import { useFields as v } from "./useFields.js";
import { useValidation as F } from "./useValidation.js";
import $ from "../../grid/row/index.vue.js";
const x = /* @__PURE__ */ Object.assign({
  name: "GovForm"
}, {
  __name: "index",
  props: {
    model: {},
    rules: {},
    size: String,
    labelPosition: String,
    labelWidth: [String, Number],
    disabled: Boolean
  },
  setup(e, { expose: s }) {
    const o = e, { fields: t, addField: l, removeField: a } = v(), r = F(o, t);
    return s(r), n(
      "govForm",
      d({
        ...m(o),
        addField: l,
        removeField: a
      })
    ), (i, p) => (c(), f($, u(i.$attrs, {
      class: ["gov-form", [
        e.size && `gov-form--size-${e.size}`,
        e.labelPosition && `gov-form--label-${e.labelPosition}`,
        { "is-disabled": e.disabled }
      ]]
    }), {
      default: b(() => [
        g(i.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  x as default
};
