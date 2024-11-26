import { ref as c, provide as b, reactive as f, openBlock as o, createElementBlock as n, createElementVNode as l, Fragment as h, renderList as g, normalizeClass as V, renderSlot as r, createTextVNode as T, toDisplayString as k, createVNode as w, TransitionGroup as y, withCtx as B } from "vue";
const C = { class: "gov-tabs" }, N = { class: "gov-tabs__nav" }, x = ["onClick"], S = { class: "gov-tabs__content" }, $ = { class: "gov-tabs__content-wrap" }, z = /* @__PURE__ */ Object.assign({
  name: "GovTabs"
}, {
  __name: "tabs",
  props: {
    modelValue: [String, Number],
    border: {
      type: Boolean,
      default: !0
    },
    round: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "switch"],
  setup(u, { emit: m }) {
    const a = c(u.modelValue), s = c([]), v = (e) => {
      s.value.map((d) => d.name).includes(e.name) || s.value.push(e);
    }, i = m, _ = (e) => {
      e.disabled || (a.value = e.name, i("update:modelValue", e.name), i("switch", e.name));
    };
    return b(
      "govTabs",
      f({
        active: a,
        addTab: v
      })
    ), (e, d) => (o(), n("div", C, [
      l("div", N, [
        (o(!0), n(h, null, g(s.value, (t, p) => (o(), n("div", {
          key: t.name,
          class: V(["gov-tabs__nav-item", {
            "is-active": a.value === t.name,
            "is-disabled": t.disabled
          }]),
          onClick: (G) => _(t)
        }, [
          r(e.$slots, "nav", {
            tab: t,
            index: p,
            isActive: a.value === t.name
          }, () => [
            T(k(t.label), 1)
          ])
        ], 10, x))), 128))
      ]),
      l("div", S, [
        l("div", $, [
          w(y, { name: "tabs-pane-fade" }, {
            default: B(() => [
              r(e.$slots, "default")
            ]),
            _: 3
          })
        ])
      ])
    ]));
  }
});
export {
  z as default
};
