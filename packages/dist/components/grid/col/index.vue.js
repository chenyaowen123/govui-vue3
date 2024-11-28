import { computed as f, openBlock as l, createElementBlock as o, normalizeClass as a, unref as d, normalizeStyle as s, renderSlot as i } from "vue";
import { useResponsive as p } from "./useResponsive.js";
const x = /* @__PURE__ */ Object.assign({
  name: "GovCol"
}, {
  __name: "index",
  props: {
    // 栅格占据的列数 0 - 24，优先级低于响应式，0 表示不显示，undefined 不设置
    span: {
      type: Number,
      default: void 0,
      validator: (e) => e === void 0 || e >= 0 && e <= 24
    },
    // 栅格左侧的间隔格数，0 - 24
    offset: {
      type: Number,
      default: 0,
      validator: (e) => e >= 0 && e <= 24
    },
    // flex 布局填充
    flex: {
      type: [String, Number],
      default: void 0
    },
    // flex 布局下，栅格顺序，取 0,1,2...
    order: {
      type: Number,
      default: 0
    },
    xs: {
      type: [Number, Object],
      default: void 0
    },
    sm: {
      type: [Number, Object],
      default: void 0
    },
    md: {
      type: [Number, Object],
      default: void 0
    },
    lg: {
      type: [Number, Object],
      default: void 0
    },
    xl: {
      type: [Number, Object],
      default: void 0
    },
    xxl: {
      type: [Number, Object],
      default: void 0
    }
  },
  setup(e) {
    const t = e, n = f(() => typeof t.flex == "number" ? `${t.flex} ${t.flex} auto` : t.flex), r = p(t);
    return (u, m) => (l(), o("div", {
      class: a(`gov-grid-col gov-grid-col-${d(r).span} gov-grid-offset-${d(r).offset}`),
      style: s([{ "padding-left": "var(--xGap)", "padding-right": "var(--xGap)" }, `flex: ${n.value}; order: ${t.order};`])
    }, [
      i(u.$slots, "default")
    ], 6));
  }
});
export {
  x as default
};
