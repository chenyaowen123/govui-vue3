import { computed as s, openBlock as i, createElementBlock as l, normalizeClass as r, renderSlot as u, withDirectives as d, createElementVNode as c, toDisplayString as m, vShow as g } from "vue";
const f = ["textContent"], p = /* @__PURE__ */ Object.assign({
  name: "GovBadge"
}, {
  __name: "badge",
  props: {
    value: [String, Number],
    // 值
    max: Number,
    // 最大值
    isDot: Boolean,
    // 小圆点
    hidden: Boolean,
    // 隐藏 badge
    transparent: Boolean,
    // 是否透明
    type: {
      type: String,
      default: "primary",
      validator: (e) => [
        "default",
        "primary",
        "success",
        "info",
        "warning",
        "danger"
      ].includes(e)
    }
  },
  setup(e) {
    const o = e, a = s(() => {
      if (o.isDot) return;
      const { value: t, max: n } = o;
      return typeof t == "number" && typeof n == "number" && n < t ? `${n}+` : t;
    });
    return (t, n) => (i(), l("div", {
      class: r(["gov-badge", { "is-transparent": e.transparent }])
    }, [
      u(t.$slots, "default"),
      d(c("sup", {
        textContent: m(a.value),
        class: r(["gov-badge__content", [
          e.type ? "gov-badge__content--" + e.type : null,
          {
            "is-fixed": t.$slots.default,
            "is-dot": e.isDot
          }
        ]])
      }, null, 10, f), [
        [g, !e.hidden && (a.value || a.value === 0 || e.isDot)]
      ])
    ], 2));
  }
});
export {
  p as default
};
