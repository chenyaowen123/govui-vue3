import { openBlock as t, createElementBlock as n, renderSlot as o } from "vue";
const s = { class: "gov-timeline" }, a = /* @__PURE__ */ Object.assign({
  name: "GovTimeline"
}, {
  __name: "timeline",
  setup(i) {
    return (e, l) => (t(), n("div", s, [
      o(e.$slots, "default")
    ]));
  }
});
export {
  a as default
};
