import { ref as r, computed as T, onMounted as b, onBeforeUnmount as h, openBlock as i, createBlock as c, Transition as L, withCtx as M, withDirectives as S, createElementVNode as u, normalizeClass as E, createVNode as N, renderSlot as O, createCommentVNode as k, vShow as w } from "vue";
import m from "../icon/icon.vue.js";
const A = ["innerHTML"], z = /* @__PURE__ */ Object.assign({
  name: "GovMessage"
}, {
  __name: "message",
  props: {
    message: String,
    // 消息内容
    duration: {
      type: Number,
      default: 3e3
      // 显示时长
    },
    type: {
      type: String,
      default: "default",
      validator: (o) => [
        "default",
        "primary",
        "success",
        "info",
        "warning",
        "danger"
      ].includes(o)
    },
    icon: String,
    // icon名称
    customClass: String,
    // 自定义class
    onBeforeOpen: Function,
    // 打开前
    onOpend: Function,
    // 打开后
    onBeforeClose: Function,
    // 关闭前
    onClosed: Function,
    // 关闭后
    closable: Boolean
    // 是否显示关闭
  },
  setup(o, { expose: f }) {
    const e = o, t = r(!1), a = r(null), d = T(() => e.icon ? e.icon : e.type && !["default", "primary"].includes(e.type) ? e.type : "message-solid");
    b(() => {
      t.value = !0;
    });
    const s = () => {
      e.duration > 0 && (a.value = setTimeout(() => {
        t.value = !1;
      }, e.duration));
    }, v = () => {
      clearTimeout(a.value);
    }, g = () => {
      var n;
      (n = e.onBeforeOpen) == null || n.call(e);
    }, B = () => {
      var n;
      s(), (n = e.onOpend) == null || n.call(e);
    }, y = () => {
      var n;
      (n = e.onBeforeClose) == null || n.call(e);
    }, C = () => {
      var n;
      clearTimeout(a.value), (n = e.onClosed) == null || n.call(e);
    };
    return h(() => {
      clearTimeout(a.value);
    }), f({
      close: () => {
        t.value = !1;
      }
    }), (n, l) => (i(), c(L, {
      name: "gov-message-fade",
      onBeforeEnter: g,
      onBeforeLeave: y,
      onAfterEnter: B,
      onAfterLeave: C
    }, {
      default: M(() => [
        S(u("div", {
          class: E([
            "gov-message",
            `gov-message--${o.type}`,
            o.closable ? "is-closable" : "",
            o.customClass
          ]),
          onMouseenter: v,
          onMouseleave: s
        }, [
          N(m, { name: d.value }, null, 8, ["name"]),
          O(n.$slots, "default", {}, () => [
            u("div", {
              innerHTML: o.message,
              class: "gov-message__content"
            }, null, 8, A)
          ]),
          o.closable ? (i(), c(m, {
            key: 0,
            class: "gov-message__closeBtn",
            name: "close",
            size: "14",
            onClick: l[0] || (l[0] = ($) => t.value = !1)
          })) : k("", !0)
        ], 34), [
          [w, t.value]
        ])
      ]),
      _: 3
    }));
  }
});
export {
  z as default
};
