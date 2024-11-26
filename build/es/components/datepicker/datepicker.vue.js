import { computed as a, inject as V, openBlock as g, createElementBlock as z, normalizeClass as B, normalizeStyle as $, createVNode as S, unref as T, mergeProps as C } from "vue";
import v from "../../node_modules/@vuepic/vue-datepicker/dist/vue-datepicker.js";
/* empty css                                                      */
import { useReset as x } from "../utils/useReset.js";
const G = /* @__PURE__ */ Object.assign({
  name: "GovDatepicker"
}, {
  __name: "datepicker",
  props: {
    modelValue: {},
    width: {
      type: Number,
      default: null
      // 日期选择器宽度
    },
    mode: {
      type: String,
      default: "date"
      // 选择器模式，默认 'date'
    },
    showTime: {
      type: Boolean,
      default: !1
      // 是否增加时间选择
    },
    showToday: {
      type: Boolean,
      default: !1
      // 是否展示“今天”按钮
    },
    modelType: {
      type: String,
      default: "format"
      // v-model 值类型，默认 'format'
    },
    size: String,
    disabled: Boolean,
    // 事件是否触发 formItem 表单验证，这在嵌套控件时候很有用
    triggerForm: {
      type: Boolean,
      default: !0
    }
  },
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur",
    "clear"
  ],
  setup(n, { emit: s }) {
    const t = n, u = a(() => t.mode === "time"), c = a(() => t.mode === "week"), m = a(() => t.mode === "month"), p = a(() => t.mode === "year"), e = V("govFormItem", null), l = s, r = a({
      get() {
        return t.modelValue;
      },
      set(i) {
        l("update:modelValue", i), l("change"), t.triggerForm && (e == null || e.$emit("change"));
      }
    });
    x(e, t, (i) => {
      l("update:modelValue", i);
    });
    const f = a(() => (t == null ? void 0 : t.size) || (e == null ? void 0 : e.size)), o = a(() => (t == null ? void 0 : t.disabled) || (e == null ? void 0 : e.disabled)), h = a(() => (e == null ? void 0 : e.validateState) === "error"), k = () => {
      l("focus"), t.triggerForm && (e == null || e.$emit("focus"));
    }, y = () => {
      l("blur"), t.triggerForm && (e == null || e.$emit("blur"));
    }, b = () => {
      l("clear"), t.triggerForm && (e == null || e.$emit("clear"));
    };
    return (i, d) => (g(), z("div", {
      class: B(["gov-datepicker", [
        `gov-datepicker--size-${f.value}`,
        { "is-error": h.value, "is-disabled": o.value }
      ]]),
      style: $(n.width ? `width: ${t.width}px;` : "")
    }, [
      S(T(v), C({
        locale: "zh-CN",
        "month-change-on-scroll": !1,
        "enable-time-picker": t.showTime,
        "time-picker": u.value,
        "week-picker": c.value,
        "month-picker": m.value,
        "year-picker": p.value,
        "now-button-label": "今天",
        "show-now-button": t.showToday,
        "auto-apply": "",
        "text-input": "",
        "model-type": t.modelType,
        "day-names": ["一", "二", "三", "四", "五", "六", "日"],
        disabled: o.value
      }, i.$attrs, {
        modelValue: r.value,
        "onUpdate:modelValue": d[0] || (d[0] = (w) => r.value = w),
        onFocus: k,
        onBlur: y,
        onCleared: b
      }), null, 16, ["enable-time-picker", "time-picker", "week-picker", "month-picker", "year-picker", "show-now-button", "model-type", "disabled", "modelValue"])
    ], 6));
  }
});
export {
  G as default
};
