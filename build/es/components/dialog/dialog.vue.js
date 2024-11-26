import { ref as u, onMounted as y, onUnmounted as C, computed as _, watch as k, openBlock as s, createBlock as w, Transition as b, withCtx as V, withDirectives as S, createElementVNode as n, withModifiers as B, normalizeClass as $, normalizeStyle as E, renderSlot as d, toDisplayString as M, createElementBlock as i, createVNode as D, createCommentVNode as r, vShow as N } from "vue";
import O from "../icon/icon.vue.js";
const W = { class: "gov-dialog__header" }, z = { class: "gov-dialog__title" }, A = {
  key: 0,
  class: "gov-dialog__body"
}, L = {
  key: 1,
  class: "gov-dialog__footer"
}, G = /* @__PURE__ */ Object.assign({
  name: "GovDialog"
}, {
  __name: "dialog",
  props: {
    modelValue: Boolean,
    title: {
      type: String,
      default: "提示"
    },
    closeOnClickModal: {
      type: Boolean,
      default: !0
    },
    showClose: {
      type: Boolean,
      default: !0
    },
    width: {
      type: String,
      default: "800px"
    },
    top: {
      type: String,
      default: "15vh"
    },
    fullscreen: Boolean,
    customClass: String,
    beforeClose: Function
  },
  emits: [
    "change",
    "open",
    "opened",
    "close",
    "closed",
    "update:modelValue"
  ],
  setup(t, { emit: f }) {
    const o = t, a = u(null), c = u(!1);
    y(() => {
      c.value = !0, document.body.appendChild(a.value);
    }), C(() => {
      a.value && document.body.contains(a.value) && document.body.removeChild(a.value);
    });
    const m = _(() => {
      let e = {};
      return o.fullscreen || (e.marginTop = o.top, o.width && (e.width = o.width)), e;
    }), l = f, p = () => {
      l("opened");
    }, g = () => {
      l("closed");
    };
    k(
      () => o.modelValue,
      (e) => {
        e === !0 && l("open"), e === !1 && l("close");
      }
    );
    const v = () => {
      o.closeOnClickModal && l("update:modelValue", !1);
    }, h = () => {
      o.beforeClose ? o.beforeClose((e) => {
        e !== !1 && l("update:modelValue", !1);
      }) : l("update:modelValue", !1);
    };
    return (e, T) => (s(), w(b, {
      name: "dialog-fade",
      onAfterEnter: p,
      onAfterLeave: g
    }, {
      default: V(() => [
        S(n("div", {
          class: "gov-dialog__wrapper",
          onClick: B(v, ["self"]),
          ref_key: "dialogWrapper",
          ref: a
        }, [
          n("div", {
            class: $([
              "gov-dialog",
              {
                "is-fullscreen": t.fullscreen
              },
              t.customClass
            ]),
            style: E(m.value)
          }, [
            n("div", W, [
              d(e.$slots, "title", {}, () => [
                n("span", z, M(t.title), 1)
              ]),
              t.showClose ? (s(), i("button", {
                key: 0,
                class: "gov-dialog__headerbtn",
                onClick: h
              }, [
                D(O, { name: "close" })
              ])) : r("", !0)
            ]),
            c.value ? (s(), i("div", A, [
              d(e.$slots, "default")
            ])) : r("", !0),
            e.$slots.footer ? (s(), i("div", L, [
              d(e.$slots, "footer")
            ])) : r("", !0)
          ], 6)
        ], 512), [
          [N, t.modelValue]
        ])
      ]),
      _: 3
    }));
  }
});
export {
  G as default
};
