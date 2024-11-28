import { ref as b, computed as l, watchEffect as k, onMounted as z, onBeforeUnmount as S, openBlock as r, createElementBlock as n, createVNode as d, Transition as c, withCtx as m, withModifiers as B, createCommentVNode as f, withDirectives as E, createElementVNode as v, normalizeClass as s, normalizeStyle as N, renderSlot as $, vShow as _ } from "vue";
import x from "../icon/icon.vue.js";
const M = /* @__PURE__ */ Object.assign({
  name: "GovDrawer"
}, {
  __name: "drawer",
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    // 是否有关闭按钮
    hasClose: {
      type: Boolean,
      default: !0
    },
    // 是否显示遮罩层
    modal: {
      type: Boolean,
      default: !0
    },
    // 点击遮罩层是否关闭
    modalClosable: {
      type: Boolean,
      default: !0
    },
    // 自定义class
    customClass: {
      type: String,
      default: ""
    },
    // 方向
    at: {
      type: String,
      default: "right",
      validator(e) {
        return ["left", "right", "top", "bottom"].includes(e);
      }
    },
    // 抽屉大小
    size: {
      type: [Number, String],
      default: "30%"
    }
  },
  emits: [
    "update:modelValue",
    "open",
    "opened",
    "close",
    "closed"
  ],
  setup(e, { emit: w }) {
    const t = e, o = w, a = b(null), p = l(() => ["right", "left"].includes(t.at)), i = l(() => typeof t.size == "number" ? `${t.size}px` : t.size), h = l(() => p.value ? { width: i.value } : { height: i.value }), g = () => {
      o("opened");
    }, y = () => {
      o("closed");
    };
    k(() => {
      o(t.modelValue ? "open" : "close");
    });
    const u = () => {
      o("update:modelValue", !1);
    }, C = () => {
      t.modalClosable && u();
    };
    return z(() => {
      a.value && document.body.appendChild(a.value);
    }), S(() => {
      a.value && a.value.parentNode.removeChild(a.value);
    }), (V, A) => (r(), n("div", {
      class: "gov-drawer",
      ref_key: "drawer",
      ref: a
    }, [
      d(c, { name: "gov-drawer-modal-fade" }, {
        default: m(() => [
          e.modal && e.modelValue ? (r(), n("div", {
            key: 0,
            class: "gov-drawer__modal",
            onClick: B(C, ["stop"])
          })) : f("", !0)
        ]),
        _: 1
      }),
      d(c, {
        name: "gov-drawer-easing",
        onAfterEnter: g,
        onAfterLeave: y
      }, {
        default: m(() => [
          E(v("div", {
            class: s(["gov-drawer__container", [`at-${e.at}`]]),
            style: N(h.value)
          }, [
            v("div", {
              class: s(["gov-drawer__body", [e.customClass]])
            }, [
              $(V.$slots, "default")
            ], 2),
            e.hasClose ? (r(), n("div", {
              key: 0,
              class: s(["gov-drawer__close", [`at-${e.at}`]]),
              onClick: u
            }, [
              d(x, { name: "close" })
            ], 2)) : f("", !0)
          ], 6), [
            [_, e.modelValue]
          ])
        ]),
        _: 3
      })
    ], 512));
  }
});
export {
  M as default
};
