import { computed as n, openBlock as o, createElementBlock as l, normalizeClass as p, Fragment as k, createElementVNode as a, normalizeStyle as c, createVNode as m, Transition as v, withCtx as f, renderSlot as d, createTextVNode as i, toDisplayString as y } from "vue";
const $ = { viewBox: "0 0 120 120" }, C = ["r", "stroke-width", "stroke"], S = ["r", "stroke-width"], x = { class: "gov-progress-circle__content" }, w = { key: 0 }, W = { key: 1 }, N = { class: "gov-progress-line__content" }, B = { key: 0 }, D = { key: 1 }, z = /* @__PURE__ */ Object.assign({
  name: "GovProgress"
}, {
  __name: "progress",
  props: {
    modelValue: {
      type: Number,
      default: 0,
      validator: (e) => e >= 0 && e <= 100
      // 绑定值0-100
    },
    strokeWidth: {
      type: Number,
      default: 6,
      // 环形或者线形的宽度
      validator: (e) => e >= 2 && e <= 50
      // 绑定值2-50
    },
    type: {
      type: String,
      default: "line",
      validator: (e) => ["line", "circle"].includes(e)
      // 线或者圆形
    },
    backgroundColor: {
      type: String,
      default: "#e6e8eb"
      // progress 背景色
    },
    color: {
      type: String,
      default: "#e74c3c"
      // progress主色
    },
    completeColor: {
      type: String,
      default: "#27ae60"
      // 100%（完成后）的色彩
    }
  },
  setup(e) {
    const t = e, u = n(() => 60 - t.strokeWidth / 2), g = n(() => t.modelValue === 100 ? t.completeColor : t.color), h = n(() => {
      const r = 2 * Math.PI * u.value, s = (100 - t.modelValue) / 100 * r;
      return {
        stroke: g.value,
        strokeDasharray: `${r}px`,
        strokeDashoffset: `${s}px`,
        transition: "stroke-dashoffset 0.5s ease-out, stroke 0.5s ease-out"
      };
    }), V = n(() => ({
      borderRadius: `${t.strokeWidth}px`,
      backgroundColor: t.backgroundColor
    })), b = n(() => ({
      width: `${t.modelValue}%`,
      height: `${t.strokeWidth}px`,
      borderRadius: `${t.strokeWidth}px`,
      backgroundColor: g.value
    }));
    return (r, s) => (o(), l("div", {
      class: p(`gov-progress gov-progress-${e.type}`)
    }, [
      e.type === "circle" ? (o(), l(k, { key: 0 }, [
        (o(), l("svg", $, [
          a("circle", {
            cx: "60",
            cy: "60",
            r: u.value,
            "stroke-width": e.strokeWidth,
            stroke: e.backgroundColor,
            fill: "none"
          }, null, 8, C),
          a("circle", {
            cx: "60",
            cy: "60",
            r: u.value,
            "stroke-width": e.strokeWidth,
            style: c(h.value),
            "stroke-linecap": "round",
            fill: "none"
          }, null, 12, S)
        ])),
        a("div", x, [
          m(v, { name: "gov-progress-fade" }, {
            default: f(() => [
              e.modelValue < 100 ? (o(), l("span", w, [
                d(r.$slots, "default", { value: e.modelValue }, () => [
                  i(y(e.modelValue) + "%", 1)
                ])
              ])) : (o(), l("span", W, [
                d(r.$slots, "default", { value: e.modelValue }, () => [
                  s[0] || (s[0] = i("完成"))
                ])
              ]))
            ]),
            _: 3
          })
        ])
      ], 64)) : (o(), l(k, { key: 1 }, [
        a("div", {
          class: "gov-progress-line__bar",
          style: c(V.value)
        }, [
          a("div", {
            class: "gov-progress-line__bar-inner",
            style: c(b.value)
          }, null, 4)
        ], 4),
        a("div", N, [
          m(v, { name: "gov-progress-fade" }, {
            default: f(() => [
              e.modelValue < 100 ? (o(), l("span", B, [
                d(r.$slots, "default", { value: e.modelValue }, () => [
                  i(y(e.modelValue) + "%", 1)
                ])
              ])) : (o(), l("span", D, [
                d(r.$slots, "default", { value: e.modelValue }, () => [
                  s[1] || (s[1] = i("完成"))
                ])
              ]))
            ]),
            _: 3
          })
        ])
      ], 64))
    ], 2));
  }
});
export {
  z as default
};
