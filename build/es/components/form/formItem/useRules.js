import { computed as l } from "vue";
function g(u, t) {
  const i = l(() => {
    let r = u != null && u.prop ? t == null ? void 0 : t.rules[u.prop] : null, e = u.rules || r || [];
    return e = Array.isArray(e) ? e : [e], e = e.map((n) => Object.assign({}, n)), e;
  });
  return { isRequired: l(
    () => i.value.some((r) => r.required)
  ), innerRules: i, getTriggerRule: (r) => i.value.filter((e) => !e.trigger || !r ? !0 : Array.isArray(e.trigger) ? e.trigger.indexOf(r) > -1 : e.trigger === r) };
}
export {
  g as useRules
};
