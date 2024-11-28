import { ref as k, onMounted as g, openBlock as a, createBlock as n, withCtx as o, createElementVNode as s, createTextVNode as i, toDisplayString as u, createCommentVNode as d } from "vue";
import B from "../dialog/dialog.vue.js";
import f from "../button/Button.vue.js";
const b = ["innerHTML"], p = { class: "gov-messagebox__footer" }, V = /* @__PURE__ */ Object.assign({
  name: "GovMessageBox"
}, {
  __name: "message-box",
  props: {
    title: {
      type: String,
      default: "提示"
    },
    show: Boolean,
    width: {
      type: String,
      default: "450px"
    },
    content: {
      type: String,
      default: ""
    },
    showCancelButton: {
      type: Boolean,
      default: !0
    },
    showConfirmButton: {
      type: Boolean,
      default: !0
    },
    cancelButtonText: {
      type: String,
      default: "取消"
    },
    confirmButtonText: {
      type: String,
      default: "确定"
    },
    cancelCallback: {
      type: Function,
      default: () => {
      }
    },
    confirmCallback: {
      type: Function,
      default: () => {
      }
    },
    closeCallback: {
      type: Function,
      default: () => {
      }
    },
    closedCallback: {
      type: Function,
      default: () => {
      }
    }
  },
  setup(e) {
    const l = e, t = k(!1);
    g(() => {
      t.value = !0;
    });
    const r = () => {
      t.value = !1, l.cancelCallback();
    }, m = () => {
      t.value = !1, l.confirmCallback();
    }, C = () => {
      t.value = !1, l.closeCallback();
    }, h = () => {
      l.closedCallback();
    };
    return (x, c) => (a(), n(B, {
      modelValue: t.value,
      "onUpdate:modelValue": c[0] || (c[0] = (y) => t.value = y),
      title: e.title,
      width: e.width,
      closeOnClickModal: !1,
      onClose: C,
      onClosed: h,
      top: "30vh"
    }, {
      footer: o(() => [
        s("div", p, [
          e.showCancelButton ? (a(), n(f, {
            key: 0,
            size: "small",
            onClick: r
          }, {
            default: o(() => [
              i(u(e.cancelButtonText), 1)
            ]),
            _: 1
          })) : d("", !0),
          e.showConfirmButton ? (a(), n(f, {
            key: 1,
            size: "small",
            type: "primary",
            onClick: m
          }, {
            default: o(() => [
              i(u(e.confirmButtonText), 1)
            ]),
            _: 1
          })) : d("", !0)
        ])
      ]),
      default: o(() => [
        s("div", {
          class: "gov-messagebox__content",
          innerHTML: e.content
        }, null, 8, b)
      ]),
      _: 1
    }, 8, ["modelValue", "title", "width"]));
  }
});
export {
  V as default
};
