import { openBlock as n, createElementBlock as t, renderSlot as a } from "vue";
const o = { class: "gov-main" }, m = /* @__PURE__ */ Object.assign({
  name: "GovMain"
}, {
  __name: "main",
  setup(s) {
    return (e, r) => (n(), t("main", o, [
      a(e.$slots, "default")
    ]));
  }
});
export {
  m as default
};
