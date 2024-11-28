import { openBlock as a, createElementBlock as s, normalizeClass as i, createElementVNode as o, renderSlot as n, createTextVNode as l, toDisplayString as c, createCommentVNode as r } from "vue";
const d = { class: "gov-page-container__title-text" }, g = {
  key: 0,
  class: "gov-page-container__title-actions"
}, u = {
  key: 0,
  class: "gov-page-container__before"
}, _ = { class: "gov-page-container__content" }, v = { class: "gov-page-container__content-wrap" }, m = /* @__PURE__ */ Object.assign({
  name: "GovPageContainer"
}, {
  __name: "page-container",
  props: {
    title: {
      type: String,
      default: ""
    },
    titleUnderline: {
      type: Boolean,
      default: !0
    },
    border: {
      type: Boolean,
      default: !0
    },
    round: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    return (e, p) => (a(), s("div", {
      class: i(["gov-page-container", [{ "is-border": t.border, "is-round": t.round }]])
    }, [
      o("div", {
        class: i(["gov-page-container__title", {
          "gov-page-container__title--underline": t.titleUnderline
        }])
      }, [
        o("div", d, [
          n(e.$slots, "title", {}, () => [
            l(c(t.title), 1)
          ])
        ]),
        e.$slots.actions ? (a(), s("div", g, [
          n(e.$slots, "actions")
        ])) : r("", !0)
      ], 2),
      e.$slots.before ? (a(), s("div", u, [
        n(e.$slots, "before")
      ])) : r("", !0),
      o("div", _, [
        o("div", v, [
          n(e.$slots, "default")
        ])
      ])
    ], 2));
  }
});
export {
  m as default
};
