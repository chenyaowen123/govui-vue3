import { openBlock as o, createElementBlock as e, renderSlot as n } from "vue";
const r = { class: "gov-button-group" }, c = /* @__PURE__ */ Object.assign({
  name: "GovButtonGroup"
}, {
  __name: "button-group",
  setup(s) {
    return (t, u) => (o(), e("div", r, [
      n(t.$slots, "default")
    ]));
  }
});
export {
  c as default
};
