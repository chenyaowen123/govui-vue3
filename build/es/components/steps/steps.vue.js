import { ref as r, provide as c, reactive as p, toRefs as a, openBlock as i, createElementBlock as l, renderSlot as u } from "vue";
const d = { class: "gov-steps" }, m = /* @__PURE__ */ Object.assign({
  name: "GovSteps"
}, {
  __name: "steps",
  props: {
    active: Number,
    // 在第几个 1 开始
    center: Boolean,
    // 是否居中
    size: String
  },
  setup(s) {
    const o = s, t = r([]);
    function n(e) {
      t.value.push(e);
    }
    return c(
      "govSteps",
      p({
        ...a(o),
        steps: t,
        addSteps: n
      })
    ), (e, v) => (i(), l("div", d, [
      u(e.$slots, "default")
    ]));
  }
});
export {
  m as default
};
