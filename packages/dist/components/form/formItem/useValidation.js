import { ref as v, computed as V } from "vue";
import { useRules as P } from "./useRules.js";
import { getPropByPath as S } from "./utils.js";
import q from "../../../node_modules/async-validator/dist-web/index.js";
function T(l, a, f) {
  const { isRequired: m, getTriggerRule: p } = P(l, a), e = v(!0), n = v(""), g = V(() => {
    let r = a == null ? void 0 : a.model;
    if (r && l.prop) {
      let i = l.prop;
      return S(r, i, !0).value;
    } else
      return;
  }), h = (r, i = () => {
  }) => {
    let u = p(r);
    if (!u || u.length === 0)
      return i(e.value), !0;
    e.value = "validating";
    const d = {}, o = {};
    d[l.prop] = g.value, o[l.prop] = u.map((t) => (delete t.trigger, t)), new q(o).validate(
      d,
      { firstFields: !0 },
      (t, R) => {
        let c = t && t.length !== 0;
        e.value = c ? "error" : "success", n.value = c ? t[0].message : "", i(e.value, R);
      }
    );
  }, s = () => {
    e.value = "", n.value = "";
  };
  return {
    isRequired: m,
    validateState: e,
    validateMessage: n,
    validate: h,
    clearValidate: s,
    resetField: () => {
      f.emit("reset"), s();
    }
  };
}
export {
  T as useValidation
};
