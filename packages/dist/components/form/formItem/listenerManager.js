import { reactive as h, onUnmounted as A } from "vue";
function d() {
  const t = h(/* @__PURE__ */ new Map()), f = (r, s) => {
    (Array.isArray(r) ? r : [r]).forEach((e) => {
      t.has(e) || t.set(e, /* @__PURE__ */ new Set()), t.get(e).add(s), A(() => {
        a(e, s);
      });
    });
  }, a = (r, s) => {
    (Array.isArray(r) ? r : [r]).forEach((e) => {
      const o = t.get(e);
      o && (o.delete(s), o.size === 0 && t.delete(e));
    });
  };
  return { on: f, off: a, emit: (r, s) => {
    const n = Array.isArray(r) ? r : [r];
    n.forEach((o) => {
      const c = t.get(o);
      c && c.forEach((i) => i(s));
    });
    const e = t.get("*");
    e && n.forEach((o) => {
      e.forEach(
        (c) => c(o, s)
      );
    });
  } };
}
export {
  d as useListenerManager
};
