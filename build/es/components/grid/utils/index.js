import { onMounted as t, onUnmounted as r } from "vue";
function d(e, n, o) {
  t(() => e.addEventListener(n, o)), r(() => e.removeEventListener(n, o));
}
export {
  d as useEventListener
};
