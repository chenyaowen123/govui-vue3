import { ref as C, inject as x, computed as i, watch as k, openBlock as A, createBlock as L, mergeProps as S, withCtx as f, createVNode as m, normalizeClass as j, createElementVNode as N } from "vue";
import U from "../input/input.vue.js";
import D from "../popper/popper.vue.js";
import E from "../icon/icon.vue.js";
import G from "./cascader-panel.vue.js";
import { useReset as O } from "../utils/useReset.js";
const P = { class: "gov-cascader__box" }, M = /* @__PURE__ */ Object.assign({
  name: "GovCascader"
}, {
  __name: "cascader",
  props: {
    modelValue: {
      type: Array,
      default: () => []
      // 绑定在输入框的值
    },
    options: {
      type: Array,
      default: () => []
    },
    size: String,
    placeholder: {
      type: String,
      default: "请输入"
    },
    disabled: Boolean,
    clear: {
      type: Boolean,
      default: !0
    },
    // 是否显示完整的路径，将其赋值为false则仅显示最后一级
    showAllLevels: {
      type: Boolean,
      default: !0
    },
    // 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
    triggerForm: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "change",
    "focus",
    "blur",
    "clear",
    "update:modelValue"
  ],
  setup(d, { emit: h }) {
    const l = d, t = C(!1), n = h, e = x("govFormItem", null), c = i({
      get() {
        return l.modelValue;
      },
      set(a) {
        n("change", a), n("update:modelValue", a), l.triggerForm && (e == null || e.$emit("change"));
      }
    });
    O(e, l, (a) => {
      n("update:modelValue", a);
    });
    const V = i(() => (l == null ? void 0 : l.size) || (e == null ? void 0 : e.size)), o = i(() => (l == null ? void 0 : l.disabled) || (e == null ? void 0 : e.disabled)), v = (a, r) => r.map((s) => {
      const p = (z, g) => {
        for (const u of z) {
          if (u.value === g)
            return u.label;
          if (u.children) {
            const b = p(u.children, g);
            if (b) return b;
          }
        }
        return null;
      };
      return p(a, s);
    }), _ = i(() => {
      let a = v(l.options, c.value);
      return l.showAllLevels ? a.join(" / ") : a.length > 0 ? a[a.length - 1] : "";
    });
    k(
      () => o.value,
      () => {
        t.value = !1;
      }
    );
    const $ = () => {
      o.value || (t.value = !t.value);
    }, y = () => {
      n("focus"), l.triggerForm && (e == null || e.$emit("focus"));
    }, B = () => {
      n("blur"), l.triggerForm && (e == null || e.$emit("blur"));
    }, w = () => {
      t.value = !1, n("clear"), n("change", []), n("update:modelValue", []), l.triggerForm && (e == null || e.$emit(["clear", "change"]));
    };
    return (a, r) => (A(), L(D, S({
      modelValue: t.value,
      "onUpdate:modelValue": r[2] || (r[2] = (s) => t.value = s),
      padding: "0"
    }, a.$attrs, {
      class: ["gov-cascader", [{ "is-disabled": o.value }]],
      placement: "bottom-start"
    }), {
      reference: f(() => [
        m(U, {
          class: "gov-cascader__input",
          modelValue: _.value,
          size: V.value,
          placeholder: d.placeholder,
          disabled: o.value,
          onFocus: y,
          onBlur: B,
          onClear: w,
          onClick: $,
          readonly: "",
          triggerForm: !1
        }, {
          suffix: f(() => [
            m(E, {
              name: "arrow-down",
              class: j(["gov-cascader__icon", [{ "is-open": t.value }]])
            }, null, 8, ["class"])
          ]),
          _: 1
        }, 8, ["modelValue", "size", "placeholder", "disabled"])
      ]),
      default: f(() => [
        N("div", P, [
          m(G, {
            modelValue: c.value,
            "onUpdate:modelValue": r[0] || (r[0] = (s) => c.value = s),
            options: d.options,
            onSelect: r[1] || (r[1] = (s) => t.value = !1)
          }, null, 8, ["modelValue", "options"])
        ])
      ]),
      _: 1
    }, 16, ["modelValue", "class"]));
  }
});
export {
  M as default
};
