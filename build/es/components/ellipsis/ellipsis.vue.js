import { ref as o, computed as p, openBlock as i, createElementBlock as a, normalizeClass as v, createElementVNode as s, normalizeStyle as g, renderSlot as x, withModifiers as h, createVNode as k, createCommentVNode as y } from "vue";
import b from "../icon/icon.vue.js";
const N = /* @__PURE__ */ Object.assign({
  name: "GovEllipsis"
}, {
  __name: "ellipsis",
  props: {
    maxLines: {
      type: [Number, String],
      default: 1
    },
    fold: {
      type: Boolean,
      default: !1
      // 是否为折叠模式
    },
    foldHeight: {
      type: [Number, String],
      default: 100
      // 折叠下的高度
    },
    hideFoldup: Boolean
    // 隐藏收起按钮
  },
  emits: ["toggle"],
  setup(l, { emit: n }) {
    const t = l, d = o(null), e = o(!1), r = p(() => e.value ? {} : t.fold ? {
      maxHeight: `${parseFloat(t.foldHeight)}px`
    } : {
      display: "-webkit-box",
      "-webkit-box-orient": "vertical",
      "-webkit-line-clamp": t.maxLines
    }), u = () => {
      t.fold || (e.value = !e.value);
    }, c = n, f = () => {
      e.value = !e.value, c("toggle", e.value);
    };
    return (m, w) => (i(), a("div", {
      class: v(["gov-ellipsis", [
        l.fold ? "is-fold" : "is-overflow",
        {
          "is-expanded": e.value,
          "has-foldup": !l.hideFoldup
        }
      ]])
    }, [
      s("div", {
        ref_key: "textRef",
        ref: d,
        class: "gov-ellipsis__content",
        style: g(r.value),
        onClick: u
      }, [
        x(m.$slots, "default")
      ], 4),
      l.fold && (!l.hideFoldup || !e.value) ? (i(), a("div", {
        key: 0,
        class: "gov-ellipsis__toggle",
        onClick: h(f, ["stop"])
      }, [
        s("span", null, [
          k(b, { name: "arrow-down" })
        ])
      ])) : y("", !0)
    ], 2));
  }
});
export {
  N as default
};
