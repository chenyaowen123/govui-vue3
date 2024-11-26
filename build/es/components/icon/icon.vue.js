import { openBlock as n, createElementBlock as o, normalizeClass as t, normalizeStyle as a } from "vue";
const l = /* @__PURE__ */ Object.assign({
  name: "GovIcon"
}, {
  __name: "icon",
  props: {
    name: String,
    size: String
  },
  setup(e) {
    return (i, c) => (n(), o("i", {
      class: t(["gov-icon", `gov-icon-${e.name}`]),
      style: a(e.size ? { fontSize: `${parseFloat(e.size)}px` } : {})
    }, null, 6));
  }
});
export {
  l as default
};
