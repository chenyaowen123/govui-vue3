import { ref as f, watchEffect as g, computed as S, openBlock as o, createElementBlock as u, normalizeClass as C, renderSlot as v, createTextVNode as s, toDisplayString as x, createCommentVNode as p, createVNode as b, withCtx as B, Fragment as N, renderList as $, createBlock as h, createElementVNode as c } from "vue";
import w from "./pager.vue.js";
import P from "../select/select.vue.js";
import E from "../select/select-option.vue.js";
import U from "../input/input-number.vue.js";
const j = {
  key: 0,
  class: "gov-pagination__total"
}, A = {
  key: 1,
  class: "gov-pagination__sizes"
}, D = {
  key: 2,
  class: "gov-pagination__jumper"
}, T = /* @__PURE__ */ Object.assign({
  name: "GovPagination"
}, {
  __name: "pagination",
  props: {
    modelValue: {
      type: Number,
      default: 1
      // 当前页
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    disabled: Boolean,
    background: Boolean,
    plain: Boolean,
    // 朴素模式
    total: {
      type: Number,
      default: 0
    }
  },
  emits: [
    "update:modelValue",
    "update:pageSize",
    "sizeChange",
    "currentChange"
  ],
  setup(l, { emit: V }) {
    const t = l, r = V, d = f(t.pageSize);
    g(() => {
      d.value = t.pageSize;
    }), g(() => {
      let e = d.value;
      e !== t.pageSize && (r("update:pageSize", e), r("sizeChange", e));
    });
    const m = S(() => Array.from(
      { length: Math.ceil(t.total / d.value) },
      (e, a) => a + 1
    )), i = f(t.modelValue), k = (e) => (e < 1 && (e = 1), e > m.value.length && (e = m.value.length), e);
    g(() => {
      i.value = t.modelValue;
    }), g(() => {
      let e = k(i.value);
      e !== t.modelValue && (r("update:modelValue", e), r("currentChange", e));
    });
    const y = () => {
      t.disabled || i.value--;
    }, z = () => {
      t.disabled || i.value++;
    };
    return (e, a) => (o(), u("div", {
      class: C(["gov-pagination", [{ "is-background": l.background, "is-disabled": l.disabled }]])
    }, [
      l.plain ? p("", !0) : (o(), u("div", j, [
        v(e.$slots, "total", { total: l.total }, () => [
          s("共" + x(l.total) + " 条记录", 1)
        ])
      ])),
      l.plain ? p("", !0) : (o(), u("div", A, [
        b(P, {
          modelValue: d.value,
          "onUpdate:modelValue": a[0] || (a[0] = (n) => d.value = n),
          disabled: l.disabled,
          clearable: !1,
          size: "small",
          style: { width: "100px" }
        }, {
          default: B(() => [
            (o(!0), u(N, null, $(l.pageSizes, (n) => (o(), h(E, {
              key: n,
              label: n,
              value: n
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "disabled"])
      ])),
      c("div", {
        class: "gov-pagination__prev",
        onClick: y
      }, [
        v(e.$slots, "prev", {}, () => [
          a[3] || (a[3] = s("«"))
        ])
      ]),
      b(w, {
        pages: m.value,
        modelValue: i.value,
        "onUpdate:modelValue": a[1] || (a[1] = (n) => i.value = n),
        disabled: l.disabled,
        background: l.background
      }, null, 8, ["pages", "modelValue", "disabled", "background"]),
      c("div", {
        class: "gov-pagination__next",
        onClick: z
      }, [
        v(e.$slots, "next", {}, () => [
          a[4] || (a[4] = s("»"))
        ])
      ]),
      l.plain ? p("", !0) : (o(), u("div", D, [
        a[5] || (a[5] = s(" 跳至：")),
        b(U, {
          modelValue: i.value,
          "onUpdate:modelValue": a[2] || (a[2] = (n) => i.value = n),
          step: 1,
          min: 1,
          max: m.value.length,
          clearable: !1,
          disabled: l.disabled,
          size: "small",
          style: { width: "50px" }
        }, null, 8, ["modelValue", "max", "disabled"]),
        a[6] || (a[6] = s(" 页 "))
      ]))
    ], 2));
  }
});
export {
  T as default
};
