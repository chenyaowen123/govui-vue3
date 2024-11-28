import { ref as y, computed as c, watch as T, watchEffect as z, openBlock as n, createElementBlock as s, createElementVNode as v, normalizeStyle as V, normalizeClass as g, createVNode as b, createCommentVNode as f, Fragment as x, renderList as k, createTextVNode as $, toDisplayString as w, renderSlot as D } from "vue";
import { useStickyTable as R } from "./useStickyTable.js";
import N from "../checkbox/checkbox.vue.js";
import U from "../icon/icon.vue.js";
const j = { class: "gov-table-wrap" }, q = { class: "gov-table-tr" }, G = {
  key: 0,
  class: "gov-table-th gov-table-th-selection gov-table-column--fixed-left"
}, L = {
  key: 1,
  class: "gov-table-th gov-table-th-indexed gov-table-column--fixed-left"
}, O = ["width"], W = {
  key: 0,
  class: "gov-table-arrow"
}, H = ["onClick"], J = ["onClick"], M = {
  key: 0,
  class: "gov-table-td gov-table-td-selection gov-table-column--fixed-left"
}, P = {
  key: 1,
  class: "gov-table-td gov-table-td-indexed gov-table-column--fixed-left"
}, ee = /* @__PURE__ */ Object.assign({
  name: "GovTable"
}, {
  __name: "table",
  props: {
    height: String,
    // 当设置了表格高度，表头自动固定顶部，position: sticky;
    rowClassName: Function,
    // 列的class计算，通常用于高亮某个列
    loading: Boolean,
    // 表格是否处于加载状态
    stripe: Boolean,
    // 是否应用斑马线风格的条纹。
    selection: Boolean,
    // 是否显示多选列。多选列是深度联动的，不受分页影响，通常必须设置rowKey，否则计算不准确。
    rowKey: [Function, String],
    // 自定义rowKey用于selection用于选中计算，通常为数据的 id，可设置为一种函数计算，也可以设置为string
    indexed: [Function, Boolean],
    // 自定义索引或者使用默认索引。可以是一个函数，返回值将作为索引，或者是一个布尔值。如果为false，则不展示索引。
    data: {
      type: Array,
      default: () => []
    },
    /**
     * columns配置数组，每个元素包含以下属性：
     * - width: 列的宽度
     * - title: 表头标题
     * - dataIndex: 对应数据数组中数据的key值，用于获取并展示value值
     * - format: 数据格式化函数，默认是原数据格式返回，优先级次于slot
     * - sort: 排序状态，可以是'none'（不排序）、'desc'（降序）或'asc'（升序）
     * - fixed: 固定列的状态，可以是'none'（不固定）、'left'（固定在左侧）或'right'（固定在右侧），采用position: sticky;
     * - align: 对齐方式
     */
    columns: {
      type: Array,
      required: !0
    }
  },
  emits: ["sortChange", "selectionChange"],
  setup(o, { emit: B }) {
    const d = o, m = B, r = y([]), E = c(() => d.height ? { height: d.height } : {}), A = (t, a) => typeof d.indexed == "function" ? d.indexed(t, a) : a + 1, C = c(() => d.data.map((t, a) => (typeof d.indexed == "function" ? t._rowkey = d.rowKey(t, a) : typeof d.indexed == "string" ? t._rowkey = t[d.rowKey] : t._rowkey = a, t))), h = c(() => C.value.map((t) => t._rowkey)), F = c(() => h.value.some(
      (t) => r.value.includes(t)
    )), S = c(() => h.value.every(
      (t) => r.value.includes(t)
    )), K = c(() => F.value && !S.value), p = c({
      get() {
        return S.value;
      },
      set(t) {
        if (t) {
          const a = /* @__PURE__ */ new Set([
            ...r.value,
            ...h.value
          ]);
          r.value = [...a];
        } else
          r.value = r.value.filter(
            (a) => !h.value.includes(a)
          );
      }
    });
    T(r, (t) => {
      m("selectionChange", t);
    });
    const i = y(null);
    z(() => {
      const t = d.columns.reduceRight((a, e) => ["none", "asc", "desc"].includes(e.sort) ? e : a, null);
      t && (i.value = { column: t.dataIndex, sort: t.sort });
    });
    const I = (t, a) => {
      var e, u;
      t === ((e = i.value) == null ? void 0 : e.column) && a === ((u = i.value) == null ? void 0 : u.sort) ? (i.value = null, m("sortChange", null)) : (i.value = { column: t, sort: a }, m("sortChange", { column: t, sort: a }));
    }, _ = y(null);
    return R(_), (t, a) => (n(), s("div", j, [
      v("table", {
        style: V(E.value),
        class: g(["gov-table", [
          {
            "is-striped": o.stripe,
            "is-fixed": !!o.height
          }
        ]]),
        ref_key: "tableEl",
        ref: _
      }, [
        v("thead", null, [
          v("tr", q, [
            o.selection ? (n(), s("th", G, [
              b(N, {
                indeterminate: K.value,
                modelValue: p.value,
                "onUpdate:modelValue": a[0] || (a[0] = (e) => p.value = e)
              }, null, 8, ["indeterminate", "modelValue"])
            ])) : f("", !0),
            o.indexed ? (n(), s("th", L, [
              b(U, { name: "location" })
            ])) : f("", !0),
            (n(!0), s(x, null, k(o.columns, (e) => (n(), s("th", {
              class: g(["gov-table-th", [
                e.align ? `align-${e.align}` : "",
                e.fixed ? `gov-table-column--fixed-${e.fixed}` : ""
              ]]),
              key: e.dataIndex,
              width: e.width,
              style: V(
                e.width ? { minWidth: parseInt(e.width) + "px" } : {}
              )
            }, [
              $(w(e.title) + " ", 1),
              e.sort ? (n(), s("span", W, [
                v("span", {
                  class: g(["gov-table-arrow-up", {
                    active: i.value && i.value.sort === "asc" && i.value.column === e.dataIndex
                  }]),
                  onClick: (u) => I(e.dataIndex, "asc")
                }, null, 10, H),
                v("span", {
                  class: g(["gov-table-arrow-down", {
                    active: i.value && i.value.sort === "desc" && i.value.column === e.dataIndex
                  }]),
                  onClick: (u) => I(e.dataIndex, "desc")
                }, null, 10, J)
              ])) : f("", !0)
            ], 14, O))), 128))
          ])
        ]),
        v("tbody", null, [
          (n(!0), s(x, null, k(C.value, (e, u) => (n(), s("tr", {
            class: g(["gov-table-tr", o.rowClassName ? o.rowClassName(e, u) : ""]),
            key: e._rowkey
          }, [
            o.selection ? (n(), s("td", M, [
              b(N, {
                modelValue: r.value,
                "onUpdate:modelValue": a[1] || (a[1] = (l) => r.value = l),
                value: e._rowkey
              }, null, 8, ["modelValue", "value"])
            ])) : f("", !0),
            o.indexed ? (n(), s("td", P, w(A(e, u)), 1)) : f("", !0),
            (n(!0), s(x, null, k(o.columns, (l) => (n(), s("td", {
              key: l.dataIndex,
              class: g(["gov-table-td", [
                l.align ? `align-${l.align}` : "",
                l.fixed ? `gov-table-column--fixed-${l.fixed}` : ""
              ]])
            }, [
              D(t.$slots, l.dataIndex, { row: e }, () => [
                $(w(l.format ? l.format(
                  e[l.dataIndex],
                  u
                ) : e[l.dataIndex]), 1)
              ])
            ], 2))), 128))
          ], 2))), 128))
        ])
      ], 6)
    ]));
  }
});
export {
  ee as default
};
