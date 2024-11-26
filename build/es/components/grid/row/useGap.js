import { ref as o, computed as i } from "vue";
import { useEventListener as l } from "../utils/index.js";
function m(e) {
  const r = o(window.innerWidth);
  function u() {
    r.value = window.innerWidth;
  }
  l(window, "resize", u);
  function n(t) {
    return r.value >= 1600 && t.xxl ? t.xxl : r.value >= 1200 && t.xl ? t.xl : r.value >= 992 && t.lg ? t.lg : r.value >= 768 && t.md ? t.md : r.value >= 576 && t.sm ? t.sm : r.value < 576 && t.xs ? t.xs : 0;
  }
  const f = i(() => typeof e.gutter == "number" ? e.gutter : Array.isArray(e.gutter) ? typeof e.gutter[0] == "object" ? n(e.gutter[0]) : e.gutter[0] : typeof e.gutter == "object" ? n(e.gutter) : 0), a = i(() => Array.isArray(e.gutter) ? typeof e.gutter[1] == "object" ? n(e.gutter[1]) : e.gutter[1] : 0);
  return { xGap: f, yGap: a };
}
export {
  m as useGap
};
