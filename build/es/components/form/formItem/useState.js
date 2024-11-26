import { computed as i } from "vue";
function c(e, t) {
  const l = i(() => (e == null ? void 0 : e.size) || (t == null ? void 0 : t.size) || "default"), a = i(() => (e == null ? void 0 : e.disabled) || (t == null ? void 0 : t.disabled)), d = i(() => (e == null ? void 0 : e.labelPosition) || (t == null ? void 0 : t.labelPosition)), u = i(() => {
    let n = (e == null ? void 0 : e.labelWidth) || (t == null ? void 0 : t.labelWidth);
    return n ? typeof n == "string" ? n : n + "px" : null;
  });
  return { innerSize: l, innerDisabled: a, innerLabelPosition: d, innerLabelWidth: u };
}
export {
  c as useState
};
