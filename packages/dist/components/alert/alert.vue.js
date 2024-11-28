import { ref as b, useSlots as T, computed as u, openBlock as t, createBlock as o, Transition as w, withCtx as C, withDirectives as $, createElementVNode as s, normalizeClass as i, createCommentVNode as l, createElementBlock as a, renderSlot as v, createTextVNode as g, toDisplayString as m, vShow as p } from "vue";
import f from "../icon/icon.vue.js";
const x = { class: "gov-alert__content" }, D = ["innerHTML"], N = {
  key: 2,
  class: "gov-alert__description"
}, I = /* @__PURE__ */ Object.assign({
  name: "GovAlert"
}, {
  __name: "alert",
  props: {
    title: String,
    description: String,
    type: {
      type: String,
      default: "info",
      validator: (e) => ["info", "success", "warning", "danger"].includes(e)
    },
    plain: Boolean,
    closable: {
      type: Boolean,
      default: !0
    },
    closeText: String,
    showIcon: Boolean,
    center: Boolean
  },
  emits: ["close"],
  setup(e, { emit: h }) {
    const y = e, c = b(!0), k = h, r = T(), S = u(() => r.default && r.default().length > 0), d = u(
      () => y.description || S.value ? "is-big" : ""
    ), B = () => {
      c.value = !1, k("close");
    };
    return (n, V) => (t(), o(w, { name: "gov-alert-fade" }, {
      default: C(() => [
        $(s("div", {
          class: i(["gov-alert", [
            `gov-alert--${e.type}`,
            e.center ? "is-center" : "",
            e.plain ? "is-plain" : ""
          ]])
        }, [
          e.showIcon ? (t(), o(f, {
            key: 0,
            name: e.type,
            class: i(["gov-alert__icon", ["gov-icon-" + e.type, d.value ? "is-big" : ""]])
          }, null, 8, ["name", "class"])) : l("", !0),
          s("div", x, [
            e.title || n.$slots.title ? (t(), a("span", {
              key: 0,
              class: i(["gov-alert__title", { "is-bold": d.value }])
            }, [
              v(n.$slots, "title", {}, () => [
                g(m(e.title), 1)
              ])
            ], 2)) : l("", !0),
            e.description ? (t(), a("div", {
              key: 1,
              innerHTML: e.description,
              class: "gov-alert__description"
            }, null, 8, D)) : l("", !0),
            n.$slots.default && !e.description ? (t(), a("div", N, [
              v(n.$slots, "default")
            ])) : l("", !0),
            s("span", {
              class: "gov-alert__closebtn",
              onClick: B
            }, [
              e.closeText ? l("", !0) : (t(), o(f, {
                key: 0,
                name: "close"
              })),
              g(" " + m(e.closeText), 1)
            ])
          ])
        ], 2), [
          [p, c.value]
        ])
      ]),
      _: 3
    }));
  }
});
export {
  I as default
};
