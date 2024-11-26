import { onMounted as i, onBeforeUnmount as a, unref as r } from "vue";
function m(t, s) {
  const o = (e) => {
    (Array.isArray(t) ? t.map(r) : [r(t)]).some((n) => n && (n === e.target || n instanceof Element && n.contains(e.target))) || s(e);
  };
  i(() => {
    document.addEventListener("click", o);
  }), a(() => {
    document.removeEventListener("click", o);
  });
}
export {
  m as default
};
