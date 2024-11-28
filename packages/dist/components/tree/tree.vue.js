import { openBlock as d, createElementBlock as o, Fragment as u, renderList as k, createElementVNode as c, withModifiers as S, normalizeClass as E, createBlock as s, createCommentVNode as z, renderSlot as g, createTextVNode as C, toDisplayString as b, createVNode as h, withCtx as x, withDirectives as N, normalizeStyle as $, createSlots as w, vShow as B } from "vue";
import r from "../icon/icon.vue.js";
import L from "../collapse/collapse-transition.vue.js";
const V = { class: "gov-tree" }, T = ["onClick"], A = { class: "gov-tree__icon-box" }, D = { class: "gov-tree__slot-box" }, G = /* @__PURE__ */ Object.assign({
  name: "GovTree"
}, {
  __name: "tree",
  props: {
    data: Array,
    expandeds: Array,
    paddingLeft: {
      type: String,
      default: "20px"
    },
    foldIcon: {
      type: String,
      request: !0,
      default: "caret-right"
      // 折叠时候的icon
    },
    unfoldIcon: String,
    // 展开时的icon，如果设置以后，则图标旋转消失
    nodeIcon: {
      type: String,
      default: null
      // 无子元素节点的icon
    }
  },
  emits: ["update:expandeds", "toggle", "click"],
  setup(t, { emit: I }) {
    const f = t, i = I, a = (e) => f.expandeds.includes(e.id), p = (e) => {
      if (e.children && e.children.length) {
        let l = [...f.expandeds];
        a(e) ? l = l.filter((n) => n !== e.id) : l.push(e.id), i("update:expandeds", l), i("toggle", l, e);
      }
      i("click", e);
    }, v = (e) => {
      i("update:expandeds", e);
    };
    return (e, l) => (d(), o("div", V, [
      (d(!0), o(u, null, k(t.data, (n) => (d(), o("div", {
        key: n.id,
        class: "gov-tree__node"
      }, [
        c("div", {
          onClick: S((m) => p(n), ["stop"]),
          class: E(["gov-tree__label", [
            {
              "is-expanded": a(n),
              "is-animation": !t.unfoldIcon
            }
          ]])
        }, [
          c("span", A, [
            n.children && n.children.length ? (d(), o(u, { key: 0 }, [
              t.unfoldIcon ? (d(), o(u, { key: 0 }, [
                a(n) ? (d(), s(r, {
                  key: 0,
                  name: t.foldIcon,
                  size: "14"
                }, null, 8, ["name"])) : (d(), s(r, {
                  key: 1,
                  name: t.unfoldIcon,
                  size: "14"
                }, null, 8, ["name"]))
              ], 64)) : (d(), s(r, {
                key: 1,
                name: t.foldIcon,
                size: "14"
              }, null, 8, ["name"]))
            ], 64)) : t.nodeIcon ? (d(), s(r, {
              key: 1,
              name: t.nodeIcon,
              size: "14"
            }, null, 8, ["name"])) : z("", !0)
          ]),
          c("div", D, [
            g(e.$slots, "default", {
              node: n,
              isExpanded: a(n)
            }, () => [
              C(b(n.label), 1)
            ])
          ])
        ], 10, T),
        h(L, null, {
          default: x(() => [
            N(c("div", {
              class: "gov-tree__children",
              style: $({ paddingLeft: t.paddingLeft })
            }, [
              h(G, {
                data: n.children,
                foldIcon: t.foldIcon,
                unfoldIcon: t.unfoldIcon,
                nodeIcon: t.nodeIcon,
                expandeds: t.expandeds,
                "onUpdate:expandeds": v
              }, w({ _: 2 }, [
                e.$slots.default ? {
                  name: "default",
                  fn: x(({ node: m, isExpanded: y }) => [
                    g(e.$slots, "default", {
                      node: m,
                      isExpanded: y
                    })
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["data", "foldIcon", "unfoldIcon", "nodeIcon", "expandeds"])
            ], 4), [
              [
                B,
                n.children && n.children.length && a(n)
              ]
            ])
          ]),
          _: 2
        }, 1024)
      ]))), 128))
    ]));
  }
});
export {
  G as default
};
