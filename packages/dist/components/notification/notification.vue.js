import { ref as r, onMounted as S, computed as l, onBeforeUnmount as T, openBlock as u, createBlock as f, Transition as p, withCtx as L, withDirectives as N, createElementVNode as a, normalizeClass as E, createVNode as M, toDisplayString as O, createCommentVNode as k, renderSlot as w, vShow as x } from "vue";
import d from "../icon/icon.vue.js";
const A = { class: "gov-notification__title" }, F = { class: "gov-notification__title-txt" }, $ = ["innerHTML"], W = /* @__PURE__ */ Object.assign({
  name: "GovNotification"
}, {
  __name: "notification",
  props: {
    // 标题
    title: {
      type: String,
      default: "提示"
    },
    content: String,
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
    position: {
      type: String,
      validator: (o) => [
        "top-right",
        "top-left",
        "bottom-right",
        "bottom-left"
      ].includes(o),
      default: "top-right"
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
    // 是否显示关闭
    closable: {
      type: Boolean,
      default: !0
    }
  },
  setup(o, { expose: v }) {
    const e = o, n = r(!1), i = r(null);
    S(() => {
      n.value = !0;
    });
    const m = l(
      () => e.position.endsWith("right") ? "at-right" : "at-left"
    ), g = l(
      () => e.position.startsWith("top") ? "at-top" : "at-bottom"
    ), h = l(() => e.icon ? e.icon : e.type && !["default", "primary"].includes(e.type) ? e.type : "message-solid"), s = () => {
      e.duration > 0 && (i.value = setTimeout(() => {
        n.value = !1;
      }, e.duration));
    }, y = () => {
      clearTimeout(i.value);
    }, B = () => {
      var t;
      (t = e.onBeforeOpen) == null || t.call(e);
    }, C = () => {
      var t;
      s(), (t = e.onOpend) == null || t.call(e);
    }, b = () => {
      var t;
      (t = e.onBeforeClose) == null || t.call(e);
    }, _ = () => {
      var t;
      clearTimeout(i.value), (t = e.onClosed) == null || t.call(e);
    };
    return T(() => {
      clearTimeout(i.value);
    }), v({
      close: () => {
        n.value = !1;
      }
    }), (t, c) => (u(), f(p, {
      name: "gov-notification-fade",
      onBeforeEnter: B,
      onBeforeLeave: b,
      onAfterEnter: C,
      onAfterLeave: _
    }, {
      default: L(() => [
        N(a("div", {
          class: E([
            "gov-notification",
            `gov-notification--${o.type}`,
            o.closable ? "is-closable" : "",
            m.value,
            g.value,
            o.customClass
          ]),
          onMouseenter: y,
          onMouseleave: s
        }, [
          a("div", A, [
            M(d, {
              name: h.value,
              class: "gov-notification__lefticon"
            }, null, 8, ["name"]),
            a("div", F, O(o.title), 1),
            o.closable ? (u(), f(d, {
              key: 0,
              class: "gov-notification__closeBtn",
              name: "close",
              onClick: c[0] || (c[0] = (z) => n.value = !1)
            })) : k("", !0)
          ]),
          w(t.$slots, "default", {}, () => [
            a("div", {
              innerHTML: o.content,
              class: "gov-notification__content"
            }, null, 8, $)
          ])
        ], 34), [
          [x, n.value]
        ])
      ]),
      _: 3
    }));
  }
});
export {
  W as default
};
