import { computed as f, openBlock as i, createElementBlock as n, normalizeClass as g, Fragment as d, createElementVNode as o, createCommentVNode as m, renderList as k, toDisplayString as c } from "vue";
const V = ["onClick"], C = /* @__PURE__ */ Object.assign({
  name: "GovPager"
}, {
  __name: "pager",
  props: {
    pages: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Number,
      default: 1
      // 当前分页
    },
    disabled: Boolean,
    background: Boolean
  },
  emits: ["update:modelValue"],
  setup(s, { emit: p }) {
    const e = s, v = p, r = f(() => {
      const a = e.pages.length;
      if (a <= 7)
        return {
          list: e.pages,
          first: !1,
          last: !1
        };
      const t = Math.max(1, e.modelValue - 3), l = Math.min(a, e.modelValue + 3);
      return e.modelValue <= 3 ? {
        list: [1, ...e.pages.slice(1, 6)],
        first: !1,
        last: !0
      } : e.modelValue + 3 >= a ? {
        list: [...e.pages.slice(a - 6, a)],
        first: !0,
        last: !1
      } : {
        list: [...e.pages.slice(t, l)],
        first: !0,
        last: !0
      };
    }), u = (a) => {
      !e.disabled && a !== e.modelValue && v("update:modelValue", a);
    };
    return (a, t) => (i(), n("div", {
      class: g(["gov-pager", { "is-background": s.background, "is-disabled": s.disabled }])
    }, [
      r.value.first ? (i(), n(d, { key: 0 }, [
        o("div", {
          class: "gov-pager__page",
          onClick: t[0] || (t[0] = (l) => u(1))
        }, "1"),
        t[2] || (t[2] = o("div", { class: "gov-pager__ellipsis" }, "...", -1))
      ], 64)) : m("", !0),
      (i(!0), n(d, null, k(r.value.list, (l) => (i(), n("div", {
        key: l,
        class: g(["gov-pager__page", { "is-active": l === s.modelValue }]),
        onClick: (b) => u(l)
      }, c(l), 11, V))), 128)),
      r.value.last ? (i(), n(d, { key: 1 }, [
        t[3] || (t[3] = o("div", { class: "gov-pager__ellipsis" }, "...", -1)),
        o("div", {
          class: "gov-pager__page",
          onClick: t[1] || (t[1] = (l) => u(s.pages.length))
        }, c(s.pages.length), 1)
      ], 64)) : m("", !0)
    ], 2));
  }
});
export {
  C as default
};
