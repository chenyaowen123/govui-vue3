import { ref as v, onMounted as m, onUnmounted as p } from "vue";
function x(r) {
  const f = new MutationObserver((i) => {
    i.forEach((c) => {
      c.type === "childList" && u();
    });
  }), u = () => {
    var a, g, y;
    const i = (a = r.value) == null ? void 0 : a.querySelectorAll(
      "thead tr th.gov-table-column--fixed-left"
    ), c = (g = r.value) == null ? void 0 : g.querySelectorAll(
      "thead tr th.gov-table-column--fixed-right"
    );
    if (i.length === 0 && c.length === 0)
      return;
    const d = v([]), h = v([]);
    d.value = Array.from(i).map((n, o, l) => l.slice(0, o).reduce((e, t) => e + t.offsetWidth, 0)), h.value = Array.from(c).map((n, o, l) => l.slice(o + 1).reduce((e, t) => e + t.offsetWidth, 0)), ((y = r.value) == null ? void 0 : y.querySelectorAll("tr")).forEach((n) => {
      const o = n.querySelectorAll(
        ".gov-table-column--fixed-left"
      );
      d.value.forEach((s, e) => {
        const t = o[e];
        t && (t.style.left = `${s}px`), e === o.length - 1 && t.classList.add("is-fixed-left-last");
      });
      const l = n.querySelectorAll(
        ".gov-table-column--fixed-right"
      );
      h.value.forEach((s, e) => {
        const t = l[e];
        t && (t.style.right = `${s}px`), e === 0 && t.classList.add("is-fixed-right-first");
      });
    });
  };
  m(() => {
    u(), f.observe(r.value, { childList: !0, subtree: !0 });
  }), p(() => {
    f.disconnect();
  });
}
export {
  x as useStickyTable
};
