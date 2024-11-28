import { inject as D, computed as $, ref as A, openBlock as i, createElementBlock as c, normalizeClass as S, createElementVNode as d, createVNode as x, withCtx as F, createTextVNode as G, toDisplayString as v, mergeProps as L, renderSlot as z, createCommentVNode as p, Fragment as B, renderList as O, createBlock as h, normalizeStyle as P, nextTick as U } from "vue";
import W from "../button/Button.vue.js";
import _ from "../icon/icon.vue.js";
import { useReset as H } from "../utils/useReset.js";
const J = { class: "gov-upload__header" }, K = { class: "gov-upload__label" }, M = ["multiple", "disabled"], Q = {
  key: 0,
  class: "gov-upload__tip-append"
}, X = {
  key: 0,
  class: "gov-upload__tip"
}, Y = { class: "gov-upload__box" }, Z = { class: "gov-upload__status" }, I = { class: "gov-upload__info" }, ee = { class: "gov-upload__view" }, te = ["src"], se = { class: "gov-upload__txt" }, le = ["onClick"], ae = {
  key: 0,
  class: "gov-upload__progress"
}, oe = /* @__PURE__ */ Object.assign({
  name: "GovUpload"
}, {
  __name: "upload",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    size: String,
    disabled: Boolean,
    buttonText: {
      type: String,
      default: "上传文件"
    },
    buttonType: {
      type: String,
      // default: "primary",
      default: "default"
    },
    tip: {
      type: String,
      default: ""
    },
    append: {
      type: String,
      default: ""
    },
    uploadRequest: {
      type: Function,
      default: null
    },
    multiple: {
      type: Boolean,
      default: !1
      // 是否多选
    },
    // 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
    triggerForm: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "update:modelValue",
    "change",
    "delete",
    "focus",
    "blur"
  ],
  setup(r, { emit: T }) {
    const a = r, t = D("govFormItem", null), n = T;
    H(t, a, (l) => {
      n("update:modelValue", l);
    });
    const w = $(() => (a == null ? void 0 : a.size) || (t == null ? void 0 : t.size)), y = $(() => (a == null ? void 0 : a.disabled) || (t == null ? void 0 : t.disabled)), b = A(null), j = () => {
      b.value && !y.value && b.value.click();
    }, g = $({
      get: () => a.modelValue.map((l) => {
        const e = { ...l };
        return e.id || (e.id = Symbol()), e.status || (e.status = "success"), e.name || (e.name = ""), e.type || (e.type = e.url && e.url.match(/\.(jpeg|jpg|gif|png)$/) ? "img" : "file"), ["img", "filex"].includes(e.type) || (e.type = "file"), e.progress === void 0 && (e.progress = 0), !e.url && !e.id && (e.status = "failed"), e;
      }),
      set: (l) => {
        n("change", l), n("update:modelValue", l), a.triggerForm && (t == null || t.$emit("change"));
      }
    }), k = (l, e) => {
      const s = g.value.findIndex(
        (o) => o.id === l
      );
      if (s !== -1) {
        const o = [...g.value];
        e(o[s]), n("update:modelValue", o);
      }
    }, E = (l) => {
      const e = l.target.files, s = Array.from(e).map((u) => ({
        id: Symbol(),
        status: "pending",
        name: u.name,
        type: u.type.startsWith("image/") ? "img" : "file",
        progress: 0,
        _file: u
      }));
      n("update:modelValue", [...g.value, ...s]);
      const o = () => {
        n("change", g.value), a.triggerForm && (t == null || t.$emit("change"));
      };
      U(() => {
        s.forEach((u) => {
          if (a.uploadRequest) {
            const C = u._file;
            a.uploadRequest(C, u.id, (m) => {
              k(u.id, (f) => {
                f.progress = m;
              });
            }).then(({ url: m, response: f }) => {
              k(u.id, (V) => {
                V.status = "success", V.url = m, V.response = f, o();
              });
            }).catch((m) => {
              k(u.id, (f) => {
                f.status = "failed", f.response = m, o();
              });
            });
          }
        });
      });
    }, N = (l) => {
      const e = g.value.filter(
        (s) => s.id !== l
      );
      n("delete", l), n("change", e), n("update:modelValue", e), a.triggerForm && (t == null || t.$emit(["change", "delete"]));
    };
    function R() {
      n("focus"), a.triggerForm && (t == null || t.$emit("focus"));
    }
    function q() {
      n("blur"), a.triggerForm && (t == null || t.$emit("blur"));
    }
    return (l, e) => (i(), c("div", {
      class: S(["gov-upload", [{ "is-disabled": y.value }]]),
      tabindex: "0",
      onFocus: R,
      onBlur: q
    }, [
      d("div", J, [
        d("label", K, [
          x(W, {
            size: w.value,
            type: r.buttonType,
            disabled: y.value,
            onClick: j
          }, {
            default: F(() => [
              G(v(r.buttonText), 1)
            ]),
            _: 1
          }, 8, ["size", "type", "disabled"]),
          d("input", L(l.$attrs, {
            type: "file",
            multiple: r.multiple,
            ref_key: "fileInput",
            ref: b,
            disabled: y.value,
            onChange: E,
            class: "gov-upload__original"
          }), null, 16, M)
        ]),
        z(l.$slots, "append", {}, () => [
          r.append ? (i(), c("div", Q, v(r.append), 1)) : p("", !0)
        ])
      ]),
      z(l.$slots, "tip", {}, () => [
        r.tip ? (i(), c("div", X, v(r.tip), 1)) : p("", !0)
      ]),
      (i(!0), c(B, null, O(g.value, (s, o) => (i(), c("div", {
        class: "gov-upload__list",
        key: o
      }, [
        d("div", {
          class: S(["gov-upload__item", [`is-${s.status}`]])
        }, [
          d("div", Y, [
            d("div", Z, [
              s.status === "pending" ? (i(), h(_, {
                key: 0,
                name: "time"
              })) : p("", !0),
              s.status === "success" ? (i(), h(_, {
                key: 1,
                name: "success"
              })) : p("", !0),
              s.status === "failed" ? (i(), h(_, {
                key: 2,
                name: "error"
              })) : p("", !0)
            ]),
            d("div", I, [
              d("div", ee, [
                s.type === "img" ? (i(), c(B, { key: 0 }, [
                  s.status === "success" ? (i(), c("img", {
                    key: 0,
                    src: s.url
                  }, null, 8, te)) : (i(), h(_, {
                    key: 1,
                    name: "picture-outline"
                  }))
                ], 64)) : (i(), h(_, {
                  key: 1,
                  name: "folder-opened"
                }))
              ]),
              d("div", se, v(s.name), 1)
            ]),
            y.value ? p("", !0) : (i(), c("div", {
              key: 0,
              class: "gov-upload__delete",
              onClick: (u) => N(s.id)
            }, [
              x(_, { name: "circle-close" })
            ], 8, le))
          ]),
          s.status === "pending" ? (i(), c("div", ae, [
            d("div", {
              class: "gov-upload__progress-bar",
              style: P({ width: `${s.progress}%` })
            }, null, 4)
          ])) : p("", !0)
        ], 2)
      ]))), 128))
    ], 34));
  }
});
export {
  oe as default
};
