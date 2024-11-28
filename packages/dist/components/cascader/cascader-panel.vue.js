import { ref as f, computed as g, watchEffect as V, provide as _, reactive as k, openBlock as u, createElementBlock as d, createVNode as y, Fragment as h, renderList as C, createBlock as x, createCommentVNode as P } from "vue";
import m from "./cascader-panel-list.vue.js";
const A = { class: "gov-cascader-panel" }, E = /* @__PURE__ */ Object.assign({
  name: "GovCascaderPanel"
}, {
  __name: "cascader-panel",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["change", "update:modelValue", "expand", "select"],
  setup(i, { emit: v }) {
    const p = i, s = v, a = f([]), o = g(() => a.value.map((t) => t.value));
    return V(() => {
      let t = [], r = p.options, e = [...p.modelValue];
      for (; e.length > 0; ) {
        const n = e.shift(), l = r.find((c) => c.value === n);
        if (l)
          if (t.push(l), l.children && l.children.length)
            r = l.children;
          else
            break;
        else
          break;
      }
      a.value = t;
    }), _(
      "govCascaderPanel",
      k({
        cascaderSelected: a,
        updateCascaderPanelValue: (t, r) => {
          var l;
          let e = [];
          for (let c = 0; c < t; c++)
            a.value[c] !== void 0 && e.push(a.value[c]);
          e.push(r), a.value = e, s("change", o.value, e), s("update:modelValue", o.value);
          let n = e[e.length - 1];
          (l = n == null ? void 0 : n.children) != null && l.length ? s("expand", o.value, e) : s("select", o.value, e);
        }
      })
    ), (t, r) => (u(), d("div", A, [
      y(m, {
        level: 0,
        options: i.options
      }, null, 8, ["options"]),
      (u(!0), d(h, null, C(a.value, (e, n) => (u(), d(h, {
        key: e.value
      }, [
        e.children && e.children.length ? (u(), x(m, {
          key: 0,
          level: n + 1,
          options: e.children
        }, null, 8, ["level", "options"])) : P("", !0)
      ], 64))), 128))
    ]));
  }
});
export {
  E as default
};
