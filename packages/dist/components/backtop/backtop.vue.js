import { ref as r, onMounted as g, onBeforeUnmount as b, computed as h, openBlock as w, createBlock as y, Transition as k, withCtx as _, withDirectives as B, createElementVNode as d, normalizeStyle as S, withModifiers as E, renderSlot as T, createVNode as N, vShow as x } from "vue";
import H from "../icon/icon.vue.js";
const C = { class: "gov-backtop__default" }, z = /* @__PURE__ */ Object.assign({
  name: "GovBacktop"
}, {
  __name: "backtop",
  props: {
    visibilityHeight: {
      type: Number,
      default: 200
    },
    target: {
      type: String,
      default: ""
    },
    right: {
      type: [Number, String],
      default: 40
    },
    bottom: {
      type: [Number, String],
      default: 40
    },
    zIndex: {
      type: Number,
      default: 2e3
    },
    appendToBody: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["backtop"],
  setup(u, { emit: p }) {
    const t = u, a = r(!1), o = r(null), n = r(null), m = p, s = () => {
      o.value === window ? a.value = window.scrollY >= t.visibilityHeight : a.value = o.value.scrollTop >= t.visibilityHeight;
    }, v = () => {
      o.value === window ? window.scrollTo({
        top: 0,
        behavior: "smooth"
      }) : o.value.scrollTo({
        top: 0,
        behavior: "smooth"
      }), m("backtop");
    }, l = () => {
      typeof window.requestAnimationFrame == "function" && requestAnimationFrame(s);
    };
    function c(e) {
      return e && e.tagName !== "BODY" && e.tagName !== "HTML" ? e.scrollHeight > e.clientHeight ? e : c(e.parentElement) : null;
    }
    g(() => {
      var i;
      const e = t.target ? document.querySelector(t.target) : c((i = n.value) == null ? void 0 : i.parentElement);
      e ? (o.value = e, e.addEventListener("scroll", l)) : (o.value = window, window.addEventListener("scroll", l)), s(), t.appendToBody && n.value && document.body.appendChild(n.value);
    }), b(() => {
      o.value === window ? window.removeEventListener("scroll", l) : o.value.removeEventListener(
        "scroll",
        l
      ), t.appendToBody && n.value && document.body.removeChild(n.value);
    });
    const f = h(() => ({
      right: `${parseInt(t.right)}px`,
      bottom: `${parseInt(t.bottom)}px`,
      zIndex: t.zIndex
    }));
    return (e, i) => (w(), y(k, { name: "gov-backtop-fade-in" }, {
      default: _(() => [
        B(d("div", {
          style: S(f.value),
          class: "gov-backtop",
          onClick: E(v, ["stop"]),
          ref_key: "govBacktopRef",
          ref: n
        }, [
          T(e.$slots, "default", {}, () => [
            d("div", C, [
              N(H, { name: "arrow-up" })
            ])
          ])
        ], 4), [
          [x, a.value]
        ])
      ]),
      _: 3
    }));
  }
});
export {
  z as default
};
